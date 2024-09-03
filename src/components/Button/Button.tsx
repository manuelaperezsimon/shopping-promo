/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/require-default-props */
"use client";
import React from "react";
import { CgSpinner } from "react-icons/cg";

type ButtonProps = {
  text?: string;
  bgColor?: string;
  id?: string;
  hoverBgColor?: string;
  textColor?: string;
  actionOnClick?: () => void;
  disabled?: boolean;
  LeftIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
  RightIcon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
  iconColor?: string;
  border?: string;
  borderColor?: string;
  textSm?: boolean;
  testId?: string;
  loading?: boolean;
};

export default function Button({
  text,
  id,
  bgColor,
  hoverBgColor,
  textColor,
  actionOnClick = () => {},
  disabled,
  LeftIcon = null,
  RightIcon = null,
  iconColor = "",
  border = "",
  borderColor = "",
  textSm = false,
  testId = "",
  loading = false,
  Icon = null,
}: ButtonProps): JSX.Element {
  return (
    <button
      id={id}
      data-testid={testId}
      type="button"
      onClick={actionOnClick}
      className={`flex justify-center items-center gap-2 px-5 py-2 cursor-pointer rounded-md text-${textColor} ${
        disabled || loading
          ? "cursor-not-allowed bg-slate-400 hover:bg-slate-400"
          : `${bgColor} hover:${hoverBgColor}`
      }
        ${border && `${border} ${borderColor}`}
        ${textSm && "text-sm"}
      `}
      disabled={disabled || loading}
    >
      {loading && <CgSpinner className="animate-spin w-5 h-5" />}
      {LeftIcon && (
        <LeftIcon
          className={`w-5 h-5 ${iconColor && `${iconColor}`}`}
          data-testid="left-icon"
        />
      )}
      {text}
      {Icon && (
        <Icon
          className={`w-5 h-5 ${iconColor && `${iconColor}`}`}
          data-testid="icon"
        />
      )}
      {RightIcon && (
        <RightIcon
          className={`w-5 h-5 ${iconColor && `${iconColor}`}`}
          data-testid="right-icon"
        />
      )}
    </button>
  );
}
