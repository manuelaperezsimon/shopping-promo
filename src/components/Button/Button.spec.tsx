/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import "@testing-library/jest-dom";
import { CgSpinner } from "react-icons/cg";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When called to render with all its props", () => {
    test("It should render properly", async () => {
      const callback = jest.fn();
      const text = "test";
      const bgColor = "bg-blue-100";
      const hoverBgColor = "bg-blue-200";
      const textColor = "bg-blue-300";
      const iconColor = "bg-blue-400";
      const border = "border";
      const borderColor = "bg-blue-500";
      const textSm = true;

      render(
        <Button
          text={text}
          bgColor={bgColor}
          hoverBgColor={hoverBgColor}
          textColor={textColor}
          actionOnClick={callback}
          disabled={false}
          LeftIcon={CgSpinner}
          RightIcon={CgSpinner}
          iconColor={iconColor}
          border={border}
          borderColor={borderColor}
          textSm={textSm}
        />
      );

      const button = screen.getByRole("button");

      const user = userEvent.setup();

      await user.click(button);

      expect(button.textContent).toBe(text);
      expect(button.className.includes(bgColor)).toBeTruthy();
      expect(button.className.includes(hoverBgColor)).toBeTruthy();
      expect(button.className.includes(textColor)).toBeTruthy();
      expect(button.className.includes(border)).toBeTruthy();
      expect(button.className.includes(borderColor)).toBeTruthy();
      expect(callback).toHaveBeenCalled();
    });
  });

  describe("When called to render with all its props", () => {
    test("It should render properly", async () => {
      const text = "test";
      const bgColor = "bg-blue-100";
      const hoverBgColor = "bg-blue-200";
      const textColor = "bg-blue-300";
      const textSm = true;

      render(
        <Button
          text={text}
          bgColor={bgColor}
          hoverBgColor={hoverBgColor}
          textColor={textColor}
          disabled={false}
          textSm={textSm}
        />
      );

      const button = screen.getByRole("button");

      const user = userEvent.setup();

      await user.click(button);

      expect(button.textContent).toBe(text);
    });
  });
});
