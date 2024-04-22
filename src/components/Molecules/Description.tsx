import React from "react";
import { Type } from "../Atoms";
import useAbout from "./useAbout";

const Description = () => {
  const { character } = useAbout()[aboutKey];
  return (
    <Type character={character} paragraph="center">
      Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim
      <br />
      id veniam aliqua proident excepteur commodo do ea.
    </Type>
  );
};

export default Description;
