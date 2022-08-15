import chalk from "chalk";
import { build } from "./build.js";

export const watchComponents = () => {
    console.log(chalk.blueBright('Watching components...'));
    return app.gulp.watch(app.path.watch.components).on("change", function() {
        console.log(chalk.yellowBright(`Changes in ${chalk.bgMagentaBright(" COMPONENTS ")} were detected!`));
        build();
    })
}