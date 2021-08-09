import * as React from 'react';
import theme from '@aws-amplify/ui-theme-base/dist/theme-unminified';
import { View, Flex, Text } from '@aws-amplify/ui-react';

export const FontSizes = () => {
  return (
    <>
      {Object.keys(theme.fontSizes).map((fontSize) => {
        const { value, name } = theme.fontSizes[fontSize];
        return (
          <Text fontSize={value} lineHeight={1}>
            {name}
          </Text>
        );
      })}
    </>
  );
};
