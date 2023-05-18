export default function Checkbox({ children, check, onCheck }) {
  let type = "false";

  if (check) {
    type = "checkbox";
  }

  return (
    <div>
      <div>
        <ul>
          <li>
            <button onClick={onCheck} className="flex items-center gap-3 pb-5">
              <input type={type} className="w-4 h-4 border border-black" />
              <label className="text-base font-normal">{children}</label>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
