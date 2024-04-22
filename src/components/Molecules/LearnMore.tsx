import React from "react";
import { Rectangle, Type } from "../Atoms";

const LearnMore = () => {
  return (
    <Rectangle transform={{ x: 20 }} inline>
      <Type character={{ fontStyle: "bold" }}>Learn more {">"}</Type>
    </Rectangle>
  );
};

export default LearnMore;
