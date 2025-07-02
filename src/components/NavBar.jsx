import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router'

const getNavigation = (user) => {
  if (!user) {
    return [
      { name: 'Home', href: '/', current: false },
      { name: 'Register', href: '/register', current: false },
      { name: 'Login', href: '/login', current: false }
    ]
  } else if (user) {
    if (user.role === "admin") {
      return [
        { name: "Dashboard", href: "/admin/dashboard", current: false },
        { name: "Manage Users", href: "#", current: false },
        { name: "Manage Restaurants", href: "#", current: false },
        { name: "Logout", href: "/admin/dashboard/logout", current: false }
      ]
    } else if (user.role === "user") {
      return [
        { name: "Dashboard", href: "/dashboard", current: false },
        { name: "Profile", href: "#", current: false },
        { name: "Orders", href: "#", current: false },
        { name: "Logout", href: "/dashboard/logout", current: false }
      ]
    } else if (user.role === "manager") {
      return [
        { name: "Dashboard", href: "/manager/dashboard", current: false },
        { name: "Profile", href: "#", current: false },
        { name: "Manage Menu Items", href: "#", current: false },
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
          {
            user && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="size-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        Your Profile
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        Settings
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                      >
                        Sign out
                      </a>
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
            )
          }
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
