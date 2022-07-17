"use strict";

const { parallel } = require('gulp');
// Module which requires Dir
const requireDir = require('require-dir');
// Dir with Gulp Tasks
const tasks = requireDir('./tasks');



// Export Gulp Tasks
exports.styles = tasks.styles;

// Gulp CLI
exports.default = parallel(
    this.styles
);