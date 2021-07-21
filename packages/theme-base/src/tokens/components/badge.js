module.exports = {
  // Default styles
  fontWeight: { value: '{fontWeights.semibold.value}' },
  fontSize: { value: '{fontSizes.small.value}' },
  textAlign: { value: 'center' },
  padding: { value: ['{space.2xs.value}', '{space.small.value}'] },
  backgroundColor: { value: '{colors.background.tertiary.value}' },
  // An arbitrarily large value to ensure that the left and right sides of the badge are perfectly rounded for any size variant
  borderRadius: { value: '9999px' },

  // Variations
  info: {
    'background-color': { value: '{colors.background.info.value}' },
  },

  warning: {
    'background-color': { value: '{colors.background.warning.value}' },
  },

  success: {
    'background-color': { value: '{colors.background.success.value}' },
  },

  error: {
    'background-color': { value: '{colors.background.error.value}' },
  },

  // Sizes
  small: {
    'font-size': { value: '{fontSizes.xs.value}' },
  },
  medium: {
    'font-size': { value: '{fontSizes.small.value}' },
  },
  large: {
    'font-size': { value: '{fontSizes.medium.value}' },
  },
};
