/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Will Herrmann | Personal Website`,
    description: `Personal website of Will Herrmann (William Herrmann) - Software Developer and Technology Enthusiast`,
    author: `Will Herrmann`,
    siteUrl: `https://wherrmann.github.io`,
    keywords: [
      'Will Herrmann',
      'William Herrmann',
      'Software Developer',
      'Web Development',
      'Portfolio'
    ],
    image: `/og-image.jpg`, // We'll add this image later
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
  ],
};