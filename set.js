 
const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;


///////////////////


module.exports = { session: process.env.SESSION_ID || 'Byte;;;',

////////////////////////////////



    PREFIXE: process.env.PREFIX || ".",



///////////////////////////
    A_REACT : process.env.AUTO_REACTION || 'on',
    CHATBOT: process.env.CHAT_BOT || "off",
    OWNER_NAME: process.env.OWNER_NAME || "TALKDROVE",
    NUMERO_OWNER : process.env.OWNER_NUMBER || "923072380380",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'BYTE-MD',
    OPENAI_API_KEY : process.env.OPENAI_API_KEY || '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',
    URL : process.env.BOT_MENU_LINKS || 'https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/BYTE-MD-LITE.jpeg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_API_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`Update ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0xZS1NEMUJ2Tnk0Y0FIdndzTzFPZ1FMNDRnUnQwTzIyb1JRNXhxQlBrMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYktMZ2xzZkYrZWtycHZqaEtHZys0ajJCY2ZjQjBmYmtiZ1FPSGFvamZ6ND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnR2UwNzdISlBoRDZCdkdYeTg3OXdRTVIzVEFCWFJ6ZkhYRlc5b3FkbkY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtZTgrdllWeGZsZUpYTStmUzRYOTZXMEgydkN2VUhsM29kUkpaeXhwaVZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlDTWNieTJFN21PODFrTWEvWXI5eGZ3bEhKeVpQNlhqWTQ3K1RMaUgzSE09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhXTmxMT0ROSmNqS0RQS1Zpd3dicEJscmRtMVlhZWQ3eEs1eHZkdVVOZ1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia00rNEp6dVRkaG1KaDVxWGhwMVdmeU80a2tHTmdja3ZKazRSMzIvWm4wcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicCtFd2F5N1g0UFBFS0dXMmFvSGw1V3gvOEhEcnFPeHU1YVhRbCtnZzBUaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZRalF2bW5tSkZBM0NsQXpUdmRuQU8xMW4xZlNWNldkck8wVWFjU2JENm1ZMFp2Tk41TUYycWExcVRueHlMaG5Vd04xMjlnZ255SFpoSjYrcG9zeUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMzLCJhZHZTZWNyZXRLZXkiOiJCZ1NHTW1vVm1KWDF6VE9hM1JLYUhjUU90MlNFNDBla0IwSG9oZmp5TlE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNDk3NzQ1ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjBDNjgyMUYyQjA2Qzk5NDQ5NTgwOUIzODk2NDhCMzcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMTc5MjM3OH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA0OTc3NDU4OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzMDA2RTRDMDZENTA5NjFCMEFEODU5QkJBREVDRjg2RSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMxNzkyMzc4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGeVJoXzhuSVROT0NSeEdNeVBXUVFRIiwicGhvbmVJZCI6IjZkMmNkNGUzLWE1NTQtNGNiOS05MDNiLTg1Njg3NzI1ZjE0OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0R2M0dXdsMEdmcEwxd2tZZWxCdEhZVERON3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVTFCaXZXdEFJQWdHUDY2Q0FMZGFBVVQ5a1hjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkpGQU44QzdYIiwibWUiOnsiaWQiOiIyMzQ5MDQ5Nzc0NTg4OjFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1A3Um12RUhFT21iNUxrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlFseUIzTE1TSkJiS3VPY01GRmtReHA1dzEydEN4NTJyRzlFaTMzVjdpRU09IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdvMnBLOW5DVVBtcHJqQXZJTXllSWE2ZEpPZlBrNUI2QjhIdm5wTXFKK3VETHFuS2tyYjRkUEk4dzFqSFg4SGYrMHhtSk5KQzBzTCtTRGdLdmFNdURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJvY3N6aFJwWWJLaXRLcllaT2srTVRXbWtqZmNjWlRZZ3NmVzhzam1mTytVOUdmeEJRaWwycEpVZFFvNVpWcVZBMVZBRmJVZkFMTjJEUTNKWGpMVEJDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwNDk3NzQ1ODg6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVSmNnZHl6RWlRV3lyam5EQlJaRU1hZWNOZHJRc2VkcXh2Ukl0OTFlNGhEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxNzkyMzc0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUVwNyJ9
