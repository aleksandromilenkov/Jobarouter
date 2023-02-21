import React from "react";
import { useRouteError, Link } from "react-router-dom";

const CareerError = () => {
  const error = useRouteError();
  return (
    <div className="careers-error">
      <h2>Bad request</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the home page</Link>
    </div>
  );
};

export default CareerError;
