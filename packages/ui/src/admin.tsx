"use client";

import { ReactNode } from "react";

interface AdminProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Admin = ({ children, className, appName }: AdminProps) => {
  return (
    <button
      className={className}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
