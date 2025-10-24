import { useLocation } from 'react-router-dom';

export default function ImageDetails() {
  const location = useLocation();
  const { image } = location.state || {};

  if (!image) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">No image data available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Details Section */}
      <div className="w-full md:w-1/2 bg-gray-100 p-8 flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{image.title}</h1>
        <p className="text-gray-600 text-lg">{image.description || 'No description available.'}</p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
        <img
          src={image.src}
          alt={image.title}
          className="max-w-full max-h-screen object-contain"
        />
      </div>
    </div>
  );
}