import React from 'react';
import { Link } from 'react-router-dom';

function Card({ name, infoBtton, capital, population, oldName, images }) {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/premium-photo/historic-lahore-resolution-monument-illuminated-night-symbolizing-countrys-journey_1022944-11391.jpg?uid=R130686810&ga=GA1.2.1824573526.1723610953&semt=ais_hybrid"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Card Component */}
      <div className="relative z-10 h-[500px] w-[350px] rounded-3xl border-4 border-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[4px] shadow-2xl transition-transform duration-500 hover:scale-105 hover:shadow-3xl">
        <div className="h-full w-full rounded-3xl bg-white p-6 overflow-hidden">
          <img
            src="https://img.freepik.com/premium-photo/pakistan-monument-is-national-monument-heritage-museum-islamabad-pakistan_766101-521.jpg?uid=R130686810&ga=GA1.1.1824573526.1723610953&semt=ais_hybrid"
            alt="Islamabad Monument"
            className="z-0 h-[200px] w-full object-cover rounded-xl transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-90"></div>
          <div className="absolute bottom-6 left-6 text-left">
            <h1 className="text-3xl font-bold text-gray-900 drop-shadow-lg mb-2">
              {name}
            </h1>
            <h1 className="text-xl font-semibold text-gray-700 mb-1">
              Formerly: {oldName}
            </h1>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Capital: {capital}
            </p>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Population: {population}
            </p>
            <div className="mt-6 flex space-x-4">
              <Link
                to="/information"
                className="px-5 py-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transition duration-300 ease-in-out"
              >
                {infoBtton} →
              </Link>

              <Link
                to="/images"
                className="px-5 py-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-purple-800 transition duration-300 ease-in-out"
              >
                {images} →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
