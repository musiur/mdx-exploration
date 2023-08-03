const rehypePrettyCode = require("rehype-pretty-code");

const nextConfig = {
  experimental: {
    mdxRs: false,
  },
};

const options = {
  theme: "github-dark-dimmed",
  grid: false,
  keepBackground: false,
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});
module.exports = withMDX(nextConfig);
