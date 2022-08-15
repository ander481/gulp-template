import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";


global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Tasks

import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { server } from "./gulp/tasks/server.js";
import { watchComponents } from "./gulp/tasks/watchComponents.js";
import { watchPages } from "./gulp/tasks/watchPages.js";

// --------------------------------------------

const watch = gulp.parallel( watchComponents, watchPages )

const dev = gulp.series(reset, copy, gulp.parallel( watch, server));

gulp.task('default', dev);