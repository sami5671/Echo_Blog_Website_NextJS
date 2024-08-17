import Link from "next/link";
import React from "react";
import NavLink from "../navLink/navLink";

const Links = () => {
  const links = [
    {
      title: "Homepage",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Blog",
      path: "/blog",
    },
  ];
  return (
    <div>
      {links.map((link) => (
        <NavLink item={link} key={link.title}/>
      ))}
    </div>
  );
};

export default Links;
