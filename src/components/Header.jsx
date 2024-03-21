import { Menu, Popover, Transition } from "@headlessui/react";
import { FcRegisteredTrademark } from "react-icons/fc";
import { Fragment } from "react";
import { HiSearch, HiOutlineChat, HiOutlineBell } from "react-icons/hi";

const Header = () => {
    return (
        <div className="bg-white px-4 h-16 flex items-center justify-between border-b border-gray-200 ">
            <div className="border border-neutral-300 px-2  py-1 flex items-center gap-1 w-80 rounded-sm ">
                <input type="text" placeholder="Search..." className="border-0 outline-0 font-light w-full" />
                <button>
                    <HiSearch className="text-gray-300" fontSize={20} />
                </button>
            </div>
            <div className="flex items-center gap-4">
                <Popover className="relative">
                    <Popover.Button
                        className={' p-1.5 inline-flex items-center text-gray-700 focus:outline-0 hover:bg-gray-100'}
                    >
                        <HiOutlineChat fontSize={24} />
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel className="absolute right-0 z-10 mt-3 w-80 ">
                            <div className="bg-white  shadow-lg px-2 py-2 mt-2 ring-black ring-1 ring-opacity-5">
                                This is a chat
                            </div>
                        </Popover.Panel>
                    </Transition>
                </Popover>
                <HiOutlineBell fontSize={24} />
                <div>
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <Menu.Button className="py-1.5">

                                <FcRegisteredTrademark fontSize={24} />
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
                            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                                <div className="px-1 py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <div className={`${active ? 'bg-gray-100 text-gray-900 font-normal px-2 py-1 rounded-sm' : 'text-gray-600 font-normal px-2 py-1 rounded-sm'}`}>
                                                Profile
                                            </div>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <div className={`${active ? 'bg-gray-100 text-gray-900 w-full font-normal px-2 py-1 rounded-sm' : 'text-gray-600 font-normal px-2 w-full py-1 rounded-sm'}`}>
                                                Orders
                                            </div>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <div className={`${active ? 'bg-gray-100 text-gray-900 w-full font-normal px-2 py-1 rounded-sm' : 'text-gray-600 font-normal px-2 w-full py-1 rounded-sm'}`}>
                                                Settings
                                            </div>
                                        )}
                                    </Menu.Item>
                                </div>

                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </div >
    )
}

export default Header