export default function Sort({sort}) {
    if (!sort) return null;
  return (
    <div className="border border-white rounded bg-white text-right">
      <ul>
        <li className="py-1 px-2">
          <a href="">Featured</a>
        </li>
        <li className="py-1 px-2">
          <a href="">Newest</a>
        </li>
        <li className="py-1 px-2">
          <a href="">Price: High-Low</a>
        </li>
        <li className="py-1 px-2">
          <a href="">Price: Low-High</a>
        </li>
      </ul>
    </div>
  );
}
