import React from 'react';



const Footers = () => {
  return (
    <footer className="bg-blue-100/80 font-sans dark:bg-orange-500">
    <div className="container px-1 py-2 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white-800 xl:text-2xl dark:text-white"> 🏭𝗧𝗲𝗾𝘂𝗲𝗧𝗮𝗽𝗮𝘀  </h1>
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white-800 xl:text-2xl dark:text-white"> Fábrica de tequeños y productos venezolanos.  </h1>
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white-800 xl:text-2xl dark:text-white">  #TequeñosEnEspaña #TequeTapas</h1>

                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                   
                </div>
            </div>

            <div>
                <p className="font-semibold text-white-800 dark:text-white">Enlaces Rápidos</p>

                <div className="font-semibold text-white-800 dark:text-white">
                    <p className="text-white-600 transition-colors duration-300 dark:text-white-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Home <a href="/"></a></p>
                    <p className="text-white-600 transition-colors duration-300 dark:text-white-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Nosotros<a href="/nosotros"></a></p>
                    <p className="text-white-600 transition-colors duration-300 dark:text-white-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Recetas <a href="/resetas"></a></p>
                </div>
            </div>

            <div>
                <p className="font-semibold text-white-800 dark:text-white">Aliados </p>

                <div className="font-semibold text-white-800 dark:text-white">
                <p className="text-white-600 transition-colors duration-300 dark:text-white-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
  <a href="https://maps.app.goo.gl/GrdPTH92umv3cV6S8">Tienda Madrid</a>
</p>
<p className="text-white-600 transition-colors duration-300 dark:text-white-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
  <a href="https://maps.app.goo.gl/k22JtRVCQWWKsdMj7">Tienda Valencia</a>
</p>
<p className="text-white-600 transition-colors duration-300 dark:text-white-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
  <a href="https://maps.app.goo.gl/Chp9GByqV4FUW8dX7">Tienda Barcelona</a>
</p>
                </div>
            </div>
        </div>
        
       
        
        <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
                
            </div>
            
            <div className="flex gap-4 hover:cursor-pointer">
  <a href="https://www.facebook.com/Tequetapasgroup" target="_blank" rel="noopener noreferrer">
    <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
  </a>
  <a href="https://twitter.com/search?q=Tequetapas&src=typed_query" target="_blank" rel="noopener noreferrer">
    <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
  </a>
  <a href="https://www.instagram.com/tequetapasfoods/?hl=es" target="_blank" rel="noopener noreferrer">
    <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
  </a>
  
</div>
            
        </div>
        <p className="font-sans p-1 text-start md:text-center md:text-lg md:p-1 text-white">© 2024 Jogura Inc. Todos los Derechos Reservados.</p>
    </div>
</footer>
  );
};

export default Footers;
