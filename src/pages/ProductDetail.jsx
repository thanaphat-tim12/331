import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function ProductDetail() {
  const { productId } = useParams();
  const productList = useSelector((state) => state.products);
  const product = productList.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <h2 className="text-center text-red-500 text-xl">ไม่พบ</h2>;
  }

  return (
    <div className="w-3/4 md:w-full max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h2>

      <p className="text-lg text-gray-600 mb-2">
        <span className="font-semibold">ราคา: </span>
        {product.price}
      </p>

      <p className="text-lg text-gray-600">
        <span className="font-semibold">รายละเอียดสินค้า: </span>
        {product.description}
      </p>
      <div className="flex justify-between items-center">
        <button className="btn btn-primary p-1 px-2 bg-blue-500 text-base mt-3 rounded-lg shadow-lg text-white">เพิ่มสินค้า</button>
        <Link to="/"><button className="btn btn-primary p-1 px-8 bg-red-500 text-base mt-3 rounded-lg shadow-lg text-white">ย้อนกลับ</button></Link>
      </div>
    </div>

    
  );
}

export default ProductDetail;
