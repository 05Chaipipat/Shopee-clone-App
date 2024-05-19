import axios from "axios";
import { useEffect, useState } from "react";

const HomeProducts = () => {
  const [products, setProduct] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      console.log(res);

      if (res.data) {
        setProduct(res.data.products);
        console.log(res.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col px-5 bg-gray-200 py-10">
      <div className="border-b-4 py-4 border-orange-600">
        <h1 className="text-xl text-center text-orange-500 bg-white p-4 ">
          สินค้าแนะนำประจำวัน
        </h1>
      </div>
      <div className="grid grid-cols-6 gap-1.5 mt-5">
        {products.map((product) => (
          <a key={product.id} href={`/product/${product.id}`}>
            <div className="flex flex-col bg-white w-full h-[440px]">
              <div className="picture h-2/3 relative ">
                <img
                  className="w-full h-full object-cover"
                  src={product.images[0]}
                  alt=""
                />
                <div className=" absolute top-0 right-0 bg-yellow-300 text-sm text-red-600 py-0.5 px-1">
                  -{product.discountPercentage}%
                </div>
              </div>

              <div className="h-1/3 flex flex-col justify-between p-3">
                <div className="pt-2">{product.title}</div>
                <div className="pt-2 pb-3">
                  <span className="bg-yellow-600 text-sm text-white p-1">
                    โค้ดลด ฿{Math.floor(Math.random() * 50) + 1}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <div className=" text-red-500">฿{product.price}</div>
                  <div className="text-[14px]">ขายได้แล้ว 10 ชิ้น</div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeProducts;
