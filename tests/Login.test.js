import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/jest-globals";
import Login from "../src/components/Login";

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

  it("should render and submit form", async () => {
    // Arrange
    const { container, getByRole, getByLabelText } = render(<Login />);

    //Act
    const heading = getByRole("heading");
    const email = getByRole("textbox", { name: /email/i });
    const password = getByLabelText(/password/i);
    const formLogin = getByRole("form", { name: /a login form/i });

    await waitFor(() => {
      fireEvent.change(email, { target: { value: fakeUser.email } });
      fireEvent.change(password, { target: { value: fakeUser.password } });
    });

    //Assertion
    expect(container).toBeDefined();
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
