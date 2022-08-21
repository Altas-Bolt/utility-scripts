const fs = require("fs");

// make sure the script is run as root
if (process.getuid() !== 0) {
    console.log("This script must be run as root");
    process.exit(1);
}

process.setuid(0);

// access environment variables
const master_api_url = process.argv[3];

// username from argument
const username = process.argv[2];

if(!master_api_url || !username) {
    console.log("Please set the MASTER_API_URL and $USER environment variables");
    process.exit(1);
}

// append in the file as root
fs.appendFileSync(`/var/spool/cron/crontabs/${username}`, `*/15 * * * * curl ${master_api_url}`);

console.log("Cron job added");
process.exit(0);