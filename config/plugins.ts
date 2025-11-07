export default () => ({
  'strapi-csv-import-export': {
    config: {
      authorizedExports: ['api::user.user',"api::emails.email"],
      authorizedImports: ['api::user.user',"api::emails.email"],
    },
  },
});
