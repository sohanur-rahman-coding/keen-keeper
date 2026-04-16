"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const MyLink = ({ href, children, icon }) => {
  const pathName = usePathname();

  return (
    <Link href={href}>
      <li>
        <button
          className={`btn font-semibold ${pathName === href ? "btn-success bg-green-900 text-white border-none" : ""}`}
        >
          {icon}
          {children}
        </button>
      </li>
    </Link>
  );
};

export default MyLink;
