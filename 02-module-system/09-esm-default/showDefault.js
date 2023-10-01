import * as loggerModule from "./logger.js";

console.log(loggerModule);

const logger = new loggerModule.default("info");
logger.log("Hello World");
