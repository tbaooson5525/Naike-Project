export default function More({ children, more, onMoreClose }) {
  if (!more) return null;
  return (
    <div>
      <div>
        <ul>
          <li>
            <div className="flex items-center gap-3 pb-5">
              <input type="checkbox" name="a" className="w-4 h-4" />
              <label className="text-base font-normal">{children}</label>
            </div>
          </li>
        </ul>
      </div>
      <button className="pb-5" onClick={onMoreClose}>- Less</button>
    </div>
  );
}
