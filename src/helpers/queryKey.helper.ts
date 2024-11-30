export const generateQueryKey = (
  queryKey: string,
  payload: Record<string, any>
) => {
  const payloadKeys = Object.keys(payload);
  const values = payloadKeys.map((key) => payload[key] ?? "");
  return [queryKey, ...values];
};
