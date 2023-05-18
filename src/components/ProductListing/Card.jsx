import { Link } from "react-router-dom";

export default function Card({ thumbnail, title, gender, price,id,formatCurrency  }) {
  return (
    <div className="w-full bg-white">
      <Link to={`/products/${id}`}>
        <img className="w-full object-cover" src={thumbnail} alt="product image" />
        <div className="pl-4">
          <h5 className="text-xl font-semibold tracking-tight text-gray-800">
            {title}
          </h5>
          <p className="text-gray-400">{gender}</p>
          <p className="pt-6 text-xl font-bold text-gray-800">{formatCurrency(price)}</p>
        </div>
      </Link>
    </div>
  );
}
