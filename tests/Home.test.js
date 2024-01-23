import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
// import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom/client";
import Home from "../src/components/Home";

describe("<Home Components/>", () => {
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
      ReactDOM.createRoot(container).render(<Home />);
    });
  });

  it("should get h1 content", () => {
    // Arrange
    act(() => {
      ReactDOM.createRoot(container).render(<Home />);
    });

    // Assertion
    const title = container.querySelector("h1");
    expect(title.textContent).toBe("App");
  });

  // we use  React Testing Library utils.
  it("should click the button", async () => {
    // Arrange
    const { rerender } = render(<Home />); // on utilise la fonction render de react testing qui contient deja act

    //ACT
    const button = screen.getByRole("button"); // recupere l'element button avec screen (body)
    await waitFor(() => {
      fireEvent.click(button);
    });

    rerender(<Home />);

    //Assertion : une bout de code qui teste si une logique est vraie ou fausse
    expect(button.textContent).toBe("clicked");
  });
});
