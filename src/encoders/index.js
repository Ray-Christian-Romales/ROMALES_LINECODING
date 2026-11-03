import { unipolar } from "./unipolar";
import { nrzL, nrzI } from "./nrz";
import { rz } from "./rz";
import { manchester, diffManchester } from "./manchester";
import { ami } from "./ami";

export const SCHEMES = [
  unipolar,
  nrzL,
  nrzI,
  rz,
  manchester,
  diffManchester,
  ami,
];
