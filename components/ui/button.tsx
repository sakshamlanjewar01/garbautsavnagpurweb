import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export function Button({ className, variant = "default", ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "px-4 py-2 rounded-md font-medium transition duration-200",
        variant === "default"
          ? "bg-indigo-600 text-white hover:bg-indigo-700"
          : "border border-zinc-300 text-zinc-800 hover:bg-zinc-100",
        className
      )}
    />
  );
}
