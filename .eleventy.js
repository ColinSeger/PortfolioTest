module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./Src/images");
    eleventyConfig.addPassthroughCopy("./Src/images");
    eleventyConfig.addWatchTarget("./Src/script");
    eleventyConfig.addPassthroughCopy("./Src/script");
    return {
      dir: {
        input: "Src",
        output: "public"
      },
      passthroughFileCopy: true
    };
  };