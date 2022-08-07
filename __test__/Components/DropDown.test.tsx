import { describe, expect, test } from "vitest";
import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import DropDown from "../../src/components/Common/DropDown";

const options = [
  { name: "Vectors", value: "vector" },
  { name: "Photos", value: "photo" },
];
var value = options[0];
const setValue = (option: DropDownOption) => {
  value = option;
};

describe("DropDown Test", () => {
  test("DropDown renders", () => {
    const { unmount } = render(
      <DropDown options={options} setValue={setValue as any} value={value} />
    );
    expect(screen.getByTestId("dropdown")).toBeTruthy();
    unmount();
  });

  test("DropDown renders with default value", () => {
    const { unmount } = render(
      <DropDown options={options} setValue={setValue as any} value={value} />
    );
    const dropdown = screen.getByTestId("show");
    expect(dropdown.innerHTML).toBe(options[0].name);
    unmount();
  });

  test("DropDown - option selection", async () => {
    const { unmount, getByTestId } = render(
      <DropDown options={options} setValue={setValue as any} value={value} />
    );
    const secondOption = screen.getByText(options[1].name);
    fireEvent.click(secondOption);

    expect(value.name).toBe(options[1].name);

    unmount();
  });
});
