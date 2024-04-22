import { TypeColor } from "./basicColor";

export type Appearance = {
  fill?: TypeColor;
  stroke?: [number, string] | ["size" | "color"];
  radii?:
    | number
    | {
        topLeft?: number;
        topRight?: number;
        bottomLeft?: number;
        bottomRight?: number;
      };
  effects?: {
    innerShadow?: number;
    dropShadow?: number;
    backroundBlue?: number;
  };
};
