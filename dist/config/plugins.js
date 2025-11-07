"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    'strapi-csv-import-export': {
        enabled: true,
        config: {
            authorizedExports: ['api::user.user', 'api::email.email'],
            authorizedImports: ['api::user.user', 'api::email.email'],
        },
    },
});
