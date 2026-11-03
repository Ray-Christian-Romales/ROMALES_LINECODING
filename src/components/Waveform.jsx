export const W = 50; // px per bit, LabelRow uses the same width
const H = 100,
  AMP = 35,
  MID = H / 2;

export default function Waveform({ segments }) {
  const y = (v) => MID - v * AMP;
  let d = "";
  segments.forEach((s, i) => {
    const x0 = i * W,
      xm = x0 + W / 2,
      x1 = x0 + W;
    const [a, b] = s.h.map(y);
    d +=
      (i ? "L" : "M") +
      x0 +
      " " +
      a +
      " L" +
      xm +
      " " +
      a +
      " L" +
      xm +
      " " +
      b +
      " L" +
      x1 +
      " " +
      b +
      " ";
  });
  const width = segments.length * W;
  return (
    <svg width={width} height={H} role="img">
      {Array.from({ length: segments.length + 1 }, (_, i) => (
        <line
          key={i}
          x1={i * W}
          x2={i * W}
          y1="0"
          y2={H}
          stroke="#bbb"
          strokeDasharray="3 3"
        />
      ))}
      <line x1="0" x2={width} y1={MID} y2={MID} stroke="#888" />
      <path d={d} fill="none" stroke="#2f5fd0" strokeWidth="2" />
    </svg>
  );
}
