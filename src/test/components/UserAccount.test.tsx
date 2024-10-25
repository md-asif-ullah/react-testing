import { render, screen } from "@testing-library/react";
import UserAccount from "../../components/UserAccount";
import { User } from "../../entities";

describe("UserAccount", () => {
  it("renders the user profile", () => {
    const user: User = { id: 1, name: "John Doe" };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("renders the edit button", () => {
    const user: User = { id: 1, name: "John Doe", isAdmin: true };

    render(<UserAccount user={user} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Edit/i);
  });

  it("renders the edit button", () => {
    const user: User = { id: 1, name: "John Doe", isAdmin: false };

    render(<UserAccount user={user} />);

    const button = screen.queryByRole("button");

    expect(button).not.toBeInTheDocument();
  });
});
