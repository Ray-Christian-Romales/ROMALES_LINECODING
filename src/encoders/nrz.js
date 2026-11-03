export const nrzL = {
  id: "nrzl",
  name: "Polar NRZ-L",
  run: (bits) =>
    bits.map((b) => {
      const v = b ? -1 : 1;
      return { bit: b, label: b ? "neg" : "pos", h: [v, v] };
    }),
};

export const nrzI = {
  id: "nrzi",
  name: "Polar NRZ-I",
  needsInit: true,
  run(bits, init) {
    let level = init; // +1 hi, -1 lo
    return bits.map((b) => {
      if (b) level = -level; // 1 = inversion
      return {
        bit: b,
        label: (level > 0 ? "pos " : "neg ") + (b ? "inv" : "no inv"),
        h: [level, level],
      };
    });
  },
};
