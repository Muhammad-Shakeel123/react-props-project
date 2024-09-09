import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Images() {
  const [selectedImage, setSelectedImage] = useState(null);

  const imageList = [
    'https://img.freepik.com/premium-photo/shah-faisal-mosque-largest-mosque-world_969415-17.jpg?uid=R130686810&ga=GA1.2.1824573526.1723610953&semt=ais_hybrid',
    'https://img.freepik.com/free-photo/breathtaking-landscape-buildings_23-2148347691.jpg?uid=R130686810&ga=GA1.1.1824573526.1723610953&semt=ais_hybrid',
    'https://img.freepik.com/premium-photo/islamabad-city-pakistan-wide-shot-beautiful-clear-sky_1061150-54070.jpg?uid=R130686810&ga=GA1.1.1824573526.1723610953&semt=ais_hybrid',
    'https://img.freepik.com/premium-photo/historic-lahore-resolution-monument-illuminated-night-symbolizing-countrys-journey_1022944-11189.jpg?uid=R130686810&ga=GA1.1.1824573526.1723610953&semt=ais_hybrid',
    'https://img.freepik.com/premium-photo/building-with-large-white-structure-with-blue-sky-it_1286286-961.jpg?uid=R130686810&ga=GA1.1.1824573526.1723610953&semt=ais_hybrid',
    'https://img.freepik.com/premium-photo/islamabad-city-pakistan-wide-shot-beautiful-clear-sky_1061150-53414.jpg?uid=R130686810&ga=GA1.1.1824573526.1723610953&semt=ais_hybrid',
  ];

  // Function to open the full-screen view of the image
  const openImage = image => {
    setSelectedImage(image); // Set the clicked image to display in full-screen
  };

  // Function to close the full-screen view and return to the image gallery
  const closeImage = () => {
    setSelectedImage(null); // Reset selectedImage to null to close full-screen view
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Beautiful Image Gallery
      </h1>

      {/* Image gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
        {imageList.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openImage(image)} // Open image on click
          >
            <img
              src={image}
              alt={`Building ${index + 1}`}
              className="w-full h-64 object-cover transition-opacity duration-300 hover:opacity-80"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent p-4 text-white"></div>
          </div>
        ))}
      </div>

      <Link
        to="/back-to-home"
        className="mt-10 inline-block px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-full hover:bg-blue-500 transition-all duration-300 shadow-lg"
      >
        ← Back to Home
      </Link>

      {/* Full-screen Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full rounded-xl shadow-lg"
            />
            <button
              onClick={closeImage} // Trigger closeImage to exit full-screen view
              className="absolute top-5 right-5 text-white text-2xl font-bold bg-red-600 rounded-full p-2 shadow-lg hover:bg-red-500 transition-all duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Images;
