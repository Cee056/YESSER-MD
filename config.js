const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid085S0hla1p4TDEwOERnT0dNa2YwMktZRk5sc1pIZVp6enNaRzZnaFYwdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDV5SWlaWWVLTDhWaUNmeDRkQkMwSGpZWEdwQWRlOFFnamtMQU5DWVNWTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzRzNpV1BETUx0MHVQeis3WmJ1aE5SN243UkljTVU1djVxdnZkRUZ1NVVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2b3ZtR0lRUmlmenZnbkcyWjd0MHp2QnFNTXB2Y0xCMzZvaDM2L25BK0RBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFLaXNiTzFrbTlHZHc1L3N5bXJ5ZHM2NFplWEZmVTZZc1R4bXhRa2dSMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRFcFh5QzNHL2gxMXNJRmFXVXVaQWIvMEJBMGlsVGFwSUdPdUYzZWVFRGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUw0NXQ5VjhPamNPVkwxQjlwc0hwRk1HTEJpSkpNWHlpY2FpYWx3RDgzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib3NOcUp0bit0cWxUT1VrUW5DMTcxUzdDbzI4YlRJSk9lVFV5b3g5dlhFdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlEweGtuZ3kyUnRJSTVRTll5UStoOUNSb3o4VTZlU2phWjhEd0RjVHlNaUl6MU1VeWlyMXplQ1BaN1dTeG1mRHBlN2hyMkRRNk1QekY0RFA5ODE1ZGhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiJIL2l1dVhFMkh2OENqeEhwV0pOMFhsc0x5UEpFMXhOQ2tHeXlydzJPZG1jPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIzSFVDd0ozWFJPQ1lyQlNocE0yTFFBIiwicGhvbmVJZCI6Ijg5YzNiMzU3LTA0ZWMtNGU3MC04MzJmLTI3YTg1MWI4MWViOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVlJuOG9EOStxMk9FVUdpQUxQNFNUNlpPU289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidG9pMFQ5SHZCNjlucEwwdHdaVExxQnRITTJvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBWUldYNjVKIiwibWUiOnsiaWQiOiIyNTU2OTM2MzQxODA6NkBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSm5PeVlNSEVMcVV5N3NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidzVkTi85MXBlend4YU5HZ0cyeXVJRUxyNGlNRFFQRDJqT0xBYnBKWWRndz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVzduY1BNQmdUbFNWcHlVTm5hci9MQVMrcCtwTUNJK1VlWHFvMzM4MGRXK0Q1Ri9aUVo5cDZUdlB0YUI1bFg5Y2NsWGkzeXBFeGErcklvWjNveVdkQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IjR2TFFTc0ZJekFXbVFyWWZ4TmsxU3RQdzJqWmljN1M4SUNEUmE2NGh1MGgwYmlFaVhvK1FuWEJsdWhWZ3oxa3UxV3NhRHlUSGZQYVg3b3p6QldIb2dnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjkzNjM0MTgwOjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY09YVGYvZGFYczhNV2pSb0J0c3JpQkM2K0lqQTBEdzlveml3RzZTV0hZTSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNTU3NjEzNSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMUU0ifQ==",
    CAPTION: process.env.CAPTION || "code by yessertech ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/3kdkf6.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "HII DEAR IM ONLINE I'M YESSER-MD WHATSAPP BOT 👍🤠",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    BOT_NAME: process.env.BOT_NAME || "yessertech",
    STATUS_REPLY: process.env.STATUS_REPLY || "`✅ your status seen 👀`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
