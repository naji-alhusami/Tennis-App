import { cn } from "@/lib/utils";
import React, { type ReactNode } from "react";

interface WidthWrapperProps {
  className?: string;
  children: ReactNode;
}

const Wrapper = ({ className, children }: WidthWrapperProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-screen-xl", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
