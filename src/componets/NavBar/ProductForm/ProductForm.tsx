"use client"

import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { useState } from 'react'
import { IProduct } from '@/types/Product'
import { API_URL } from '@/app/const/variables'

export default function ProductForm() {


    const [productData, setProductData] = useState<IProduct>({
        name: '',
        description: '',
        price: 0,
        stocks: 0
    })

//     {
//     "name": "test name",
//     "description": "test description",
//     "price": 232,
//     "stocks": 43
// }

    const saveProduct = async () => {
        
        const res = await fetch( `${API_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        const data = await res.json()
        console.log(data)        
    }


  return (
    <form>
      <div className="space-y-12">
        <div className="">
          <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            This information will be displayed publicly so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                    value={productData.name}
                    onChange={(e) => setProductData({...productData, name: e.target.value})}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                description
              </label>
              <div className="mt-2">
                <textarea
                    value={productData.description}
                    onChange={(e) => setProductData({...productData, description: e.target.value})}
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  defaultValue={''}
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
            </div>

            
            
            
          </div>
        </div>

        <div className="">
          
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                Price
              </label>
              <div className="mt-2">
                <input
                    value={productData.price}
                    onChange={(e) => setProductData({...productData, price: Number(e.target.value)})}
                  id="price"
                  name="price"
                  type="number"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                Stock
              </label>
              <div className="mt-2">
                <input
                    value={productData.stocks}
                    onChange={(e) => setProductData({...productData, stocks: Number(e.target.value)})}
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
        <button type="button" className="text-sm/6 font-semibold text-gray-900">
          Cancel
        </button>
        <button
          type="button"
          onClick={saveProduct}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  )
}
