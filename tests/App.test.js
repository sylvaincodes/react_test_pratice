import renderer from "react-test-renderer";
import App from "../App";

test("afficher le composant App", () => {
  renderer.create(<App />);
});
