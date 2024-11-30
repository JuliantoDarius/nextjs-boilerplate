import * as CryptoJS from "crypto-js";

const key = process.env.SECRET_KEY ?? "S3c_R3tt++adw2";

export const encryptAES = (value: string) => {
  const cipherText = CryptoJS.AES.encrypt(value, key);
  return encodeURIComponent(cipherText.toString());
};

export const decryptAES = (value: string) => {
  const decodedStr = decodeURIComponent(value);
  return CryptoJS.AES.decrypt(decodedStr, key).toString(CryptoJS.enc.Utf8);
};
