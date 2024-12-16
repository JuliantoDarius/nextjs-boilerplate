export const formatNumber = (num: number | string, isCurrency = false) => {
  if (isNaN(Number(num))) return "";

  return new Intl.NumberFormat(
    "id-ID",
    isCurrency
      ? {
          style: "currency",
          currency: "IDR",
        }
      : undefined
  ).format(Number(num));
};
