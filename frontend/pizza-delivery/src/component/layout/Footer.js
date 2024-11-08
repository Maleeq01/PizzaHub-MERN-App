const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              Pizza Hub delivers the best custom pizzas right to your doorstep.
              Create your perfect pizza with our wide range of fresh
              ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/menu"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="/build-pizza"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Build Your Pizza
                </a>
              </li>
              <li>
                <a
                  href="/track-order"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Track Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                <span className="block">Phone:</span>
                +60 (555) 123-456
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block">Email:</span>
                contact@pizzahub.com
              </li>
              <li className="text-gray-400 text-sm">
                <span className="block">Address:</span>
                123 Pizza Street, Food City, Malaysia
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-semibold mb-4">
              Opening Hours
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400 text-sm">
                Monday - Friday: 11:00 AM - 10:00 PM
              </li>
              <li className="text-gray-400 text-sm">
                Saturday: 11:00 AM - 11:00 PM
              </li>
              <li className="text-gray-400 text-sm">
                Sunday: 12:00 PM - 9:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Pizza Hub. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
