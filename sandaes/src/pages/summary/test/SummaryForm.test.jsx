import { fireEvent, render, screen } from "@testing-library/react";

import SummaryForm from "../SummaryForm";

describe("SummuryForm component", () => {
  it("should render", () => {
    const view = render(<SummaryForm />);
    expect(view).toBeDefined();
  });

  it("should have initially checkbox unchecked and submit button disabled", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox", {
      name: /terms and conditions/i,
    });
    expect(checkbox).not.toBeChecked();

    const submitButton = screen.getByRole("button", { name: "Confirm order" });
    expect(submitButton).toBeDisabled();
  });

  it("should enable submit button by checkong the checkbox", () => {
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    const submitButton = screen.getByRole("button", { name: "Confirm order" });
    expect(submitButton).toBeEnabled();
  });
});
