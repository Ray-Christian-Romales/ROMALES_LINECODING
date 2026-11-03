export const unipolar = {
  id: "unipolar",
  name: "Unipolar NRZ",
  run: (bits) =>
    bits.map((b) => ({ bit: b, label: b ? "hi" : "lo", h: [b, b] })),
};
