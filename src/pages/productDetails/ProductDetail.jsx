import { useState } from 'react';
import { FiShoppingCart, FiTruck, FiRefreshCw, FiChevronLeft } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetailTabs from './ProductDetailTabs';
import RelatedProducts from '../../components/RelatedProducts';

const relatedMens = [
  { name: "Unstitched", image: "https://i.ibb.co/b5Fv87Md/images-1.jpg", description: "Premium fabrics for custom tailoring" },
  { name: "Men Festive", image: "https://i.ibb.co/b5Fv87Md/images-1.jpg", description: "Elegant outfits for celebrations" },
  { name: "Men Luxury", image: "https://i.ibb.co/b5Fv87Md/images-1.jpg", description: "High-end premium collections" },
  { name: "Men Kurta", image: "https://i.ibb.co/b5Fv87Md/images-1.jpg", description: "Traditional and contemporary styles" }
];
const relatedWomens = [
  { name: "Maria B", image: "https://i.ibb.co/rGd6fyR8/images.jpg", description: "M.Basic-Eid Edit Lawn-V2-..." },
  { name: "Elan", image: "https://i.ibb.co/rGd6fyR8/images.jpg", description: "Elan-Lawn'25" },
  { name: "Noor By Saadia ...", image: "https://i.ibb.co/rGd6fyR8/images.jpg", description: "NBS Schiffli Laserkari V-2-..." },
  { name: "Aik Atelier", image: "https://i.ibb.co/rGd6fyR8/images.jpg", description: "RAQS-Lawn V1-25" }
];

const ProductDetail = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const product = {
    id: 1, // Add id for cart logic
    name: "Premium T-Shirt - ViperHunter",
    price: 450,
    currency: "TK",
    features: [
      "Soft Cotton Lycra Fabric goue",
      "GSM 175+",
      "Silicon washed",
      "Fabrics Design",
      "Lightweight, super soft, and breathable"
    ],
    sizes: ['A', 'B', 'C', 'D'],
    category: "Printed T-Shirt",
    inStock: true,
    images: [
      "https://i.ibb.co/67jpxyyR/pexels-philkallahar-983200.jpg",
      "https://i.ibb.co/rGd6fyR8/images.jpg",
      "https://i.ibb.co/rGd6fyR8/images.jpg",
      "https://i.ibb.co/rGd6fyR8/images.jpg"
    ]
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size first");
      return;
    }
    // Add to localStorage cart
    const cart = JSON.parse(localStorage.getItem('addtocart')) || [];
    const existingIndex = cart.findIndex((item) => item.id === product.id && item.size === selectedSize);
    if (existingIndex !== -1) {
      cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + quantity;
    } else {
      cart.push({ ...product, quantity, size: selectedSize, image: product.images[0] });
    }
    localStorage.setItem('addtocart', JSON.stringify(cart));
    toast.success(`Added ${quantity} ${product.name} (Size: ${selectedSize}) to cart!`);
  };

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
      <ToastContainer position="top-center" />
      {/* Back Button */}
      <button 
        onClick={() => window.history.back()}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-4 sm:mb-6 text-sm"
      >
        <FiChevronLeft className="mr-1" />
        Back to Products
      </button>

      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
        {/* Product Image Gallery */}
        <div className="w-full lg:w-1/2">
          <div className="lg:sticky lg:top-4">
            {/* Main Image */}
            <div className="rounded-lg overflow-hidden mb-3 sm:mb-4 aspect-square bg-gray-100">
              <img 
                src={product.images[activeImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square rounded-md overflow-hidden border-2 ${
                    activeImage === index ? 'border-gray-900' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          {/* Price */}
          <div className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6">
            ${product.price} {product.currency}
          </div>

          {/* Features List */}
          <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-500 mb-2 sm:mb-3">PRODUCT DETAILS</h3>
            <ul className="space-y-1 sm:space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Size Selection */}
          <div className="mb-6 sm:mb-8">
            <div className="flex justify-between items-center mb-2 sm:mb-3">
              <h3 className="text-sm font-medium text-gray-900">SELECT SIZE</h3>
              <button className="text-xs text-gray-500 hover:text-gray-900">
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 sm:px-4 py-2 sm:py-3 w-14 sm:w-16 text-center border rounded-md text-sm font-medium transition-all ${
                    selectedSize === size
                      ? 'bg-gray-900 text-white border-gray-900'
                      : 'bg-white text-gray-900 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <label className="text-sm font-medium text-gray-900">QUANTITY</label>
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="px-3 sm:px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-3 sm:px-4 py-2 text-gray-900 border-x border-gray-300">{quantity}</span>
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="px-3 sm:px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-3 sm:py-4 px-4 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-md flex items-center justify-center gap-2 transition-colors"
            >
              <FiShoppingCart className="text-lg" />
              ADD TO CART
            </button>
          </div>

          {/* Shipping Info */}
          <div className="border-t border-gray-200 pt-4 sm:pt-6">
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="flex-shrink-0 mt-1">
                <FiTruck className="text-gray-500 text-lg" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Free Shipping</h4>
                <p className="text-xs sm:text-sm text-gray-500">Delivery in 3-5 business days</p>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0 mt-1">
                <FiRefreshCw className="text-gray-500 text-lg" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">Easy Returns</h4>
                <p className="text-xs sm:text-sm text-gray-500">30-day return policy</p>
              </div>
            </div>
          </div>

          {/* Category */}
          <div className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500">
            <span className="font-medium">Category:</span> {product.category}
          </div>
        </div>
      </div>

      <ProductDetailTabs />
      <RelatedProducts title="Related Men's Products" products={relatedMens} />
      <RelatedProducts title="Related Women's Products" products={relatedWomens} />
    </div>
  );
};

export default ProductDetail;