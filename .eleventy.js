const dotenv = require("dotenv").config();
const UglifyJS = require("uglify-js");

module.exports = function(eleventyConfig) {

  eleventyConfig.addWatchTarget("./src/");

  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = UglifyJS.minify(code);
    if (minified.error) {
      console.log("UglifyJS error: ", minified.error);
      return code;
    }
    return minified.code;
  });

  //eleventyConfig.addPassthroughCopy("favicon.ico");

  return {
    pathPrefix: "/",
    dir: {
      input: ".",
      output: "_site"
    }
  };
};