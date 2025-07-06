"use client"
import Link from "next/link";
import { useProductList } from "../hooks/useProductList";



// const people: IProduct[] = [
//   {
//     name: "Apple iPhone 15",
//     description: "Latest Apple smartphone with advanced features.",
//     price: 999,
//     stocks: 25,    
//   },
//   {
//     name: "Samsung Galaxy S24",
//     description: "Flagship Samsung phone with high-end specs.",
//     price: 899,
//     stocks: 40,    
//   },
//   {
//     name: "Sony WH-1000XM5",
//     description: "Noise-cancelling wireless headphones.",
//     price: 349,
//     stocks: 15,   
//   }
// ]

export default function Product() {

  const { products } = useProductList();

  return (
    <div className="container mx-auto">
      <div className="mt-10">
        <Link href="/product/create">
          <button className="bg-blue-400 p-2 rounded-md text-white cursor-pointer">
            Add product
          </button>
        </Link>
      </div>

      <ul role="list" className="divide-y divide-gray-100">
        {products.map((product) => (
          <li key={product.name} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {product.name}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">Price: {product.price}</p>
              <p className="text-sm/6 text-gray-900">Stock: {product.stocks}</p>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <Link href={`/product/${product._id}`}>
                <button className="bg-blue-400 p-2 rounded-md text-white cursor-pointer">
                  View
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
