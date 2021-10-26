import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { SearchIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [data, setData] = useState();
  const navigation = [
    { name: "For Shoppers", href: "#", current: false },
    { name: "For Business", href: "#", current: false },
    { name: "How to APace", href: "#", current: false },
  ];

  const row = [
    { name: 1, current: false },
    { name: 2, current: false },
    { name: 3, current: false },
  ];

  const note = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaz Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deseruntmollit anim id est laborum ",
    },
    {
      id: 2,
      text: "Lncididunt ut labore et dolore magna aliquaz Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deseruntmollit anim id est laborum",
    },
    {
      id: 3,
      text: "Aey Coole magna aliquaz Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillumdolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident, sunt in culpa qui officia deseruntmollit anim id est laborum ",
    },
  ];

  const authNavigation = [
    { name: "Sign In", href: "#", current: false },
    { name: "Sign Up", href: "#", current: true },
  ];

  const onClick = (e) => {
    setData(e);
  };

  const text = note.filter((e) => e.id === data);

  useEffect(() => {
    setData(1);
  }, []);
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-black border-b  border-gray-800 ">
          {({ open }) => (
            <>
              <div className="mx-auto px-8 sm:px-6 lg:px-32">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center">
                    <div className="flex-shrink-0  ">
                      <h1 className="text-4xl text-yellow-600 "> apace </h1>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <button
                        type="button"
                        className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                      >
                        <span className="sr-only">View notifications</span>
                        <SearchIcon className="h-6 w-6 " aria-hidden="true" />
                      </button>

                      {authNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-yellow-600 text-black"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "px-6 ml-3 py-2 rounded-full text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <button
                      type="button"
                      className=" bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <SearchIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 px-2 space-y-1">
                    {authNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <main>
          <div className="min-h-full lg:px-32 px-8 py-16 text-white">
            <h4 className="text-4xl"> How it works</h4>
            <div className="flex mt-8 ">
              <div className="inline-flex flex-col">
                {row.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => onClick(item.name)}
                    className={classNames(
                      data === item.name
                        ? "bg-white text-black border-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "h-12 w-12 flex items-center cursor-pointer justify-center my-2 text-md font-medium rounded-full border border-gray-400 "
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mx-8 ">
                <h1 className="text-xl font-semibold">
                  {" "}
                  Choose a convinient option{" "}
                </h1>

                {text.map((text) => (
                  <p className="py-2" key={text.id}>
                    {" "}
                    {text.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
