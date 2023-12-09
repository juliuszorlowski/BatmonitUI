const fs = require("fs");
const axios = require("axios");
const { spawn } = require("child_process");

watchDirectoryAndSeedRecords();

function watchDirectoryAndSeedRecords() {
  fs.watch("/home/batmonit/batmonit/recordings/", (eventType, filename) => {
    if (eventType === "rename" && filename) {
      console.log(`New file detected: ${filename}`);

      const data = filename.split("_");
      const turbineId = data[0];
      const date = data[1];
      const time = data[2];
      const timestamp =
        date.substring(0, 4) +
        "-" +
        date.substring(4, 6) +
        "-" +
        date.substring(6, 8) +
        " " +
        time.substring(0, 2) +
        ":" +
        time.substring(2, 4) +
        ":" +
        time.substring(4, 6);
      const name = data[3].substring(0, 6);
      console.log(`TurbineId: ${turbineId}`);
      console.log(`Timestamp: ${timestamp}`);
      console.log(`Name: ${name}`);
      const wav1 = data[3].substring(6, 11);
      const wav2 = filename.slice(0, -4);
      console.log(`Wav1: ${wav1}`);
      console.log(`Wav2: ${wav2}`);

      spawnPythonScript();

      axios
        .post("http://localhost:3900/api/records", {
          date: timestamp,
          turbineId: 1,
          bat: 1,
          speciesId: 3,
          turbineStopSignal: 1,
          verification: 1,
          audio: "[WAV]",
          sonogram: "[PNG]",
        })
        .then(function (response) {
          console.log("Record sent successfully!");
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  });
}

function spawnPythonScript() {
  const childPython = spawn("python3.11", ["./python/script.py"]);

  childPython.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  childPython.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  childPython.on("close", (code) => {
    console.log(`child process exited with code: ${code}`);
  });
}
