 
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
{"noiseKey":{"private":{"type":"Buffer","data":"kNbNhGzFD6pSerAZlcXDKmY5IxyVS2vpNnRwM07e3Vc="},"public":{"type":"Buffer","data":"vgjzzQ4/EEkHhfxbTBy7jahXEmIt1ZuL8XR7pNzvcUk="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"OIT4NXGj+SJ487gK8aAbAaLb9fn37qJCdgdUsBvJLXI="},"public":{"type":"Buffer","data":"PasB7NRpynx1tXDNy21bicxs/4kYYI8X4zD1Dhx9JGE="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"GF9B84o7DTXHPZaPrNVKJCibJgXJeHbdyhxmtyc8Hmc="},"public":{"type":"Buffer","data":"/Wea6XGgJY8wstUE3gVbCeLhrAzRnVu1ONNREO0T/Gg="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"+M9eqOyIKmDTkNlFoX5V0+FAHAQuV/yU5LoIRaJ2an4="},"public":{"type":"Buffer","data":"OMoJrIsxzwNO0vXpap7893MoR0UTphSavmI3j02uT3U="}},"signature":{"type":"Buffer","data":"Km0vzhVCJXdghT/ZmcngAkGUdzVvNQeRM2pxNCtzLNclh2W2Ucbgul7VeoroZtnubJV0gzhQOPWa1CAaMxPyBw=="},"keyId":1},"registrationId":31,"advSecretKey":"PsIf4lcdAvs5R13yHGrQHhgerxqXXoCebKdZhCLLbFQ=","processedHistoryMessages":[{"key":{"remoteJid":"2349049774588@s.whatsapp.net","fromMe":true,"id":"5C9D83FC54E21250DC62339A368C2350"},"messageTimestamp":1731823561},{"key":{"remoteJid":"2349049774588@s.whatsapp.net","fromMe":true,"id":"7E3D589202462E001984B4F2BFEF0536"},"messageTimestamp":1731823561}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":1,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"WZSS81CD","me":{"id":"2349049774588:2@s.whatsapp.net","lid":"73998595530993:2@lid","name":"Agent N"},"account":{"details":"CP7RmvEHELeP5rkGGAIgACgA","accountSignatureKey":"QlyB3LMSJBbKuOcMFFkQxp5w12tCx52rG9Ei33V7iEM=","accountSignature":"zUG4Q2nWyq5rSsqZ5ka3ogc0cryf7Wnsy2I98K2giSubKTe1wV7Q+ZVI4RibRznH81QvTGsPQs0FMNcz/W2PCg==","deviceSignature":"auyA1IrT9m4rDPXa9rN8RfpsdsdksbC83iwXoYpGis9lxTRQYsY7SxLIIP+YaZyaGp3zaM9aHpYKYmfxVQNRDA=="},"signalIdentities":[{"identifier":{"name":"2349049774588:2@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BUJcgdyzEiQWyrjnDBRZEMaecNdrQsedqxvRIt91e4hD"}}],"platform":"android","routingInfo":{"type":"Buffer","data":"CA0IBQ=="},"lastAccountSyncTimestamp":1731823557,"lastPropHash":"4Cq4Ek","myAppStateKeyId":"AAAAAEp7"}
