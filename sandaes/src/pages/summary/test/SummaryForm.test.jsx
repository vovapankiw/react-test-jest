import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

  it("should enable submit button by checkong the checkbox", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const checkbox = screen.getByRole("checkbox");
    await user.click(checkbox);

    const submitButton = screen.getByRole("button", { name: "Confirm order" });
    expect(submitButton).toBeEnabled();
  });

  it("popover response to hover", async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const nullpopover = screen.queryByText(
      /no ice cream will actully be delivered/i,
    );
    expect(nullpopover).not.toBeInTheDocument();

    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions);
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i,
    );
    expect(popover).toBeInTheDocument();

    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
});
