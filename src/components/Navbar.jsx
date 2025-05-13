import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [currentLocation, setCurrentLocation] = useState({
    country: 'BD',
    currency: 'USD'
  });

  const countries = [
    { code: 'BD', name: 'Bangladesh', currency: 'BDT' },
    { code: 'PK', name: 'Pakistan', currency: 'PKR' },
    { code: 'US', name: 'United States', currency: 'USD' },
    { code: 'UK', name: 'United Kingdom', currency: 'GBP' },
    { code: 'AE', name: 'UAE', currency: 'AED' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  const selectLocation = (country) => {
    setCurrentLocation({
      country: country.code,
      currency: country.currency
    });
    setShowLocationDropdown(false);
  };
  return (
  <header className="bg-white  shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-bold text-gray-800">
              LAM
            </Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search fashion..."
                className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* Location/Currency Selector */}
          <div className="relative">
            <button
              className="flex items-center space-x-1 text-gray-700 hover:text-primary"
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            >
              <span className="hidden sm:inline">Deliver To / Currency</span>
              <span className="font-medium">
                {currentLocation.country} / {currentLocation.currency}
              </span>
              <svg
                className={`w-4 h-4 transition-transform ${showLocationDropdown ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {showLocationDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                <div className="py-1">
                  <div className="px-4 py-2 text-xs text-gray-500 border-b">
                    SELECT YOUR COUNTRY
                  </div>
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      className={`block w-full text-left px-4 py-2 text-sm ${currentLocation.country === country.code ? 'bg-gray-100 text-primary' : 'text-gray-700 hover:bg-gray-100'}`}
                      onClick={() => selectLocation(country)}
                    >
                      <div className="flex justify-between items-center">
                        <span>{country.name}</span>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded">
                          {country.currency}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>

  );
};

export default Navbar;