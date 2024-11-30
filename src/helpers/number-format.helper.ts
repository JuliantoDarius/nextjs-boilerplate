export const formatNumber = (num: number, isCurrency = false) => {
  return new Intl.NumberFormat(
    "id-ID",
    isCurrency
      ? {
          style: "currency",
          currency: "IDR",
        }
      : undefined
  ).format(num);
};
