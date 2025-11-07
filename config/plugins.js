export default () => ({
  'strapi-csv-import-export': {
    config: {
      authorizedExports: ['api::user.user', 'api::email.email'],
      authorizedImports: ['api::user.user', 'api::email.email'],
    },
  },
});
