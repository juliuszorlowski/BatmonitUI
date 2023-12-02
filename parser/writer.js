const fs = require("fs");
const path = require("path");

setInterval(createFile, 2000);

function createFile() {
  const filename = createFilename();

  fs.writeFile(
    path.join(__dirname, "recordings", filename),
    "Recorded bat sounds",
    (err) => {
      if (err) throw err;
      console.log("Write complete");
    }
  );
}

function createFilename() {
  const turbine = "9c.25.be.01.01.0b";
  const ts = Date.now();
  const date_ob = new Date(ts);
  const date = pad(date_ob.getDate(), 2);
  const month = pad(date_ob.getMonth() + 1, 2);
  const year = date_ob.getFullYear();
  const hours = pad(date_ob.getHours(), 2);
  const minutes = pad(date_ob.getMinutes(), 2);
  const seconds = pad(date_ob.getSeconds(), 2);
  const random = Math.floor(100000 + Math.random() * 900000);

  return (filename =
    turbine +
    "_" +
    year +
    "" +
    month +
    "" +
    date +
    "_" +
    hours +
    minutes +
    seconds +
    "_" +
    random +
    ".wav");
}

function pad(num, size) {
  num = num.toString();
  while (num.length < size) num = "0" + num;
  return num;
}

// exit on uncaught errors
process.on("UncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
