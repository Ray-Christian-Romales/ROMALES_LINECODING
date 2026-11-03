export const ami = {
  id: "ami",
  name: "Bipolar AMI",
  run(bits) {
    let last = -1;
    return bits.map((b) => {
      let v = 0;
      if (b) {
        last = -last;
        v = last;
      } // 1s alternate, first is pos
      return {
        bit: b,
        label: v > 0 ? "pos" : v < 0 ? "neg" : "zero",
        h: [v, v],
      };
    });
  },
};
