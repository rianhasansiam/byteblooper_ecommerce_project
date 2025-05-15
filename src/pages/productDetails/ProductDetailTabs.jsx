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
    <div className="mt-8 sm:mt-16 border-b border-gray-200">
      {/* Mobile Tab Selector */}
      <div className="lg:hidden mb-4">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
        >
          {tabs.map((tab) => (
            <option key={tab} value={tab}>
              {tab}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Tab Navigation */}
      <nav className="hidden lg:flex overflow-x-auto scrollbar-hide -mb-px">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap px-4 sm:px-6 py-3 sm:py-4 text-sm font-medium border-b-2 transition-colors ${
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
      <div className="py-4 sm:py-6 md:py-8">
        {activeTab === 'Description' && (
          <div className="prose max-w-none">
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Product Description</h3>
            <p className="text-sm sm:text-base text-gray-700">
              Our Premium T-Shirt is crafted from ultra-soft cotton lycra fabric with GSM 175+ for superior comfort. 
              Silicon washed for a premium feel, this lightweight and breathable fabric ensures all-day comfort.
            </p>
          </div>
        )}

        {activeTab === 'Additional Information' && (
          <div className="prose max-w-none">
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Additional Details</h3>
            <ul className="text-sm sm:text-base text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Fabric: 95% Cotton, 5% Lycra</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Weight: 175 GSM</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Fit: Regular Fit</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Neck: Round Neck</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Sleeve: Short Sleeve</span>
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'Warranty & Shipping' && (
          <div className="prose max-w-none">
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Warranty & Shipping Policy</h3>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
              We offer a 30-day return policy. Free shipping on all orders over $50. 
              Delivery typically takes 3-5 business days.
            </p>
            <p className="text-sm sm:text-base text-gray-700">
              This product comes with a 6-month manufacturer's warranty against defects.
            </p>
          </div>
        )}

        {activeTab === 'Wash & Care' && (
          <div className="prose max-w-none">
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Wash & Care Instructions</h3>
            <ul className="text-sm sm:text-base text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Machine wash cold with similar colors</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Use mild detergent</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Do not bleach</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Tumble dry low</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Iron on low heat if needed</span>
              </li>
            </ul>
          </div>
        )}

        {activeTab === 'Reviews' && (
          <div className="prose max-w-none">
            <h3 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Customer Reviews</h3>
            <p className="text-sm sm:text-base text-gray-700">
              "This is the most comfortable t-shirt I've ever worn!" - ⭐⭐⭐⭐⭐
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailTabs;