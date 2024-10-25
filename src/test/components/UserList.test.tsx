import { render, screen } from "@testing-library/react";
import UserList from "../../components/UserList";

describe("UserList", () => {
  it("renders a list of users", () => {
    const users = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
    ];

    render(<UserList users={users} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Jane Doe")).toBeInTheDocument();
  });

  it("renders a message when no users are available", () => {
    render(<UserList users={[]} />);

    expect(screen.getByText(/no user/i)).toBeInTheDocument();
  });
});
