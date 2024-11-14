import * as CryptoJS from "crypto-js";

const key = process.env.SECRET_KEY ?? "Rg_@DP+P_roXy4_221_r@nd0m";

export const encryptAES = (value: string) => {
  const cipherText = CryptoJS.AES.encrypt(value, key);
  return encodeURIComponent(cipherText.toString());
};

export const decryptAES = (value: string) => {
  const decodedStr = decodeURIComponent(value);
  return CryptoJS.AES.decrypt(decodedStr, key).toString(CryptoJS.enc.Utf8);
};
