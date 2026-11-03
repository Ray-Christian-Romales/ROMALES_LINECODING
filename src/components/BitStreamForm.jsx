import { useState } from "react";

function BitStreamForm({ onSubmit }) {
  const [len, setLen] = useState("");
  const [n, setN] = useState(null);
  const [bits, setBits] = useState("");
  const [err, setErr] = useState("");

  const askLength = (e) => {
    e.preventDefault();
    const v = Number(len);
    if (!Number.isInteger(v) || v < 1 || v > 64)
      return setErr("Enter a whole number from 1 to 64.");
    setErr("");
    setN(v);
  };

  const send = (e) => {
    e.preventDefault();
    if (!/^[01]+$/.test(bits) || bits.length !== n)
      return setErr("Enter exactly " + n + " bits (0 or 1 only).");
    setErr("");
    onSubmit({ bits: [...bits].map(Number) });
  };

  if (n === null)
    return (
      <form className="form" onSubmit={askLength}>
        <h2>Line Coding</h2>
        <label>Size/length of the bit stream</label>
        <input
          type="number"
          value={len}
          onChange={(e) => setLen(e.target.value)}
        />
        {err && <p className="err">{err}</p>}
        <button>Next</button>
      </form>
    );

  return (
    <form className="form" onSubmit={send}>
      <h2>Enter {n} bits</h2>
      <input
        value={bits}
        maxLength={n}
        onChange={(e) => setBits(e.target.value)}
        placeholder="e.g. 111001011000"
      />
      {err && <p className="err">{err}</p>}
      <button>Generate</button>
      <button type="button" onClick={() => setN(null)}>
        Back
      </button>
    </form>
  );
}

export default BitStreamForm;
