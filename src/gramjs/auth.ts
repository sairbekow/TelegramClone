import { Api, TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions";
const apiId = import.meta.env.VITE_TELEGRAM_API_ID;
const apiHash = import.meta.env.VITE_TELEGRAM_HASH;
interface ParamsSendCode {
  phoneNumber: string | undefined
  phoneCode: string | undefined
}
interface ParamsSignIn {
    phoneNumber: string,
    phoneCodeHash: string,
    phoneCode: string,
}

const session = new StringSession(""); // You should put your string session here
const client = new TelegramClient(session, Number(apiId), apiHash, {});

export const sendVerifyCode = async ({phoneNumber, phoneCode}: ParamsSendCode) => {
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
  
  return result
};

export const signIn = async ({phoneNumber, phoneCodeHash, phoneCode}: ParamsSignIn) => {
  // await client.connect(); // This assumes you have already authenticated with .start()

  const result = await client.invoke(
    new Api.auth.SignIn({
      phoneNumber,
      phoneCodeHash,
      phoneCode,
    })
  );
  console.log(result); // prints the result
  return result
}