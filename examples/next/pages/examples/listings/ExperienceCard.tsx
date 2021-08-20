import { Card, Image, Text } from '@aws-amplify/ui-react';

import theme from '@aws-amplify/ui-theme-base';

export const ExperienceCard = ({ img, title }) => (
  <Card width="20rem" padding="0" className="experience-card">
    <Image
      src={img}
      alt={title}
      objectFit="cover"
      objectPosition="center"
      width="100%"
      height="20rem"
      borderRadius="var(--amplify-radii-small)"
    />
    <Text className="experience-card-text">{title}</Text>
  </Card>
);
