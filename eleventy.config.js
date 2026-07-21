module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("style.css");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("images");

  eleventyConfig.addGlobalData("catNames", {
    letters: "Letters to self",
    physics: "Physics",
    music: "Music",
    travel: "Travel",
    reading: "Daily reading",
    nostalgia: "Nostalgia",
    poetry: "Poetry"
  });

  eleventyConfig.addFilter("dispDate", function (d) {
    return new Date(d).toLocaleDateString("en-GB", {
      day: "2-digit", month: "short", year: "numeric", timeZone: "UTC"
    });
  });

  return { dir: { input: ".", includes: "_includes", output: "_site" } };
};
