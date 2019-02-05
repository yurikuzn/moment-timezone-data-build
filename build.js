var fs = require('fs');

const lastYear = process.argv[2] || 2030;

const fullData = require('./latest.json');

const moment = require('./node_modules/moment/moment.js');
const momentTimizone = require('./node_modules/moment-timezone/moment-timezone.js');
const utils = require('./node_modules/moment-timezone/moment-timezone-utils.js');

const targetData = moment.tz.filterLinkPack(fullData, 1970, lastYear);

var code = `
moment.tz.load(`+JSON.stringify(targetData, true)+`)
`;

var resFilePath = './build/moment-timezone-data.js';

if (fs.existsSync(resFilePath)) {
    fs.unlinkSync(resFilePath);
}

fs.writeFileSync(resFilePath, code);
