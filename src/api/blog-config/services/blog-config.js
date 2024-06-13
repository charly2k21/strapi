'use strict';

/**
 * blog-config service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blog-config.blog-config');
