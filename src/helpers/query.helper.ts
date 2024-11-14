export const convertToQueryParams = (filter: Record<string, any>) => {
  const obj = Object.keys(filter)
    .map((i) => `${encodeURIComponent(i)}=${encodeURIComponent(filter[i])}`)
    .join("&");

  return obj;
};
