const fs = require('fs');
const fullData = require('./latest.json');
const moment = require('./node_modules/moment/moment.js');
const momentTimizone = require('./node_modules/moment-timezone/moment-timezone.js');
const utils = require('./node_modules/moment-timezone/moment-timezone-utils.js');

const lastYear = process.argv[2] || 2040;

const targetData = moment.tz.filterLinkPack(fullData, 1970, lastYear);

let code = `moment.tz.load(` + JSON.stringify(targetData, true) + `);`;

let resFilePath = './build/moment-timezone-data.js';

if (!fs.existsSync('./build')) {
    fs.mkdirSync('./build');
}

if (fs.existsSync(resFilePath)) {
    fs.unlinkSync(resFilePath);
}

fs.writeFileSync(resFilePath, code);
