import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
interface paramsSign {
  phoneNumber: string | undefined
  phoneCode: string | undefined
}

const apiId = import.meta.env.VITE_TELEGRAM_API_ID;
const apiHash = import.meta.env.VITE_TELEGRAM_HASH;

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, Number(apiId), apiHash, {});

console.log("KEK", apiId, Number(apiId));


const signIn = async ({phoneNumber, phoneCode}: paramsSign) => {
  await client.connect(); // This assumes you have already authenticated with .start()

  // console.log(Buffer);
  
  const result = await client.invoke(
    new Api.auth.SendCode({
      phoneNumber: phoneNumber && phoneCode ? phoneCode + phoneNumber : "",
      apiId: Number(apiId),
      apiHash: apiHash,
      settings: new Api.CodeSettings({}),
    })
  );
  console.log(result);
};


export default signIn


// [2022-11-02T18:40:05.372] [INFO] - [Running gramJS version 2.13.4]
// Logger.js:120 [2022-11-02T18:40:05.380] [INFO] - [Connecting to vesta.web.telegram.org:80/TCPObfuscated using PromisedWebSocket]
// Logger.js:120 [2022-11-02T18:40:07.897] [INFO] - [Connection to vesta.web.telegram.org:80/TCPObfuscated complete!]
// Logger.js:120 [2022-11-02T18:40:07.897] [INFO] - [Using LAYER 146 for initial connect]