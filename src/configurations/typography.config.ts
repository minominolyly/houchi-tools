import Typography from "typography";

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.50,
  googleFonts: [
    {
      name: "Kaisei+Decol",
      styles: ["400"],
    },
    {
      name: "Zen+Maru+Gothic",
      styles: ["400"],
    }
  ],
  headerFontFamily: ["Kaisei Decol", "serif"],
  bodyFontFamily: ["Zen Maru Gothic", "serif"],
});

export default typography;
