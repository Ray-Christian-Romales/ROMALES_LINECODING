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
      <form
        className="grid gap-3 max-w-sm mx-auto mt-10 p-4"
        onSubmit={askLength}
      >
        <h2 className="text-xl font-bold">Line Coding</h2>
        <label>Size/length of the bit stream</label>
        <input
          className="border rounded px-2 py-1"
          type="number"
          value={len}
          onChange={(e) => setLen(e.target.value)}
        />
        {err && <p className="text-red-600">{err}</p>}
        <button className="bg-blue-600 text-white rounded px-3 py-1">
          Next
        </button>
      </form>
    );

  return (
    <form className="grid gap-3 max-w-sm mx-auto mt-10 p-4" onSubmit={send}>
      <h2 className="text-xl font-bold">Enter {n} bits</h2>
      <input
        className="border rounded px-2 py-1"
        value={bits}
        maxLength={n}
        onChange={(e) => setBits(e.target.value)}
        placeholder="e.g. 111001011000"
      />
      {err && <p className="text-red-600">{err}</p>}
      <button className="bg-blue-600 text-white rounded px-3 py-1">
        Generate
      </button>
      <button
        type="button"
        className="border rounded px-3 py-1"
        onClick={() => setN(null)}
      >
        Back
      </button>
    </form>
  );
}

export default BitStreamForm;
