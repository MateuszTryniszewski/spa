module.exports = {
  publicPath: '/spa/dist/',
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/scss/main.scss";
        `,
      },
    },
  },
};
