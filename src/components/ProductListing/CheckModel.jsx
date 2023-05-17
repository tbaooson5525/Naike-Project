export default function CheckModel({check, onNoCheck}) {
    if (!check) return null;
  return (
    <div>
      <div className="flex bg-slate-400">
        <button onClick={onNoCheck}>Clear</button>
        <button onClick={onNoCheck} className="bg-black text-white">Apply</button>
      </div>
    </div>
  );
}
