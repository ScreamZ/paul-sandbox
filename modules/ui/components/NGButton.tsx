import clsx from "clsx";
import React from "react";

type Props = {
  title: string;
  onPress(): void;
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
};

export const NGButton = ({
  onPress,
  title,
  variant = "primary",
  type = "button",
}: Props) => {
  return (
    <button
      className={clsx("p-4 border border-black rounded", {
        "bg-blue-600": variant === "primary",
        "bg-red-600": variant == "secondary",
      })}
      type={type}
      onClick={onPress}
    >
      {title}
    </button>
  );
};
