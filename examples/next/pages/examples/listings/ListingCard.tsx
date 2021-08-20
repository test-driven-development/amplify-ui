import {
  Card,
  Heading,
  Text,
  View,
  Image,
  Flex,
  Badge,
  Button,
  Rating,
  Placeholder,
  IconWhatshot,
  IconCheckCircle,
  IconFavorite,
} from '@aws-amplify/ui-react';

import theme from '@aws-amplify/ui-theme-base';

export const ListingCard = ({
  title,
  rating,
  ratingCount,
  price,
  isLoaded,
  img,
  plus,
  verified,
  hot,
  description,
}: {
  title?: string;
  rating?: number;
  ratingCount?: number;
  price?: number;
  isLoaded?: boolean;
  img?: string;
  plus?: boolean;
  verified?: boolean;
  hot?: boolean;
  description?: string;
}) => (
  <Card width="30rem">
    <Placeholder isLoaded={isLoaded}>
      <Flex direction="column" height="100%">
        <View height="200px">
          <Image
            src={img}
            alt="Glittering stream with old log, snowy mountain peaks tower over a green field."
            objectFit="cover"
            objectPosition="center"
            width="100%"
            height="100%"
            borderRadius="var(--amplify-radii-medium)"
          />
        </View>
        <Flex
          direction="column"
          gap="var(--amplify-space-xs)"
          className="flex-grow"
        >
          <Flex gap="var(--amplify-space-xs)">
            {plus ? (
              <Badge variation="success">
                <IconFavorite /> Favorite
              </Badge>
            ) : null}
            {verified ? (
              <Badge variation="info">
                <IconCheckCircle /> Verified
              </Badge>
            ) : null}
            {hot ? (
              <Badge variation="error">
                <IconWhatshot /> Hot
              </Badge>
            ) : null}
          </Flex>

          <Flex gap="var(--amplify-space-xxs)" direction="column">
            <Heading level={4}>{title}</Heading>
            <Flex alignItems="center" gap="var(--amplify-space-xxs)">
              <Rating value={rating} maxValue={5} />
              <Text
                variation="tertiary"
                fontSize="var(--amplify-font-sizes-small)"
              >
                {ratingCount} reviews
              </Text>
            </Flex>
            <Text variation="secondary">{description}</Text>
          </Flex>
          <Text>
            <b>${price}/</b>night
          </Text>
        </Flex>
        <Button isFullWidth={true} variation="primary">
          Book it
        </Button>
      </Flex>
    </Placeholder>
  </Card>
);
