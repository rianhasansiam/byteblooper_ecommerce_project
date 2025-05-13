import { Link } from 'react-router-dom';

const MegaMenu = ({ category }) => {
  const womenSubcategories = [
    { name: 'Women Pending', path: '/women/pending' },
    { name: 'Women Luxury', path: '/women/luxury' },
    { name: 'Women Daily', path: '/women/daily' },
    { name: 'Modest Wear', path: '/women/modest' },
    { name: 'Western', path: '/women/western' },
    { name: 'Eastern', path: '/women/eastern' },
  ];

  const menSubcategories = [
    { name: 'Men Feature', path: '/men/feature' },
    { name: 'Men Luxury', path: '/men/luxury' },
    { name: 'Men Acura', path: '/men/acura' },
    { name: 'Western', path: '/men/western' },
    { name: 'Eastern', path: '/men/eastern' },
  ];

  const subcategories = category === 'Women' ? womenSubcategories : menSubcategories;

  return (
    <div className="absolute left-0 w-full bg-white shadow-lg py-4 hidden group-hover:block">
      <div className="container mx-auto px-4 grid grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">{category}'s Collection</h3>
          <ul className="space-y-2">
            {subcategories.map((sub) => (
              <li key={sub.name}>
                <Link to={sub.path} className="text-gray-600 hover:text-primary">
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Featured</h3>
          <div className="grid grid-cols-2 gap-2">
            <Link to="/new-arrivals" className="block">
              <div className="bg-gray-100 h-32 rounded"></div>
              <p className="text-sm mt-1">New Arrivals</p>
            </Link>
            <Link to="/summer-collection" className="block">
              <div className="bg-gray-100 h-32 rounded"></div>
              <p className="text-sm mt-1">Summer Collection</p>
            </Link>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 h-full rounded p-4">
            <h4 className="font-medium mb-2">Special Offer</h4>
            <p className="text-sm text-gray-600">Get 20% off on your first order</p>
            <button className="mt-3 bg-primary text-white px-3 py-1 rounded text-sm">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;