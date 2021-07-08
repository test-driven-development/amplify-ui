/*
 * Style Dictionary config
 */

const { formatHelpers } = require("style-dictionary");
const fs = require('fs-extra');

const THEME_NAME = "BaseTheme";
const CSS_VARIABLE_PREFIX = "amplify-ui";
const CSS_VARIABLE_SCOPE = ":root";

module.exports = {
  source: ["src/tokens/**/*.json"],
  action: {
    generateIcons: {
      do: (dictionary, platform) => {
        const dirPath = `${__dirname}/${platform.buildPath}`;
        fs.removeSync(dirPath);
        // We could also use glob and grab all files in a directory instead of
        // having to have tokens for each icon. The files in the directory could
        // be a git submodule which is how react-icons does it.
        dictionary.allTokens.filter(token => token.path[0] === "icon")
          .forEach(token => {
            const source = fs.readFileSync(token.value);
            const filePath = `${dirPath}${token.name}.jsx`;
            
            const reactCode = `import React from 'react';
export default function ${token.name}() {
  return (
    ${source}
  )
};`
            fs.ensureDirSync(dirPath);
            fs.writeFileSync(filePath, reactCode);
          })
      }
    }
  },
  platforms: {
    icons: {
      buildPath: "dist/react/",
      transforms: ["name/cti/pascal"],
      actions: ["generateIcons"]
    },
    css: {
      transforms: ["attribute/cti", "name/cti/kebab"],
      prefix: CSS_VARIABLE_PREFIX,
      files: [
        {
          destination: "dist/variables.css",
          format: "css/variables",
          options: {
            selector: CSS_VARIABLE_SCOPE,
            outputReferences: true,
            showFileHeader: false,
          },
        },
      ],
    },
    js: {
      transformGroup: "js",
      files: [
        {
          destination: "dist/theme.js",
          format: "javascript/cjs-nested",
          options: { name: THEME_NAME },
        },
      ],
    },
    json: {
      files: [
        {
          destination: "dist/theme.json",
          format: "json/nested",
        },
      ],
    },
  },
  format: {
    "javascript/cjs-nested": CommonJSNestedFormatter,
  },
};

/*
 * CommonJS + Nested formatter
 * Exports a theme (minified) as a named export
 */
function CommonJSNestedFormatter({ dictionary, options, file }) {
  const { fileHeader, minifyDictionary } = formatHelpers;
  const themeName = options.name;

  const moduleExports = {
    [themeName]: minifyDictionary(dictionary.tokens),
  };

  return (
    fileHeader({ file }) +
    `module.exports = ${JSON.stringify(moduleExports, null, 2)};`
  );
}
