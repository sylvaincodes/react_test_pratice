import { render, screen, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom/client";
import App from "../src/App";

describe("App", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("should render without crash", () => {
    // Arrange
    act(() => {
      ReactDOM.createRoot(container).render(<App />);
    });
  });

  it("should get h1 content", () => {
    // Arrange
    act(() => {
      ReactDOM.createRoot(container).render(<App />);
    });

    // Assertion
    const title = container.querySelector("h1");
    expect(title.textContent).toBe("App");
  });

  // we use  React Testing Library utils.
  it("should click the button", async () => {
    // Arrange
    render(<App />); // on utilise la fonction render de react testing qui contient deja act

    //ACT
    const button = screen.getByRole("button"); // recupere l'element button avec screen (body)
    await fireEvent.click(button);

    //Assertion : une bout de code qui teste si une logique est vraie ou fausse
    expect(button.textContent).toBe("clicked");
  });
});
