import { createReadStream, createWriteStream, accessSync, constants } from "fs";
import { pipeline } from "stream";

import {processOn} from "./process.js";
import { validate } from "./validate.js";
import {checkArgs} from "./checkArgs.js";
import { createTransformStreams } from "./createTransformStreams.js";

processOn();

const { stdin, stdout } = process;

checkArgs();

const config =
    process.argv.indexOf("-c") !== -1
        ? process.argv[process.argv.indexOf("-c") + 1]
        : null || process.argv.indexOf("--config") !== -1
        ? process.argv[process.argv.indexOf("--config") + 1]
        : null;

validate(config);

const input =
    process.argv.indexOf("-i") !== -1
        ? process.argv[process.argv.indexOf("-i") + 1]
        : null || process.argv.indexOf("--input") !== -1
        ? process.argv[process.argv.indexOf("--input") + 1]
        : null;

if (input) {
    try {
        accessSync(input, constants.R_OK);
    } catch (err) {
        process.exit(6);
    }
}

const output =
    process.argv.indexOf("-o") !== -1
        ? process.argv[process.argv.indexOf("-o") + 1]
        : null || process.argv.indexOf("--output") !== -1
        ? process.argv[process.argv.indexOf("--output") + 1]
        : null;

if (output) {
    try {
        accessSync(output, constants.W_OK);
    } catch (err) {
        process.exit(7);
    }
}

const readableStream = input ? createReadStream(input, "utf-8") : stdin;

readableStream.on("error", (error) => {
    console.log("Error", error.message);
    process.exit(10);
});

const transformStreams = createTransformStreams(config);

const writableStream = output
    ? createWriteStream(output, {
          flags: "a",
      })
    : stdout;

writableStream.on("error", (error) => {
    console.log("Error", error.message);
    process.exit(11);
});

pipeline(readableStream, ...transformStreams, writableStream, (err) => {
    if (err) {
        console.log(err.message);
        process.exit(12);
    }
});
