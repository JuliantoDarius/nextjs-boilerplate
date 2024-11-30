import { ReactNode } from "react";
import Breadcrumbs from "../breadcrumbs";
import AppBar from "../app-bar";
import { AppBarProps } from "@utils/types/app-bar.type";
import { BreadcrumbProps } from "@utils/types/breadcrumb.type";

type Props = {
  title: ReactNode;
  appBar?: AppBarProps[];
  breadcrumbs?: BreadcrumbProps[];
};

export default function Header({ title, appBar, breadcrumbs }: Props) {
  return (
    <section className="mb-10 flex items-center justify-between">
      <h3 className="text-2xl">{title}</h3>
      {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
      {appBar && <AppBar appBar={appBar} />}
    </section>
  );
}
