import { useEffect, useState } from "react";
import Filter from "../components/ProductListing/Filter";
import Sort from "../components/ProductListing/Sort";
import Card from "../components/ProductListing/Card";


export default function ProductListing() {
  const products = [
    {
      id: 1,
      title: "a",
      gender: "men",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
    {
      id: 2,
      title: "b",
      gender: "men",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
    {
      id: 3,
      title: "c",
      gender: "men",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
    {
      id: 4,
      title: "d",
      gender: "men",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
    {
      id: 5,
      title: "e",
      gender: "men",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
    {
      id: 6,
      title: "f",
      gender: "men",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
    {
      id: 7,
      title: "g",
      gender: "men",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
    {
      id: 8,
      title: "h",
      gender: "women",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
    {
      id: 9,
      title: "y",
      gender: "women",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
    {
      id: 10,
      title: "k",
      gender: "women",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
    {
      id: 11,
      title: "l",
      gender: "women",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
    {
      id: 12,
      title: "m",
      gender: "women",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
    {
      id: 13,
      title: "n",
      gender: "women",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
    {
      id: 14,
      title: "o",
      gender: "women",
      price: 100,
      thumbnail:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2e282edb-e916-48cb-8329-97497507ab19/air-max-pulse-shoes-QShhG8.png",
    },
  ];

  const [sort, setSort] = useState(false);
  function handleOpenSort() {
    setSort(!sort);
  }

  const [open, setOpen] = useState(false);

  const breakpoints = [1024];

  function handleWindowResize() {
    const windowWidth = window.innerWidth;

    const shouldCloseModal = breakpoints.some(
      (breakpoint) => windowWidth <= breakpoint
    );
    if (shouldCloseModal) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  function handleFilterOpen() {
    setOpen(true);
  }

  function handleFilterClose() {
    setOpen(false);
  }

  if (open) {
    return (
      <div>
        <Filter open={open} onFilterClose={handleFilterClose} />
        <div>
          <div className="px-5 h-[50px] max-w-7xl mb-[15px] fixed bg-white w-full lg:z-[40] lg:max-w-full lg:flex lg:items-center lg:justify-between">
            <h1 className="text-xl py-2 text-black font-medium lg:flex-grow">Shoes</h1>
            <div className="hidden lg:block">
              <button
                className="flex gap-1 px-6 py-[6px] mr-7 border rounded-full items-center lg:border-white"
                onClick={(handleFilterOpen, handleFilterClose)}
              >
                <p className="text-base text-[#111111] font-medium">
                  Hide Filter
                </p>
                <div className="w-6 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div className="hidden lg:block">
              <button
                onClick={handleOpenSort}
                className="flex items-center justify-between relative"
              >
                Sort By
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className=" z-[40] fixed top-[44px] right-0">
            <Sort sort={sort} />
          </div>
          <div className="pt-20 border-b -z-20 lg:hidden">
            <ul className="text-base font-medium flex whitespace-nowrap overflow-auto scrollbar-hide ">
              <li className="pb-[14px] px-4">
                <a href="">Lifestyle</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Jordan</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Running</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Basketball</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Training & Gym</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Football</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Skateboarding</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Golf</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Nike By You</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Boots</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Tennis</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Athletics</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Walking</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between pt-5 lg:hidden">
          <p className="text-base ml-5 my-4 text-[#757575]">873 Results</p>
          <button
            className="flex gap-1 px-6 py-[6px] mr-7 border rounded-full items-center"
            onClick={(handleFilterOpen, handleFilterClose)}
          >
            <p className="text-base text-[#111111] font-medium">Filter</p>
            <div className="w-6 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-[6px] lg:grid lg:grid-cols-3 lg:ml-[20%] lg:px-9">
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              gender={product.gender}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Filter open={open} onFilterClose={handleFilterClose} />
        <div>
          <div className="px-5 max-w-7xl mb-[15px] fixed bg-white w-full lg:z-[40] lg:max-w-full lg:flex lg:items-center lg:justify-between">
            <h1 className="text-xl py-2 text-black font-medium lg:flex-grow">Shoes</h1>
            <div className="hidden lg:block">
              <button
                className="flex gap-1 px-6 py-[6px] mr-7 border rounded-full items-center lg:border-white"
                onClick={handleFilterOpen}
              >
                <p className="text-base text-[#111111] font-medium">
                  Show Filter
                </p>
                <div className="w-6 text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div className="hidden lg:block">
              <button
                onClick={handleOpenSort}
                className="flex items-center justify-between relative"
              >
                Sort By
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className=" z-[40] fixed top-[44px] right-0">
            <Sort sort={sort} />
          </div>
          <div className="pt-20 border-b -z-20 lg:hidden">
            <ul className="text-base font-medium flex whitespace-nowrap overflow-auto scrollbar-hide ">
              <li className="pb-[14px] px-4">
                <a href="">Lifestyle</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Jordan</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Running</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Basketball</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Training & Gym</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Football</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Skateboarding</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Golf</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Nike By You</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Boots</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Tennis</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Athletics</a>
              </li>
              <li className="pb-[14px] px-4">
                <a href="">Walking</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between pt-5 lg:hidden">
          <p className="text-base ml-5 my-4 text-[#757575]">873 Results</p>
          <button
            className="flex gap-1 px-6 py-[6px] mr-7 border rounded-full items-center"
            onClick={handleFilterOpen}
          >
            <p className="text-base text-[#111111] font-medium">Filter</p>
            <div className="w-6 text-gray-600">
              <svg
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-[6px] lg:grid lg:grid-cols-3">
          {products.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              gender={product.gender}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          ))}
        </div>
      </div>
    );
  }
}


