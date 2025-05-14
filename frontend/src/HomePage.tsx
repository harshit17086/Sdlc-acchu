import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Welcome to Our Website</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim.
          </p>
          
          <p className="text-gray-700 mb-4">
            Suspendisse in orci enim. Donec sed ligula in justo tempor aliquet. Integer posuere feugiat elit nec facilisis. Pellentesque at magna sit amet turpis feugiat ullamcorper. Aliquam at lectus erat, quis laoreet enim.
          </p>
          
          <p className="text-gray-700 mb-4">
            Nullam eu convallis tortor. Suspendisse potenti. Fusce interdum diam non felis convallis sed viverra turpis adipiscing. Mauris in nulla at ligula dignissim bibendum. Pellentesque eget metus ligula. Curabitur vitae nulla erat.
          </p>
          
          <p className="text-gray-700">
            Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;