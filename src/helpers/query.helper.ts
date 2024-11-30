export const convertToQueryParams = (filter: Record<string, any>) => {
  const params = Object.keys(filter)
    .filter((i) => filter[i] != null)
    .map((i) => `${encodeURIComponent(i)}=${encodeURIComponent(filter[i])}`)
    .join("&");

  return `?${params}`;
};
