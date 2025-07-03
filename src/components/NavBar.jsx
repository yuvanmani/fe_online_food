import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'

const getNavigation = (user) => {
  if (!user) {
    return [
      { name: 'Home', href: '/', current: false },
      { name: 'Register', href: '/register', current: false },
      { name: 'Login', href: '/login', current: false },
      { name: 'Menu Items', href: '/menuItems', current: false }
    ]
  } else if (user) {
    if (user.role === "admin") {
      return [
        { name: "Dashboard", href: "/admin/dashboard", current: false },
        { name: "Manage Users", href: "/admin/dashboard/manageUsers", current: false },
        { name: "Manage Restaurants", href: "/admin/dashboard/manageRestaurants", current: false },
        { name: "Logout", href: "/admin/dashboard/logout", current: false }
      ]
    } else if (user.role === "user") {
      return [
        { name: "Dashboard", href: "/dashboard", current: false },
        { name: "Profile", href: "/dashboard/profile", current: false },
        { name: "Place Order", href: "/dashboard/orderItems", current: false },
        { name: "My Orders", href: "/dashboard/myOrders", current: false },
        { name: "Logout", href: "/dashboard/logout", current: false }
      ]
    } else if (user.role === "manager") {
      return [
        { name: "Dashboard", href: "/manager/dashboard", current: false },
        { name: "Profile", href: "/manager/dashboard/profile", current: false },
        { name: "Manage Orders", href: "/manager/dashboard/manageOrders", current: false },
        { name: "Logout", href: "/manager/dashboard/logout", current: false }
      ]
    }
  }
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar({ user }) {
  return (
    <Disclosure as="nav" className="bg-green-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-blue-600 hover:bg-green-600 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Foody Hub"
                src="https://tb-static.uber.com/prod/image-proc/processed_images/6ee21ff28f9cb35bbe33c01b29478c3c/1c3598e47c3a925b92664360b3dcd645.jpeg"
                className="h-8 w-auto rounded-xl mr-3"
              />
              <h2 className='text-3xl pr-2 font-semibold text-white font-serif outline-2 outline-dotted pl-2 rounded'>Foody Hub</h2>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {getNavigation(user).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'text-white' : 'text-white hover:bg-green-600 hover:text-white',
                      'rounded-md px-3 py-1 text-md font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                {
                  user && (
                    <p className='text-white px-3 py-1'>{user.email}</p>
                  )
                }
              </div>
            </div>
          </div>

        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {getNavigation(user).map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link}
              to={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'text-white' : 'text-white hover:bg-green-600 hover:text-white',
                'block rounded-md px-3 py-1 text-md font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
          {
            user && (
              <p className='text-white px-3 py-1'>{user.email}</p>
            )
          }
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
