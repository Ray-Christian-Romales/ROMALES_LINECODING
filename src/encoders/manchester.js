export const manchester = {
  id: "manchester",
  name: "Polar Biphase Manchester",
  run: (bits) =>
    bits.map((b) => ({
      bit: b,
      label: b ? "nTp" : "pTn",
      h: b ? [-1, 1] : [1, -1],
    })),
};
