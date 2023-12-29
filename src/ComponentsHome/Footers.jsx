import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookSquare, faYoutube, faGithub, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';

const Footers = () => {
  return (
    <footer className="relative bg-blueGray-500 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700 text-black">¡Sabores con origen! </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600 text-black">
            🏭𝗧𝗲𝗾𝘂𝗲𝗧𝗮𝗽𝗮𝘀 - Fábrica de tequeños y productos venezolanos.
            </h5>
            <a href="https://twitter.com/search?q=Tequetapas&src=typed_query" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <FontAwesomeIcon icon={faTwitter} />
            </button>
            </a>
            <a href="https://www.facebook.com/Tequetapasgroup" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </button>
            </a>
            <a href="https://www.youtube.com/@tequetapas4786" target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
              <FontAwesomeIcon icon={faYoutube} />
            </button>
            </a>
            <a href="https://github.com/gustavoflorez20" target="_blank" rel="noopener noreferrer">
  <button className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2" type="button">
    <FontAwesomeIcon icon={faGithub} />
  </button>
</a>

            #TequeñosEnEspaña #TequeTapas
          </div>
          <div className="w-full lg:w-6/12 px-4">
            {/* ... (resto de tu código) ... */}
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1 text-black">
              Copyright © <span id="get-current-year">2024</span>
              <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank" rel="noopener noreferrer"> Madrid</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
