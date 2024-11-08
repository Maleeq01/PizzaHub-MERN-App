import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../context/AuthContext";

const navigation = [
  { name: "Home", href: "/", public: true },
  { name: "Menu", href: "/menu", auth: true },
  { name: "Build Pizza", href: "/build-pizza", auth: true },
  { name: "My Orders", href: "/orders", auth: true },
];

const adminNavigation = [
  { name: "Dashboard", href: "/admin/dashboard" },
  { name: "Inventory", href: "/admin/inventory" },
  { name: "Orders", href: "/admin/orders" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Disclosure as="nav" className="bg-indigo-600">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/" className="text-white font-bold text-xl">
                    Pizza Hub
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => {
                      if ((item.auth && user) || item.public) {
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item.name}
                          </Link>
                        );
                      }
                      return null;
                    })}
                    {user?.role === "admin" &&
                      adminNavigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.name}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  {user ? (
                    <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="flex max-w-xs items-center rounded-full bg-indigo-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                          <span className="sr-only">Open user menu</span>
                          <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white">
                            {user.name?.charAt(0).toUpperCase()}
                          </div>
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/profile"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={handleLogout}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block w-full text-left px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  ) : (
                    <div className="space-x-4">
                      <Link
                        to="/login"
                        className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="bg-white text-indigo-600 hover:bg-gray-100 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-indigo-600 p-2 text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => {
                if ((item.auth && user) || item.public) {
                  return (
                    <Disclosure.Button
                      key={item.name}
                      as={Link}
                      to={item.href}
                      className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.name}
                    </Disclosure.Button>
                  );
                }
                return null;
              })}
              {user?.role === "admin" &&
                adminNavigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={Link}
                    to={item.href}
                    className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
            </div>
            <div className="border-t border-indigo-500 pt-4 pb-3">
              {user ? (
                <div className="space-y-1 px-2">
                  <Disclosure.Button
                    as={Link}
                    to="/profile"
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500"
                  >
                    Your Profile
                  </Disclosure.Button>
                  <Disclosure.Button
                    onClick={handleLogout}
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              ) : (
                <div className="space-y-1 px-2">
                  <Disclosure.Button
                    as={Link}
                    to="/login"
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500"
                  >
                    Login
                  </Disclosure.Button>
                  <Disclosure.Button
                    as={Link}
                    to="/register"
                    className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-indigo-500"
                  >
                    Register
                  </Disclosure.Button>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
