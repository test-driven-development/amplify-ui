import * as react from 'react';
import { Heading, Text, View } from '@aws-amplify/ui-react';

import theme from '@aws-amplify/ui-theme-base';

export const SectionHeading = ({ title, subtitle }) => (
  <View padding={`0 0 var(--amplify-space-large) 0`}>
    <Heading level={2}>{title}</Heading>
    <Text variation="tertiary" fontSize="var(--amplify-font-sizes-large">
      {subtitle}
    </Text>
  </View>
);
