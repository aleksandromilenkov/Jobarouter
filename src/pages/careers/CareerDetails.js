import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();
  console.log(career);
  if (!career || Object.keys(career).length === 0) {
    return <p>Career not found</p>;
  }
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
          recusandae dolor reiciendis provident ullam reprehenderit distinctio
          hic quos quod modi dolores dicta odit nesciunt molestiae eveniet rem,
          delectus aliquam nobis.
        </p>
      </div>
    </div>
  );
};

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const resp = await fetch("http://localhost:4000/careers/" + id);
  if (!resp.ok) {
    throw Error("Could not found that career.");
  }
  return resp.json();
};

export default CareerDetails;
