export const rz = {
  id: "rz",
  name: "Polar RZ",
  run: (bits) =>
    bits.map((b) => ({
      bit: b,
      label: b ? "pos RZ" : "neg RZ",
      h: b ? [1, 0] : [-1, 0],
    })),
};
