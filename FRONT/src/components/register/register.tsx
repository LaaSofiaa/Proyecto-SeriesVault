import React from 'react'
import { Mail, Lock, User } from 'lucide-react' 
import './register.css';

// Componente de registro para la aplicación SeriesVault
export default function Register() {
  return (
    <div className="min-h-screen bg-pink-100 flex">
      {/* Contenedor principal con espacio para el formulario */}
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-pink-700">
              Create your SeriesVault account
            </h2>
          </div>

          {/* Formulario de registro */}
          <div className="mt-8">
            <form action="#" method="POST" className="space-y-6">
              {/* Campo de nombre completo */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-pink-700">
                  Full Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-pink-500" aria-hidden="true" />
                  </div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="input-field"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Campo de nombre de usuario */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-pink-700">
                  Username
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-pink-500" aria-hidden="true" />
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="input-field"
                    placeholder="johndoe"
                  />
                </div>
              </div>

              {/* Campo de correo electrónico */}
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
                    className="input-field"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Campo de contraseña */}
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
                    autoComplete="new-password"
                    required
                    className="input-field"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              {/* Botón de registro */}
              <div>
                <button
                  type="submit"
                  className="button"
                >
                  Sign up
                </button>
              </div>
            </form>

            {/* Enlace para iniciar sesión si ya tiene una cuenta */}
            <div className="mt-6">
              <p className="mt-2 text-center text-sm text-pink-600">
                Already have an account?{' '}
                <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Imagen lateral para pantallas grandes */}
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Movie theater"
        />
      </div>
    </div>
  )
}
