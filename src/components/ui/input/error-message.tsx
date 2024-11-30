import { ReactNode } from "react";

type Props = {
  formError: ReactNode;
};

export default function ErrorMessage({ formError }: Props) {
  return formError ? <p className="text-red-400 text-sm">{formError}</p> : null;
}
