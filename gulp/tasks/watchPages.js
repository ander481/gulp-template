import chalk from "chalk";
import { build } from "./build.js";

export const watchPages = () => {
  console.log(chalk.blueBright("Watching pages..."));
  return app.gulp.watch(app.path.watch.pages).on("change", function () {
    console.log(
      chalk.yellowBright(`Changes in ${chalk.bgGray(" PAGES ")} were detected!`)
    );
    build();
  });
};
