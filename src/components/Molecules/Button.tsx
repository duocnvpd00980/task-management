import React, { ReactNode } from "react";
import { Rectangle, Type } from "../Atoms";
import { createButton } from "./Button.classList";

interface Props {
  classList: "primary" | "primary-active" | "secondary" | "secondary-active";
  text: string | ReactNode;
}
const Button = ({ classList, text }: Props) => {
  return (
    <Rectangle
      transform={createButton[classList]?.transform}
      appearance={createButton[classList]?.appearance}
      inline
    >
      <Type
        character={createButton[classList]?.character}
        paragraph={createButton[classList]?.paragraph}
        typeOptions={createButton[classList]?.typeOptions}
        inline
      >
       {text}
      </Type>
    </Rectangle>
  )
};

export default Button;
