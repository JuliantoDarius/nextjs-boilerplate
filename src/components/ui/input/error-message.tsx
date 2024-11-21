import { ReactNode } from "react";

interface Props {
  formError: ReactNode;
}

export default function ErrorMessage({ formError }: Props) {
  return formError ? <p className="text-red-400 text-sm">{formError}</p> : null;
}
