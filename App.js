import React, { useState } from "react";
import Header from "./src/Header";
import Footer from "./src/Footer";
import Users from "./src/Login";

function App() {
  const [action, setAction] = useState("action");
  const handleClick = () => {
    setAction("clicked");
  };
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <h1>App</h1>
            <button type="button" onClick={handleClick}>
              {action}
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
