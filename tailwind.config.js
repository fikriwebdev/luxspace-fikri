module.exports = {
  purge: {
    enabled: true,
    content: ["*.html"],
    css: ["src/styles.css"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto"],
        Poppins: ["Poppins"],
        OpenSans: ["Open Sans"],
      },
      colors: {
        primary: "#0E6FFF",
        secondary: "#FF4242",
      },
      height: {
        banner: "90vh",
        320: "320px",
        328: "328px",
        180: "180px",
        106: "106px",
        609: "609px",
        90: "90px",
      },
      minHeight: {
        feho: "90vh",
      },
      width: {
        978: "978px",
        335: "335px",
        287: "287px",
        247: "247px",
        106: "106px",
        560: "560px",
        90: "90px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
