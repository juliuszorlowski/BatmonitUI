const { createLogger, format, transports } = require("winston");
const { combine, timestamp, prettyPrint, json } = format;

module.exports = createLogger({
  format: combine(timestamp(), prettyPrint(), json()),
  transports: [new transports.Console()],
});
