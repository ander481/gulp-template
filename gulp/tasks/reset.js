import { deleteAsync } from "del";
import chalk from "chalk";

export const reset = () => {
    console.log(chalk.yellowBright('Resetting dist folder ...'));
    return deleteAsync(app.path.clean)
}