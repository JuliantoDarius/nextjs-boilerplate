export const convertToFormData = (payload: Record<string, any>) => {
  const formData = new FormData();
  const keys = Object.keys(payload);
  for (const key of keys) {
    if (payload[key] == null) continue;
    formData.append(key, payload[key]);
  }
  return formData;
};
