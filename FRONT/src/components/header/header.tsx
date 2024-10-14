import React from 'react';

export default function Header() {
  return (
    <header className="bg-pink-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          
          {/* Contenedor del logo y título */}
          <div className="flex items-center">
            {/* Contenedor del ícono con fondo rosado */}
            <div className="bg-pink-500 p-2 rounded-lg mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" 
                />
              </svg>
            </div>
            {/* Título de la página */}
            <h1 className="text-2xl font-bold text-pink-700">SeriesVault</h1>
          </div>

          {/* Menú de navegación */}
          <nav>
            <ul className="flex space-x-4">
              {/* Enlaces del menú */}
              <li>
                <a href="#" className="text-pink-700 hover:text-pink-500">Home</a>
              </li>
              <li>
                <a href="#" className="text-pink-700 hover:text-pink-500">My Series</a>
              </li>
              <li>
                <a href="#" className="text-pink-700 hover:text-pink-500">Add New</a>
              </li>
            </ul>
          </nav>

          {/* Botón de cuenta */}
          <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">
            Account
          </button>
        </div>
      </div>
    </header>
  );
}
