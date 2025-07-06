"use client";

import { useEffect, useState } from "react";
import { IProduct } from "@/types/Product";
import { API_URL } from "@/app/const/variables";
import { redirect } from "next/navigation";

export default function ProductForm({
  product,
  isView,
}: {
  product?: IProduct;
  isView?: boolean;
}) {
  const [isEditing, setIsEditing] = useState(!isView);

  const [productData, setProductData] = useState<IProduct>({
    name: "",
    description: "",
    price: 0,
    stocks: 0,
  });

  useEffect(() => {
    if (product) {
      setProductData(product);
    }
  }, [product]);

  const onSubmit = () => {
    console.log("is", isEditing);
    if (isEditing) {
      updateProduct();      
    } else {
      saveProduct();
    }
  };

  const saveProduct = async () => {
    console.log("save");
    const res = await fetch(`${API_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    const data = await res.json();
    console.log(data);    
    redirect('/product')
  };

  const updateProduct = async () => {
    console.log("update");
    const res = await fetch(`${API_URL}/products/${productData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    const data = await res.json();
    console.log(data);
    setIsEditing(false);
  };

  const onCancel = () => {    
    if (isEditing) {
      setIsEditing(false);
    } else {
      redirect('/product')
    }
  };

  return (
    <form>
      <div className="space-y-12">
        <div className="">
          <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  disabled={!isEditing}
                  value={productData.name}
                  onChange={(e) =>
                    setProductData({ ...productData, name: e.target.value })
                  }
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm/6 font-medium text-gray-900"
              >
                description
              </label>
              <div className="mt-2">
                <textarea
                  disabled={!isEditing}
                  value={productData.description}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      description: e.target.value,
                    })
                  }
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">
                Write a few sentences about yourself.
              </p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Price
              </label>
              <div className="mt-2">
                <input
                  disabled={!isEditing}
                  value={productData.price}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      price: Number(e.target.value),
                    })
                  }
                  id="price"
                  name="price"
                  type="number"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Stock
              </label>
              <div className="mt-2">
                <input
                  disabled={!isEditing}
                  value={productData.stocks}
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      stocks: Number(e.target.value),
                    })
                  }
                  id="stocks"
                  name="stocks"
                  type="number"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={onCancel} type="button" className="rounded-md bg-yellow-100 px-3 py-2 text-sm font-semibold text-white shadow-xs hover: bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600 cursor-pointer">
          Cancel
        </button>
        {isView && !isEditing && (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            className="rounded-md bg-yellow-200 px-3 py-2 text-sm font-semibold text-white shadow-xs hover: bg-yellow-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-900 cursor-pointer"
          >
            Edit
          </button>
        )}

        {(isEditing || !isView) && (
          <button
            disabled={!isEditing}
            type="button"
            onClick={onSubmit}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
          >
            Save
          </button>
        )}
      </div>
    </form>
  );
}
