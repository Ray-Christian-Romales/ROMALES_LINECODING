export const nrzL = {
  id: "nrzl",
  name: "Polar NRZ-L",
  run: (bits) =>
    bits.map((b) => {
      const v = b ? -1 : 1;
      return { bit: b, label: b ? "neg" : "pos", h: [v, v] };
    }),
};
