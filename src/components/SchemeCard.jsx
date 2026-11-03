import LabelRow from "./LabelRow";
import Waveform from "./Waveform";

function SchemeCard({ title, segments }) {
  return (
    <section className="bg-white border rounded-xl p-3 my-4 shadow-sm">
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="scroll">
        <LabelRow segments={segments} />
        <Waveform segments={segments} />
      </div>
    </section>
  );
}

export default SchemeCard;
