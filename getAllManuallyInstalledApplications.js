// open the file
const fs = require("fs");
const exec = require("child_process");

async function getAutoInstalledApplications() {
  const autoInstalledApplications = [];
  // read the file
  const data = fs.readFileSync("/var/lib/apt/extended_states", {
    encoding: "utf8",
  });
  const lines = data.split("\n");
  for (const line of lines) {
    if (line.startsWith("Package: ")) {
      const package = line.split(" ")[1];
      autoInstalledApplications.push(package);
    } else if (line.startsWith("Auto-Installed: ")) {
      if (line.split(" ")[1] === "0") {
        // remove the last added package
        autoInstalledApplications.pop();
      }
    }
  }
  return autoInstalledApplications;
}

const getAllApplications = async () => {
  const allApplications = [];
  // run the os command
  return new Promise((resolve, reject) => {
    exec.exec("apt list --installed", (error, stdout, stderr) => {
      if (error) {
        reject(error);
      }
      const lines = stdout.split("\n");
      for (const line of lines) {
        // split line by /
        const package = line.split("/");
        if (package.length > 1) {
          allApplications.push(package[0]);
        }
      }
      resolve(allApplications);
    });
  });
};

const getManuallyInstalledApplications = async () => {
  const apps = [];
  const allApplications = await getAllApplications();
  const autoInstalledApplications = await getAutoInstalledApplications();

  for (const application of allApplications) {
    if (!autoInstalledApplications.includes(application)) {
      apps.push(application);
    }
  }
  // return the list join by \n
  return apps.join("\n");
};

getManuallyInstalledApplications().then((result) => {
  console.log(result);
});
