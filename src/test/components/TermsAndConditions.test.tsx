import { render, screen } from "@testing-library/react";
import TermsAndConditions from "../../components/TermsAndConditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
  const reanderComponent = () => {
    render(<TermsAndConditions />);

    return {
      heading: screen.getByRole("heading"),
      checkbox: screen.getByRole("checkbox"),
      Button: screen.getByRole("button"),
    };
  };

  it("should enable the submit button when the checkbox is checked", () => {
    const { checkbox, Button, heading } = reanderComponent();

    expect(heading).toHaveTextContent("Terms & Conditions");
    expect(checkbox).not.toBeChecked();
    expect(Button).toBeDisabled();
  });

  it("should disable the submit button when the checkbox is unchecked", async () => {
    const { checkbox, Button } = reanderComponent();
    const user = userEvent.setup();
    await user.click(checkbox);
    expect(Button).toBeEnabled();
  });
});
