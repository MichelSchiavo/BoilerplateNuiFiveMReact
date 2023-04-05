const theme = {
  colors: {
    black: "#000000",
    white: "#FFFFFF",
  },
} as const;

export default theme;

export type Theme = typeof theme;
export type Colors = keyof Theme["colors"];
