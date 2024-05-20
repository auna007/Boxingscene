'use strict';

/**
 * boxer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::boxer.boxer');
