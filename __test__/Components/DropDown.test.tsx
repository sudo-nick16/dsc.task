import { expect, test } from "vitest";
import { render, screen, within } from "@testing-library/react";
import DropDown from "../../src/components/Common/DropDown";

test("DropDown", () => {
  const options = [
    { name: "Vectors", value: "vector" },
    { name: "Photos", value: "photo" },
  ];
  var value = options[0];
  const setValue = (option: DropDownOption) => {
    value = option;
  };
  render(
    <DropDown options={options} setValue={setValue as any} value={value} />
  );
  const main = within(screen.getByTestId("dropdown"));
  expect(main.getByText("Vectors")).toBeTruthy();
});
