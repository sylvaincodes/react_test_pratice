import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import Login from "../src/Login";
import { MemoryRouter } from "react-router-dom";

describe("Login", () => {
  let container;
  let fakeUser;

  beforeEach(() => {
    fakeUser = {
      email: "test user",
      password: "123password",
    };

    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("should submit form", async () => {
    // Arrange
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    //Act
    const heading = screen.getByRole("heading");
    const email = screen.getByRole("textbox", { name: /email/i });
    const password = screen.getByLabelText(/password/i);
    const formLogin = screen.getByRole("form", { name: /a login form/i });

    await waitFor(() => {
      fireEvent.change(email, { target: { value: fakeUser.email } });
      fireEvent.change(password, { target: { value: fakeUser.password } });
    });

    //Assertion
    expect(heading.textContent).toBe("Login");
    expect(email.value).toBe("test user");
    expect(password.value).toBe("123password");
    expect(formLogin).toHaveFormValues({
      email: fakeUser.email,
      password: fakeUser.password,
    });

    //Act
    await waitFor(() => {
      fireEvent.submit(formLogin);
    });
  });
});
