import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch, FaWhatsapp } from "react-icons/fa";
import { Freezer } from 'feather-icons-react';
import {
  Bars3Icon,
  TrashIcon,
  ShoppingCartIcon,
  XMarkIcon,
  SparklesIcon,
  PhoneIcon,
  PlayCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Productos = [
  {
    name: "Congelados",
    description: "Consulta nuestra Gran Variedad",
    href: "/productos",
    icon: SparklesIcon,
  },
  {
    name: "Lacteos",
    description: "Disfruta del verdadero sabor Venezolano",
    href: "/Lacteos",
    icon: TrashIcon,
  },
  {
    name: "Promociones",
    description: "Consulta Nuestras Promociones",
    href: "/promociones",
    icon: PlayCircleIcon,
  },
];

const callsToAction = [
  {
    name: "Comprar",
    href: "/carrito",
    icon: ShoppingCartIcon,
  },
  {
    name: "Whatsapp",
    href: "https://api.whatsapp.com/send?phone=34657511851&text=Hola%20%F0%9F%91%8B%20quiero%20hacer%20un%20pedido%20",
    icon: FaWhatsapp,
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-orange-600">
      <nav className="flex items-center justify-between p-4 lg:p-8">
        <div className="flex">
          <a href="/" className="-m-6 p-1">
            <span className="sr-only">Tequetapas Foods</span>
            <img
              className="h-20 w-30 rounded-full"
              src="https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/302154806_580306793530649_3335504125470527494_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=jKnCPHQLjowAX-ap5Km&_nc_ht=scontent-mad1-1.xx&oh=00_AfC1_UoJGodRFSKVc8HloQATcDn1fA88v8Pjn0GE4rZahA&oe=65A70238"
              alt="Tequetapas Foods"
            />
          </a>
        </div>
        
        <Popover.Group className="hidden lg:flex lg:gap-x-32">
          <div className="flex">
            <a href="#" className="text-3xl font-extrabold text-black-400 rounded-3xl p-2 text-white">
              <FaSearch />
            </a>
          </div>
          <Popover className="relative">

            <Popover.Button className="flex items-center gap-x-1 font-semibold text-2xl text-white">

              Productos
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-900"
                aria-hidden="true"
              />
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
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {Productos.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <Link to=
                          {item.href}
                          className="block font-semibold text-white-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        <p className="mt-1 text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-3xl font-semibold leading-8 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link
            to="/nosotros"
            className="text-lx font-semibold text-2xl text-white"
          >
            Nosotros
          </Link>

          <a
            href="https://api.whatsapp.com/send?phone=34657511851&text=Hola%20%F0%9F%91%8B%20quiero%20hacer%20un%20pedido%20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lx font-semibold text-2xl text-white"
          >
            Pedidos <FaWhatsapp className="inline-block" />
          </a>


          <Link
            to="/login"
            className="text-lx font-semibold text-2xl text-white"
          >
            Login <span aria-hidden="true">&rarr;</span>
          </Link>

          <Link
            to="/carrito"
            className="text-lx font-semibold text-2xl text-white"
          >
            <FiShoppingCart
              className="h-12 w-12 text-white"
              aria-hidden="true"
            />
          </Link>
        </Popover.Group>
      </nav>
    </header>
  );
}