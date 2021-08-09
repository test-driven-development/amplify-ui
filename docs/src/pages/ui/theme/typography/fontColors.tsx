import * as React from 'react';
import theme from '@aws-amplify/ui-theme-base/dist/theme-unminified';
import { View, Flex, Text } from '@aws-amplify/ui-react';

export const FontColors = () => {
  return (
    <>
      <table>
        <thead>
          <th>Token</th>
          <th>CSS variable</th>
          <th>JS reference</th>
        </thead>
        <tbody>
          {Object.keys(theme.colors.font).map((fontColor) => {
            const { value, name, original, path } =
              theme.colors.font[fontColor];
            return (
              <tr>
                <td>
                  <Text color={value} fontSize="2rem">
                    Aa
                  </Text>
                </td>
                <td>
                  <code>--{name}</code>
                </td>
                <td>
                  <code>{path.join('.')}</code>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
