export default function HomePage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-50 to-yellow-50 p-10">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl w-full text-center md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-5xl font-extrabold text-red-700 mb-4">Welcome to Foodie</h1>
            <p className="text-lg text-gray-800 leading-relaxed">
              Experience the best flavors crafted with passion and served with love. 
              Our chefs use the freshest ingredients to bring you an unforgettable dining experience.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&q=80" 
              alt="Delicious Food" 
              className="rounded-2xl shadow-xl w-full max-w-md h-auto border-4 border-red-200"
            />
          </div>
        </div>
      </div>
    );
  }
  