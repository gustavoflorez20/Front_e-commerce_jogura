import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import LogoC from "../images/LogoCanaima.png";
import LogoT from "../images/LogoTequetapas.png";

import {
  Bars3Icon,
  TrashIcon,
  ShoppingCartIcon,
  XMarkIcon,
  SparklesIcon,

} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";


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
    icon: PhoneIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (

    <header className="bg-orange-600">
      <nav className="flex items-center gap-20 border-b p-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-6 p-1">
            <img
              className="h-30 w-40 rounded-full"
              src={LogoT}
            />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex">
          <input className='border-black rounded-md w-54 h-8 mr-20' type="text" placeholder="Busqueda rapida" />
          <a href="#" className="text-3xl font-extrabold leading-6 text-black-400 rounded-3xl p-2 text-white"><FaSearch /></a>
        </div>



        <Popover.Group className="hidden lg:flex lg:gap-x-20">
          <Popover className="relative">
            <Popover.Button className=" mr-10 flex items-center gap-x-1 font-semibold leading-6 text-2xl text-white">

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
                      className="flex items-center justify-center gap-x-2.5 p-3 text-3xl font-semibold leading-8  text-gray-900 hover:bg-gray-100"
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
            className=" mr-5 text-lx font-semibold leading-6 text-2xl text-white"
          >
            Nosotros
          </Link>

          <p className="font-semibold font-Anton text-white-800 dark: text-white">
            <a
              href="https://api.whatsapp.com/send?phone=34657511851&text=Hola%20%F0%9F%91%8B%20quiero%20hacer%20un%20pedido%20"
              target="_blank"
              rel="noopener noreferrer"
              className=" mr-5 text-lx font-semibold leading-6 text-2xl text-white"
            >
              Pedidos via WhatsApp
            </a>
          </p>

          {/* <Link
            to="/registerUsers"
            className=" text-lx font-semibold leading-6 text-2xl text-white"
          >
            Registrate
          </Link> */}

          <Link
            to="/login"
            className="mr-5 text-lx font-semibold leading-6 text-2xl text-white"
          >
            Login <span aria-hidden="true">&rarr;</span>
          </Link>

          <Link
            to="/carrito"
            className="mr-3 text-lx font-semibold leading-6 text-2xl text-white"
          >
            <FiShoppingCart
              className="h-12 w-12 text-white"
              aria-hidden="true"
            />
          </Link>
        </Popover.Group>
        <div className="flex lg:flex-1">
          <a href="/" className="-m-6 p-1">
            <span className="sr-only">Canaima</span>
            <img
              className="h-30 w-40 rounded-full"
              src={LogoC}
            />
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Nosotros</span>
              <img
                className="h-12 w-auto"
                src="https://scontent.fmad22-1.fna.fbcdn.net/v/t39.30808-6/302154806_580306793530649_3335504125470527494_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=TtMt3LFc1mgAX-EiyL3&_nc_ht=scontent.fmad22-1.fna&oh=00_AfC5VrBB0asNvvVStJShAijgFTM-aZKPrehUe3J0wkHGrg&oe=659535F8"
                alt="tequetapas"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Productos
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...Productos, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                <Link
                  to="/Productos"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"

                >
                </Link>
                Home

                <Link
                  to="/nosotros"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Nosotros
                </Link>
                <Link
                  to="/registro"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Registrate
                </Link>
              </div>
              <Link
                to="/envios"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Envios
              </Link>
              <Link
                to="/metodos"
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Metodos de Pago
              </Link>

              <div className="py-6">
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 "
                >
                  Login
                </Link>
              </div>

            </div>

          </div>





        </Dialog.Panel>
      </Dialog>
    </header>
  );
}