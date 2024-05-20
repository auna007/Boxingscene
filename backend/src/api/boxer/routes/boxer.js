'use strict';

/**
 * boxer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::boxer.boxer');
