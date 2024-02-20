import { cn } from "@/lib/utils";
import React, { type ReactNode } from "react";

interface WrapperProps {
  className?: string;
  children: ReactNode;
}

const Wrapper = ({ className, children }: WrapperProps) => {
  return (
    <div className={cn("mx-auto w-full", className)}>
      {children}
    </div>
  );
};

export default Wrapper;
