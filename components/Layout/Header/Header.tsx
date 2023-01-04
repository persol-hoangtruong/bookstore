import { css } from "@emotion/css";
import Link from "next/link";
import React from "react";

import { useAuth } from "~@/contexts/authContext";
import * as mq from "~@/styles/media-queries";


export declare type Link = {
  href: string,
  as: string,
};


export default function Header() {
  const { user } = useAuth();

  // eslint-disable-next-line max-len
  const renderNavLinks = (menu: Link[]) => menu.map((link: Link) => <Link key={link.href} href={link.href}>{link.as}</Link>);

  return (
    <div className={headerCss}>
      <div className={navCss}>
        {user && renderNavLinks(links)}
      </div>
    </div>
  );
}

const links = [
  {
    href: "/books",
    as: "Reading List",
  },
  {
    href: "/finished",
    as: "Finished Books",
  },
  {
    href: "/discover",
    as: "Discover",
  },
];

// ===========================================================================
// STYLES
// ===========================================================================

const headerCss = css([{
  top: "4px",
  height: "64px",
  padding: "0 16px",
  position: "relative",
  background: "#ffffff",

  boxShadow: "0 1px 2px 0 rgb(0 0 0 / 3%), 0 1px 6px -1px rgb(0 0 0 / 2%), 0 2px 4px 0 rgb(0 0 0 / 2%)",
  [mq.small]: {
    position: "static",
    top: "auto",
  },

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
}]);

const navCss = css([{
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  gap: "16px",
}]);
