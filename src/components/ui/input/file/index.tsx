import { FileInput, FileInputProps } from "@mantine/core";
import { ACCEPTED_IMAGE_TYPES } from "@utils/common/constants.common";

export default function InputFile(props: FileInputProps) {
  return (
    <FileInput
      classNames={{ input: "_input", label: "_input-label" }}
      placeholder="Upload image"
      accept={ACCEPTED_IMAGE_TYPES.join(",")}
      {...props}
      error={undefined}
    />
  );
}
