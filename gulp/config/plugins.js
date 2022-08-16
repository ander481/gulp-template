import replace from "gulp-replace";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import bs from "browser-sync";

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  bs: bs,
};
