import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
// import input from "input";

const apiId = import.meta.env.VITE_TELEGRAM_API_ID;
const apiHash = import.meta.env.VITE_TELEGRAM_HASH;
const stringSession = new StringSession(""); // fill this later with the value from session.save()

// const session = new StringSession(""); // You should put your string session here
// const client = new TelegramClient(session, apiId, apiHash, {});

console.log(parseInt(apiId), typeof apiHash);

interface paramsSign {
  phoneNumber: string | undefined
  phoneCode: string | undefined
}

const signIn = async ({phoneNumber, phoneCode}: paramsSign) => {
  console.log("Loading interactive example...");
  const client = new TelegramClient(stringSession, parseInt(apiId), apiHash, {
    connectionRetries: 1,
  });
  await client.start({
    phoneNumber: async () => {
      const number = await String(phoneNumber);
      return number
    },
    // password: async () => {
    //   const password = await prompt("password ?");
    //   return String(password)
    // },
    phoneCode: async () => {
      const code = await String(phoneCode);
      return String(code)
    },
    onError: (err) => console.log(err),
  });
  console.log("You should now be connected.");
  console.log(client.session.save()); // Save this string to avoid logging in again
  await client.sendMessage("me", { message: "Hello!" });
};


export default signIn