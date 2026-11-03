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

export const diffManchester = {
  id: "diffman",
  name: "Polar Biphase Differential Manchester",
  needsInit: true,
  run(bits, init) {
    let level = init;
    return bits.map((b) => {
      if (!b) level = -level; // 0 = inversion at start of bit
      const first = level;
      const second = -level; // always a mid-bit transition
      level = second; // carry to next bit
      return {
        bit: b,
        label: (first < 0 ? "nTp " : "pTn ") + (b ? "no inv" : "inv"),
        h: [first, second],
      };
    });
  },
};
