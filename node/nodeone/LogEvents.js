const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');
const fs = require("fs");
const path = require("path");

const LogEvents = async (message) => {
    const uid = uuidv4();
    const date = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `[${uid}] ${date}: ${message}`;
    console.log(logItem);
    return logItem;
};

const LogsFolderPath = path.join(__dirname, 'Logs');
const LogFilePath = path.join(LogsFolderPath, 'eventLogs.txt');

LogEvents('This is a new log event!').then(async (logItem) => {
    if (!fs.existsSync(LogsFolderPath)) {
        await fs.promises.mkdir(LogsFolderPath);
        fs.writeFile(LogFilePath, logItem, (err) => {
            if (err) throw err;
            console.log('File created successfully');
        });
    } else {
        fs.appendFile(LogFilePath, logItem, (err) => {
            if (err) throw err;
            console.log('Data appended to file');
        });
    }
});

module.exports = LogEvents;
