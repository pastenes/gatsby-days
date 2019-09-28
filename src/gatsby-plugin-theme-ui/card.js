const sharedStyles = {
  p: [5, 6, 7],
  boxShadow: `small`,
  mb: 8,
}

export default {
  default: {
    ...sharedStyles,
    bg: `white`,
    color: `text`,
  },
  primary: {
    ...sharedStyles,
    bg: `primary`,
    color: `white`,
  },
  secondary: {
    ...sharedStyles,
    bg: `secondary`,
    color: `white`,
  },
}
