import React, { useState } from 'react';
import './seriesForm.css';

export default function SeriesForm() {
  // Definimos el estado 'rating' con el tipo 'number', que representará el puntaje de la serie
  const [rating, setRating] = useState<number>(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <form className="space-y-4">
        
        {/* Campo para el título de la serie */}
        <div>
          <label htmlFor="title" className="block text-sm font-bold text-pink-700 mb-1">Title</label>
          {/* Input para el título, tiene un placeholder que sugiere el número máximo de caracteres */}
          <input 
            id="title" 
            type="text" 
            placeholder="Enter a title no more than 30 characters" 
            className="w-full p-2 border border-pink-300 rounded" 
          />
        </div>

        {/* Campo para la descripción de la serie */}
        <div>
          <label htmlFor="description" className="block text-sm font-bold text-pink-700 mb-1">Description</label>
          {/* Textarea para la descripción, también con un placeholder que limita el contenido */}
          <textarea 
            id="description" 
            placeholder="Enter a description no more than 50 characters" 
            className="w-full p-2 border border-pink-300 rounded" 
          />
        </div>

        {/* Sistema de rating con estrellas */}
        <div>
          <label className="block text-sm font-bold text-pink-700 mb-1">Rating</label>
          <div className="flex">
            {/* Recorremos un array con los números del 1 al 5 para mostrar 5 estrellas */}
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star} // Clave única para cada estrella
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 cursor-pointer ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                // Se actualiza el estado 'rating' al hacer clic en la estrella correspondiente
                onClick={() => setRating(star)}
              >
                {/* Forma de la estrella */}
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                />
              </svg>
            ))}
          </div>
        </div>

        {/* Cargar imagen para la serie */}
        <div>
          <label htmlFor="image" className="block text-sm font-bold text-pink-700 mb-1">Image</label>
          {/* Área de carga de archivos con un icono e instrucciones */}
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              {/* Ícono representando la carga de archivos */}
              <svg 
                className="mx-auto h-12 w-12 text-gray-400" 
                stroke="currentColor" 
                fill="none" 
                viewBox="0 0 48 48" 
                aria-hidden="true"
              >
                <path 
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                {/* Botón para cargar archivos */}
                <label 
                  htmlFor="file-upload" 
                  className="relative cursor-pointer bg-white rounded-md font-medium text-pink-600 hover:text-pink-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
                >
                  <span>Upload a file</span>
                  {/* Input que permite seleccionar un archivo (invisible visualmente) */}
                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              {/* Texto adicional sobre el tamaño máximo y formato permitido */}
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>

        {/* Campo para seleccionar la fecha */}
        <div>
          <label htmlFor="date" className="block text-sm font-bold text-pink-700 mb-1">Date</label>
          <div className="flex items-center">
            {/* Input de tipo fecha con estilos */}
            <input 
              type="date" 
              className="form-input py-2 px-3 block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300" 
            />
          </div>
        </div>

        {/* Botón para agregar la serie */}
        <div className="flex items-center justify-between">
          <button 
            type="submit" 
            className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
