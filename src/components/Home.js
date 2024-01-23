import React, { useState } from "react";
import { Button } from "@mui/material";
import Layout from "./Layout";

const Home = () => {
  const [action, setAction] = useState("action");
  const handleClick = () => {
    setAction("clicked");
  };

  return (
    <Layout>
      <main>
        <div className="container">
          <div className="row">
            <h1>App</h1>
            <Button variant="contained" onClick={handleClick}>
              {action}
            </Button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
