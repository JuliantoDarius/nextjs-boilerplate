import { Loader, MantineSize } from "@mantine/core";

type Props = {
  size?: MantineSize;
  type?: "bars" | "dots" | "oval";
};

export default function DefaultLoading({ size = "lg", type }: Props) {
  return (
    <div className="grid my-4 place-items-center">
      <Loader color="#4caf50" type={type} size={size} />
    </div>
  );
}
