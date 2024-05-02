import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

const override = {
  display: "block",
  margin: "1rem auto",
};
export const Spinner = ({ loading }) => {
  return <PropagateLoader color="#0d6efd" loading={loading} cssOverride={override} />;
};
