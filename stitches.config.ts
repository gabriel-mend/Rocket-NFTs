import { createStitches, globalCss } from "@stitches/react";

export const { styled, getCssText, css } = createStitches({
  theme: {
    fonts: {
      montserrat: "montserrat, sans-serif",
    },
    colors: {
      bodyBackground: "#0e0e0e",
      logo: "#ff5b50",
      card: "#252525",
      text: "#fff",
      subtitle: "#5a5757",
      blacktext: "#000",
      input: "#0D0D0D",
    },
    fontSizes: {
      1: "16px",
      2: "18px",
      3: "20px",
      4: "30px",
      5: "40px",
      6: "50px",
    },
  },
  
});

export const globalStyles = globalCss({
  '*': { 
    margin: 0, 
    padding: 0,
    boxSizing: "border-box",
  },
  body: {
    background: "$bodyBackground",
    fontFamily: "$montserrat"
  },
  utils: {
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
});
