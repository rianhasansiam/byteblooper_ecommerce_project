import { useState } from 'react';

const ProductDetailTabs = () => {
  const [activeTab, setActiveTab] = useState('Description');

  const tabs = [
    'Description',
    'Additional Information',
    'Warranty & Shipping',
    'Wash & Care',
    'Reviews'
  ];

  return (
    <div className="mt-16 border-b border-gray-200 ">
      <nav className="flex overflow-x-auto scrollbar-hide -mb-px">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab
                ? 'border-gray-900 text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Tab Content */}
      <div className="py-8">
        {activeTab === 'Description' && (
          <div className="prose max-w-none">
            <h3 className="text-lg font-medium mb-4">Product Description</h3>
            <p className="text-gray-700">
              Our Premium T-Shirt is crafted from ultra-soft cotton lycra fabric with GSM 175+ for superior comfort. 
              Silicon washed for a premium feel, this lightweight and breathable fabric ensures all-day comfort.
            </p>
          </div>
        )}

        {activeTab === 'Additional Information' && (
          <div className="prose max-w-none">
            <h3 className="text-lg font-medium mb-4">Additional Details</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Fabric: 95% Cotton, 5% Lycra</li>
              <li>• Weight: 175 GSM</li>
              <li>• Fit: Regular Fit</li>
              <li>• Neck: Round Neck</li>
              <li>• Sleeve: Short Sleeve</li>
            </ul>
          </div>
        )}

        {activeTab === 'Warranty & Shipping' && (
          <div className="prose max-w-none">
            <h3 className="text-lg font-medium mb-4">Warranty & Shipping Policy</h3>
            <p className="text-gray-700 mb-4">
              We offer a 30-day return policy. Free shipping on all orders over $50. 
              Delivery typically takes 3-5 business days.
            </p>
            <p className="text-gray-700">
              This product comes with a 6-month manufacturer's warranty against defects.
            </p>
          </div>
        )}

        {activeTab === 'Wash & Care' && (
          <div className="prose max-w-none">
            <h3 className="text-lg font-medium mb-4">Wash & Care Instructions</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Machine wash cold with similar colors</li>
              <li>• Use mild detergent</li>
              <li>• Do not bleach</li>
              <li>• Tumble dry low</li>
              <li>• Iron on low heat if needed</li>
            </ul>
          </div>
        )}

        {activeTab === 'Reviews' && (
          <div className="prose max-w-none">
            <h3 className="text-lg font-medium mb-4">Customer Reviews</h3>
            <p className="text-gray-700">
              "This is the most comfortable t-shirt I've ever worn!" - ⭐⭐⭐⭐⭐
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailTabs;