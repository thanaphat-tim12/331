import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { addProduct, removeProduct } from "../features/productSlice";

function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        id: productList.length + 1,
        name: `${productName} ${productList.length + 1}`,
        price: `$${productPrice}`,
        description: productDescription,
      })
    );

    setProductName("");
    setProductPrice("");
    setProductDescription("");
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  return (
    <div className="container mx-auto p-6"> 
     <h3 className="text-xl font-semibold mt-6 mb-4">สินค้าใหม่</h3>
     <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddProduct();
        }}
        className="space-y-4"
      >
        <div>
          <label className="block font-medium">ชื่อสินค้า:</label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block font-medium">ราคาสินค้า:</label>
          <input
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <div>
          <label className="block font-medium">รายละเอียดสินค้า:</label>
          <input
            type="text"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          เพิ่มสินค้า
        </button>
      </form>
      <h2 className="text-2xl font-bold mb-4">รายการสินค้า </h2>

      <ul className="space-y-4">
        {productList.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm"
          >
            <Link to={`/product/${product.id}`} className="text-lg font-semibold text-blue-600">
              {product.name} - {product.price}
            </Link>
            <button
              onClick={() => handleRemoveProduct(product.id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              ลบ
            </button>
          </li>
        ))}
      </ul>    
    </div>
  );
}

export default Products;
