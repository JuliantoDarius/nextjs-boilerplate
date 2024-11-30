import { MdAddCircleOutline } from "react-icons/md";
import { IoMdArrowBack } from "react-icons/io";
import { Button } from "@mantine/core";
import { useRouter } from "next/router";
import { AppBarIcon, AppBarProps } from "@utils/types/app-bar.type";

type Props = {
  appBar: AppBarProps[];
};

export default function AppBar({ appBar }: Props) {
  const router = useRouter();

  const renderIcon = (icon: AppBarIcon) => {
    if (icon == "add") return <MdAddCircleOutline className="text-xl" />;
    return <IoMdArrowBack className="text-xl" />;
  };

  return (
    <div className="flex items-center gap-x-4">
      {appBar.map((item, i) => (
        <Button
          key={`appbar-${i}`}
          type="button"
          className="_btn-primary"
          onClick={() => {
            if (item.routeTo) {
              router.push(item.routeTo);
              return;
            }
            item?.onClick?.();
          }}
        >
          <div className="flex items-center gap-x-1">
            {item.icon && renderIcon(item.icon)}
            {item.render}
          </div>
        </Button>
      ))}
    </div>
  );
}
