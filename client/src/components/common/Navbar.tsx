import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
	ShoppingBagIcon,
	MenuIcon,
	XIcon,
	UserIcon,
} from '@heroicons/react/outline';

const navigation = [
	{ name: 'Home', href: '/', current: false },
	{ name: 'Shop', href: '/shop', current: false },
	{ name: 'Contact', href: '/contact', current: false },
	{ name: 'Login', href: '/login', current: false },
];

const classNames = (...classes: any) => {
	return classes.filter(Boolean).join(' ');
};

const Navbar: React.FC = () => {
	return (
		<Disclosure as="nav">
			{({ open }) => (
				<>
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block h-6 w-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex-shrink-0 flex items-center">
									<h1 className="text-black text-lg">Ecom</h1>
								</div>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												className={classNames(
													item.current
														? 'bg-black text-white'
														: 'text-black hover:bg-black hover:text-white',
													'px-3 py-2 rounded-md text-sm font-medium'
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button className="p-1 rounded-full text-black hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
									<span className="sr-only">View notifications</span>
									<ShoppingBagIcon className="h-6 w-6" aria-hidden="true" />
								</button>

								{/* Profile dropdown */}
								<Menu as="div" className="ml-3 relative">
									{({ open }) => (
										<>
											<div>
												<Menu.Button className="flex p-1 rounded-full text-black hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
													<span className="sr-only">Open user menu</span>
													<UserIcon className="h-6 w-6" aria-hidden="true" />
												</Menu.Button>
											</div>
											<Transition
												show={open}
												as={Fragment}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items
													static
													className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
												>
													<Menu.Item>
														{({ active }) => (
															<a
																href="/profile"
																className={classNames(
																	active ? 'bg-gray-100' : '',
																	'block px-4 py-2 text-sm text-gray-700'
																)}
															>
																Your Profile
															</a>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<a
																href="/settings"
																className={classNames(
																	active ? 'bg-gray-100' : '',
																	'block px-4 py-2 text-sm text-gray-700'
																)}
															>
																Settings
															</a>
														)}
													</Menu.Item>
													<Menu.Item>
														{({ active }) => (
															<a
																href="/login"
																className={classNames(
																	active ? 'bg-gray-100' : '',
																	'block px-4 py-2 text-sm text-gray-700'
																)}
															>
																Login
															</a>
														)}
													</Menu.Item>
												</Menu.Items>
											</Transition>
										</>
									)}
								</Menu>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className={classNames(
										item.current
											? 'bg-gray-900 text-white'
											: 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block px-3 py-2 rounded-md text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</a>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default Navbar;