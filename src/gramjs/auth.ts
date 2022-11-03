import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
const apiId = import.meta.env.VITE_TELEGRAM_API_ID;
const apiHash = import.meta.env.VITE_TELEGRAM_HASH;
interface paramsSign {
  phoneNumber: string | undefined
  phoneCode: string | undefined
}

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, Number(apiId), apiHash, {});

export const sendVerifyCode = async ({phoneNumber, phoneCode}: paramsSign) => {
  await client.connect(); // This assumes you have already authenticated with .start()

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

export const signIn = async () => {
  // await client.connect(); // This assumes you have already authenticated with .start()

  const result = await client.invoke(
    new Api.auth.SignIn({
      phoneNumber: "some string here",
      phoneCodeHash: "some string here",
      phoneCode: "some string here",
    })
  );
  console.log(result); // prints the result
}