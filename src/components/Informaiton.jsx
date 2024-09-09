import React from 'react';
import { Link } from 'react-router-dom';

function Informaiton() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gray-200">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/premium-photo/historic-lahore-resolution-monument-illuminated-night-symbolizing-countrys-journey_1022944-11283.jpg?uid=R130686810&ga=GA1.2.1824573526.1723610953&semt=ais_hybrid"
          alt="Islamabad background"
          className="object-cover w-full h-full opacity-60 transition-opacity duration-500 hover:opacity-70"
        />
      </div>

      {/* Information Box */}
      <div className="relative z-10 p-10 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl max-w-4xl text-gray-900 transform transition-transform duration-500 hover:scale-105">
        <h1 className="text-4xl font-extrabold text-center text-teal-700 mb-8">
          Islamabad - The Capital of Pakistan
        </h1>
        <p className="text-lg leading-relaxed tracking-wide">
          Islamabad, the capital of Pakistan, is located in the northern part of
          the country within the Islamabad Capital Territory. It replaced
          Karachi as the capital in 1963 due to its central location, climate,
          and expansion potential. Designed by the Greek architect Constantinos
          Apostolou Doxiadis, the city is a blend of modern infrastructure with
          residential, diplomatic, educational, and industrial sectors.
        </p>
        <ul className="mt-6 list-disc pl-8 space-y-4 text-gray-800 text-base">
          <li>
            <strong className="text-teal-700">Population:</strong> Estimated at
            1.2 million people.
          </li>
          <li>
            <strong className="text-teal-700">Landmarks:</strong> Faisal Mosque,
            Daman-e-Koh, Pakistan Monument, and Lok Virsa Museum.
          </li>
          <li>
            <strong className="text-teal-700">Climate:</strong> Islamabad enjoys
            a humid subtropical climate with distinct seasons.
          </li>
          <li>
            <strong className="text-teal-700">Significance:</strong> As the
            administrative hub, the city hosts embassies, government offices,
            and more.
          </li>
        </ul>

        {/* Back Button */}
        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="px-8 py-3 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-500 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:translate-y-1 hover:scale-105"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Informaiton;
