import React from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const About = () => {
  const [user, setUser] = useState("mario");
  if (!user) return <Navigate to="/" replace={true} />;
  return (
    <div className="about">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea harum dolor
        quos. Ab tempore incidunt, voluptate necessitatibus aperiam accusamus
        dolore saepe numquam et distinctio maiores quisquam hic quam, quis
        aspernatur.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea harum dolor
        quos. Ab tempore incidunt, voluptate necessitatibus aperiam accusamus
        dolore saepe numquam et distinctio maiores quisquam hic quam, quis
        aspernatur.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea harum dolor
        quos. Ab tempore incidunt, voluptate necessitatibus aperiam accusamus
        dolore saepe numquam et distinctio maiores quisquam hic quam, quis
        aspernatur.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
};

export default About;
