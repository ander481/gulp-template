import fileInclude from "gulp-file-include";
import notify from "gulp-notify";
import plumber from "gulp-plumber";

export const build = () => {
    return app.gulp.src(app.path.src.pages)
        // Handling erros, prevent gulp stop
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        // Build html file from components
        .pipe(fileInclude({
            prefix: '@@',
            basepath: '@file'
        }))
        // Make path correct
        .pipe(app.plugins.replace(/@img\//g, 'img/'))
        // Copy to dist
        .pipe(app.gulp.dest(app.path.build.pages))
        // Stream to BrowserSync
        //.pipe(app.plugins.bs.stream());
};