module.exports = ({ env }) => ({
  'color-picker': {
    enabled: true,
  },
  slugify: {
    enabled: true,
      config: {
        contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});