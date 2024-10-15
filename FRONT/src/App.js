import React from 'react';
import Header from './components/header/header.tsx';
import SeriesForm from './components/index/seriesForm.tsx';
import Login from './components/login/login.tsx';
import Register from './components/register/register.tsx';


export default function App() {
  return (
    <div className="min-h-screen bg-pink-100">
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SeriesForm />
          <div>
            <h2 className="text-2xl font-bold text-pink-700 mb-4">My list of Series</h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((item) => (
                <div key={item} className="bg-pink-400 p-4 rounded-lg">
                  <h3 className="font-bold text-white">Title</h3>
                  <p className="text-pink-100 text-sm">Description</p>
                  <div className="flex mt-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}