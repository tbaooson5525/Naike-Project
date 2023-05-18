export default function Card({ thumbnail, title, gender, price }) {
  return (
    <div className="w-full max-w-sm bg-white ">
      <a href="#">
        <img src={thumbnail} alt="product image" />
      </a>
      <div className="pl-4">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-800">
            {title}
          </h5>
        </a>
        <p className="text-gray-400">{gender}</p>
        <p className="pt-6 text-xl font-bold text-gray-800">${price}</p>
      </div>
    </div>
  );
}
