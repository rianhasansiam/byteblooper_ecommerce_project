import { useState } from 'react';
import { FaPhone, FaUser, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';

const dhakaDistricts = [
  'Dhaka North', 'Dhaka South', 'Dhanmondi', 'Gulshan', 'Banani', 'Mirpur', 'Uttara', 'Mohammadpur', 'Badda', 'Tejgaon', 'Motijheel', 'Rampura', 'Khilgaon', 'Shyamoli', 'Wari', 'Jatrabari', 'Savar', 'Keraniganj', 'Demra', 'Pallabi', 'Kafrul', 'Cantonment', 'Adabor', 'Shahbag', 'Lalbag', 'New Market', 'Hazaribagh', 'Kamrangirchar', 'Chawkbazar', 'Dakkhinkhan', 'Uttarkhan', 'Turag', 'Bashundhara', 'Banasree', 'Baridhara', 'Agargaon', 'Shere Bangla Nagar', 'Kalabagan', 'Ramna', 'Paltan', 'Kotwali', 'Gendaria', 'Bangshal', 'Sutrapur', 'Sabujbag', 'Khilkhet', 'Shyampur', 'Kadamtali', 'Dohar', 'Nawabganj', 'Dhamrai'
];
const otherDistricts = [
  'Barisal', 'Barguna', 'Bhola', 'Jhalokati', 'Patuakhali', 'Pirojpur',
  'Chittagong', 'Bandarban', 'Brahmanbaria', 'Chandpur', 'Comilla', 'Cox\'s Bazar', 'Feni', 'Khagrachari', 'Lakshmipur', 'Noakhali', 'Rangamati',
  'Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Jamalpur', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Mymensingh', 'Narayanganj', 'Narsingdi', 'Netrokona', 'Rajbari', 'Shariatpur', 'Sherpur', 'Tangail',
  'Khulna', 'Bagerhat', 'Chuadanga', 'Jessore', 'Jhenaidah', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira',
  'Rajshahi', 'Bogra', 'Joypurhat', 'Naogaon', 'Natore', 'Chapai Nawabganj', 'Pabna', 'Sirajganj',
  'Rangpur', 'Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Thakurgaon',
  'Sylhet', 'Habiganj', 'Moulvibazar', 'Sunamganj'
];

const BuyerInfo = ({ onCityChange }) => {
  const [formData, setFormData] = useState({
    phone: '',
    name: '',
    address: '',
    notes: '',
    city: '',
  });

  const [errors, setErrors] = useState({
    phone: '',
    name: '',
    address: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    // City change logic
    if (name === 'city' && onCityChange) {
      let charge = 120;
      if (value === 'Inside Dhaka City') charge = 80;
      else if (value === 'Outside Dhaka City') charge = 120;
      else if (dhakaDistricts.includes(value)) charge = 80;
      else charge = 120;
      onCityChange(value, charge);
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      phone: '',
      name: '',
      address: '',
      city: '',
    };

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      valid = false;
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
      valid = false;
    }

    if (!formData.city) {
      newErrors.city = 'City is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with order confirmation
      console.log('Form submitted:', formData);
      alert('Order confirmed successfully!');
    }
  };

  return (
    <div className="max-w-md mx-auto p-2 ">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Buyer Information</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <FaPhone className="mr-2 text-gray-500" /> Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <FaUser className="mr-2 text-gray-500" /> Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.name ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gray-500" /> Select City *
          </label>
          <select
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.city ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
          >
            <option value="">Select your city</option>
            <option value="Inside Dhaka City">Inside Dhaka City</option>
            <option value="Outside Dhaka City">Outside Dhaka City</option>
            <optgroup label="Dhaka Districts">
              {dhakaDistricts.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </optgroup>
            <optgroup label="Other Districts">
              {otherDistricts.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </optgroup>
          </select>
          {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
            <FaMapMarkerAlt className="mr-2 text-gray-500" /> Delivery Address *
          </label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={3}
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
              errors.address ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder="Enter your complete delivery address"
          />
          {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
        </div>

        <div className="mb-4 text-sm text-gray-600">
          <p>By placing your order, you agree to our <a href="/terms" className="text-[#167389] hover:underline">Terms and Conditions</a></p>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-[#167389] hover:bg-blue-700 text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default BuyerInfo;