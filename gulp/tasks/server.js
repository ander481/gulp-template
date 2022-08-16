import chalk from "chalk";

export const server = (done) => {
  app.plugins.bs.create("Server");
  app.plugins.bs.init({
    server: app.path.build.pages,
  });
  console.log(chalk.bgGreenBright("Server successfully started!"));
  // if any *.html from dist was modified -> reload
  app.gulp.watch(app.path.build.pages).on("change", app.plugins.bs.reload);
  console.log(
    chalk.blueBright(
      `${chalk.yellowBright("[ BrowserSync ]")} is watching dist...`
    )
  );
};
