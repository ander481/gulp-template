import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const distFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        pages: `${distFolder}/`,
        styles: `${distFolder}/css/`,
        js: `${distFolder}/js/`,
        images: `${distFolder}/img`
    },
    src: {
        pages: `${srcFolder}/*.html`,
        styles: `${srcFolder}/styles/*.css`,
        js: `${srcFolder}/js/*.js`,
        images: `${srcFolder}/img/*.*`
    },
    watch: {
        pages: `${srcFolder}/*.html`,
        components: `${srcFolder}/components/**/*.html`
    },
    clean: distFolder,
    distFolder: distFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}