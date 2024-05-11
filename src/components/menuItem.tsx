import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

type PropsType = {
  path: string;
  title: string;
  Icon: IconType;
};
const MenuItem = ({ path, title, Icon }: PropsType) => {
  return (
    <>
      <Link href={`${path}`} className="hover:text-amber-500 uppercase">
        <span className="text-lg hidden font-semibold md:block lg:block">
          {title}
        </span>
        <Icon className="text-2xl md:hidden lg:hidden text-gray-600" />
      </Link>
    </>
  );
};

export default MenuItem;
