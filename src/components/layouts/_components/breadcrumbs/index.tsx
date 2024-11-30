import { BreadcrumbProps } from "@utils/types/breadcrumb.type";
import Link from "next/link";
import { Fragment } from "react";
import { FaAngleRight } from "react-icons/fa";

type Props = {
  breadcrumbs: BreadcrumbProps[];
};

export default function Breadcrumbs({ breadcrumbs }: Props) {
  return (
    <div className="flex items-center gap-x-2">
      {breadcrumbs.map((breadcrumb, i) => {
        return (
          <Fragment key={`breadcrumb-${i}`}>
            <Link
              href={breadcrumb.routeTo ?? "#"}
              className={
                breadcrumb.routeTo ? "text-slate-300 hover:text-white link" : ""
              }
            >
              {breadcrumb.render}
            </Link>
            {i != breadcrumbs.length - 1 && (
              <span>
                <FaAngleRight />
              </span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
