import {Link} from 'react-router-dom'
import logoHeader from '../Images/LOGO2.png'
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";





const Header = () => {
  return (
    <header className='bg-orange-400 flex items-center w-full p-2'>
      <div className="flex items-center justify-between gap-4 p-8">
        <img
          className="w-20 bg-white rounded-full"
          src={logoHeader}
          alt="logoHeader"
        />
      </div>

      <nav className='flex-1 flex items-center gap-8 justify-center'>
        <Link to='/' className="text-2xl font-bold text-black-400 rounded-2xl p-2 text-white">Home</Link>
        <Link to='/nosotros' className="text-2xl font-bold text-black-400 rounded-2xl p-2 text-white">Nosotros</Link>
        <Link to='/recetario' className="text-2xl font-bold text-black-400 rounded-2xl p-2 text-white">Recetario</Link>
        <Link to="/productos" className="text-2xl font-bold text-black-400 rounded-2xl p-2 text-white">Productos</Link>
        <Link to='/ubicacion' className="text-2xl font-bold text-black-400 rounded-2xl p-2 text-white">Visitanos</Link>
        <a href="#" className="text-3xl font-extrabold leading-6 text-black-400 rounded-3xl p-2 text-white "><FiShoppingCart /></a>
        <div className="flex items-center">
          <input className='border-2 border-black rounded-md p-2' type="text" placeholder="Buscar productos" />
          <a href="#" className="text-3xl font-extrabold leading-6 text-black-400 rounded-3xl p-2 text-white "><FaSearch /></a>
        </div>
      </nav>
    </header>
  );
}

export default Header