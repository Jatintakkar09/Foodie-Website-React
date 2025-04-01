import Chef from '../../assets/chef.jpg';

export default function AboutRestaurant() {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-red-50 to-yellow-50 p-16">
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-6xl font-bold text-red-700 mb-6">About Us</h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              At <span className="font-semibold text-red-600">Foodie</span>, we take pride in serving the finest cuisines made
              with love and the freshest ingredients. Our mission is to provide an
              exceptional dining experience that delights your taste buds.
            </p>
            <p className="text-xl text-gray-700 mt-4 leading-relaxed">
              Whether you're here for a casual meal or a special occasion, our warm
              ambiance and mouth-watering dishes will make your visit memorable. Join
              us and indulge in flavors that tell a story of passion and excellence.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80" 
              alt="Restaurant Interior" 
              className="rounded-2xl shadow-xl w-full max-w-2xl h-auto border-4 border-red-200"
            />
          </div>
        </div>
        
        <div className="w-full max-w-6xl mt-16">
          <h2 className="text-4xl font-bold text-red-700 mb-6 text-center">Our Story</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center">
            Established in 1995, Foodie started as a small family-run restaurant with a vision
            to bring authentic flavors to the community. Over the years, we have grown into a
            beloved dining destination known for our exceptional service and innovative dishes.
          </p>
        </div>
  
        <div className="w-full max-w-6xl mt-16">
          <h2 className="text-4xl font-bold text-red-700 mb-6 text-center">Meet Our Chef</h2>
          <div className="flex flex-col md:flex-row items-center">
            <img 
              src={Chef} 
              alt="Chef" 
              className="rounded-full shadow-xl w-48 h-48 md:w-64 md:h-64 border-4 border-red-200 mb-6 md:mb-0 md:mr-6"
            />
            <p className="text-xl text-gray-700 leading-relaxed text-center md:text-left">
              Our head chef, with over 20 years of culinary experience, crafts every dish
              with passion and expertise. From classic recipes to modern twists, every plate
              served is a masterpiece.
            </p>
          </div>
        </div>
      </div>
    );
  }
  