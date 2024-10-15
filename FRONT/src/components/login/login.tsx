import React from 'react';
import { Mail, Lock } from 'lucide-react';

// Componente Login
export default function Login() {
  return (
    <div className="min-h-screen bg-pink-100 flex">
      {/* Contenedor principal que ocupa toda la altura de la pantalla y tiene un fondo rosa claro */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        {/* Contenedor del formulario de inicio de sesión */}
        <div className="mx-auto w-full max-w-sm lg:w-96">
          {/* Título del formulario */}
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-pink-700">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-8">
            {/* Formulario de inicio de sesión */}
            <form action="#" method="POST" className="space-y-6">
              {/* Campo de entrada para el correo electrónico */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-pink-700">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-pink-500" aria-hidden="true" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 py-3 text-base border-pink-300 rounded-md"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Campo de entrada para la contraseña */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-pink-700">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-pink-500" aria-hidden="true" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="focus:ring-pink-500 focus:border-pink-500 block w-full pl-10 py-3 text-base border-pink-300 rounded-md"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Opciones de "Recordarme" y "Olvidé mi contraseña" */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-pink-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-pink-900">
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              {/* Botón de inicio de sesión */}
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            {/* Enlace para registrarse si no tiene cuenta */}
            <div className="mt-6">
              <p className="mt-2 text-center text-sm text-pink-600">
                Don't have an account?{' '}
                <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Imagen decorativa a la derecha en pantallas grandes */}
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
          alt="TV series"
        />
      </div>
    </div>
  );
}
