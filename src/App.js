import React, { useState } from "react";
import { Button } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
            <h1>App is working</h1>
            <Button variant="contained" onClick={handleClick}>
              {action}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
