const theme = {
  components: {
    // Name of the component
    MuiButton: {
      IconButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: "10em",
            backgroundColor: "blue",
          },
        },
      },
    },
  },
};
// const theme = {
//   components: {
//     MuiButtonBase: {
//       ":hover": {
//         backgroundColor: "#3277d5",
//       },
//     },
//   },
// };

export default theme;
