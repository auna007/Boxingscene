'use strict';

/**
 * welcome-note controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::welcome-note.welcome-note');
