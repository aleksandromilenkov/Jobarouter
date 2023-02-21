import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const Careers = () => {
  const careers = useLoaderData();
  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

//loader function

export const careersLoader = async function () {
  const resp = await fetch("http://localhost:4000/careers");
  if (!resp.ok) {
    throw Error("Could not found any careers.");
  }
  return resp.json();
};

export default Careers;
