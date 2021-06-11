export type Theme = {
  colors: {
    main: string;
    secondary: string;
    error: string;
    white: string;
    text: string;
  };
};

export const DefaultTheme: Theme = {
  colors: {
    main: '#4B4644',
    secondary: '#6A9EB3',
    error: '#C7634F',
    white: '#DDE6CD',
    text: '#000000',
  },
};
