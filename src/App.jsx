import { useState } from "react";
import BitStreamForm from "./components/BitStreamForm";
import SchemeCard from "./components/SchemeCard";
import { SCHEMES } from "./encoders";

function App() {
  const [input, setInput] = useState(null);
  if (!input) return <BitStreamForm onSubmit={setInput} />;

  const cards = SCHEMES.flatMap((s) =>
    s.needsInit
      ? [
          [1, "initially hi"],
          [-1, "initially lo"],
        ].map(([init, t]) => ({
          key: s.id + init,
          title: s.name + " (" + t + ")",
          segments: s.run(input.bits, init),
        }))
      : [{ key: s.id, title: s.name, segments: s.run(input.bits) }],
  );

  return (
    <main className="max-w-4xl mx-auto p-4">
      <button
        className="border rounded px-3 py-1"
        onClick={() => setInput(null)}
      >
        Change input
      </button>
      {cards.map((c) => (
        <SchemeCard key={c.key} title={c.title} segments={c.segments} />
      ))}
    </main>
  );
}

export default App;
