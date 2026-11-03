import { W } from "./Waveform";

function LabelRow({ segments }) {
  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(" + segments.length + ", " + W + "px)",
  };
  return (
    <div>
      <div style={grid}>
        {segments.map((s, i) => (
          <div key={i} className="cell bit">
            {s.bit}
          </div>
        ))}
      </div>
      <div style={grid}>
        {segments.map((s, i) => (
          <div key={i} className="cell">
            {s.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LabelRow;
