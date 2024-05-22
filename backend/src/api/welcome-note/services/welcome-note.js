'use strict';

/**
 * welcome-note service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::welcome-note.welcome-note');
