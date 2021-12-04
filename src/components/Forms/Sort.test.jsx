import { screen, render } from "@testing-library/react";
import Sort from "./Sort";

it("testing my sort", () => {
  render(<Sort />);
  const sorted = screen.getAllByLabelText('sort');
  expect(sorted).toMatchSnapshot();
});
