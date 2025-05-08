import React, { useState, useEffect } from "react";
import Tour from "../../Components/Tour";

const tours = [
  {
    id: 1,
    title: "Explore the Heart of Thailand - Bangkok 3-Day Corporate Getaway",
    destination: "Bangkok - Thailand",
    duration: "3 Days 2 Nights",
    price: 13100,
    rating: 4.7,
    reviews: 128,
    imageUrl: "https://navigatortourism.com:3000/1ba77fb8c05c9bb3214cc51bc56e2d61.jpg",
  },
  {
    id: 2,
    title: "Explore Bangkok-Pattaya in 4 Days",
    destination: "Bangkok - Pattaya - Thailand",
    duration: "4 Days 3 Nights",
    price: 16900,
    rating: 4.5,
    reviews: 95,
    imageUrl: "https://navigatortourism.com:3000/f82a42ed84d238edc80c3b0d1f78d941.jpg",
  },
  {
    id: 3,
    title: "Explore Bangkok & Pattaya in 5 Days",
    destination: "Thailand - Bangkok - Pattaya",
    duration: "5 Days 4 Nights",
    price: 24000,
    rating: 4.9,
    reviews: 201,
    imageUrl: "https://navigatortourism.com:3000/3c75ad8f62cd7511728ff4c793dfef94.jpg",
  },
  {
    id: 4,
    title: "Thailand Delight: Exploring the Wonders of Bangkok-Phuket with Navigator Tourism",
    destination: "Bangkok - Phuket- Phi Phi Island - Thailand",
    duration: "5 Days 4 Nights",
    price: 25130,
    rating: 4.9,
    reviews: 210,
    imageUrl: "https://navigatortourism.com:3000/9fc904d854f761d6e5577bfb60ed1fac.jpg",
  },
];

const Sidebar = ({ onFilter }) => {
  const [destination, setDestination] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(25130);

  const handleReset = () => {
    setDestination("");
    setMinPrice(0);
    setMaxPrice(25130);
    onFilter({ destination: "", minPrice: 0, maxPrice: Infinity });
  };

  const handleMinPriceChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setMinPrice(value);
    onFilter({ destination, minPrice: value, maxPrice });
  };

  const handleMaxPriceChange = (e) => {
    const value = parseInt(e.target.value) || 25130;
    setMaxPrice(value);
    onFilter({ destination, minPrice, maxPrice: value });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg sticky top-6 h-fit">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Filters</h2>
      <button
        onClick={handleReset}
        className="w-full bg-[#3590CF] hover:bg-[#2a7cb3] text-white py-2 px-4 rounded transition mb-6 text-lg"
      >
        Reset Filters
      </button>

      <div className="mb-6">
        <label htmlFor="destination" className="block text-lg text-gray-700 font-medium mb-2">
          Destination
        </label>
        <input
          type="text"
          id="destination"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            onFilter({
              destination: e.target.value,
              minPrice,
              maxPrice,
            });
          }}
          placeholder="Enter destination"
          className="border border-gray-300 rounded w-full p-3 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
        />
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700 mb-2">
          Price Range
        </label>
        <div className="flex justify-between text-gray-500 mb-2">
          <span className="text-base">BDT 12,400</span>
          <span className="text-base">{maxPrice.toLocaleString()}</span>
        </div>
        <input
          type="range"
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3590CF]"
          min="12400"
          max="25130"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
        <div className="flex justify-between mt-4">
          <div className="border rounded-lg p-2 text-base w-20 text-center border-gray-400">
            12.4k
          </div>
          <div className="border rounded-lg p-2 text-base w-20 text-center border-gray-400">
            {Math.round(maxPrice / 1000)}k
          </div>
        </div>
      </div>
    </div>
  );
};

const TourCard = ({ tour }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
    <div className="relative h-64 w-full overflow-hidden">
      <img
        src={tour.imageUrl}
        alt={tour.title}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">{tour.title}</h3>
        <p className="text-lg text-gray-600 mb-2">{tour.destination}</p>
        <p className="text-lg text-gray-600 mb-4">{tour.duration}</p>
        <div className="flex items-center mb-4">
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded text-base font-semibold flex items-center">
            ★ {tour.rating} ({tour.reviews} reviews)
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
        <span className="text-xl font-bold text-[#3590CF]">BDT {tour.price.toLocaleString()}</span>
        <button className="bg-[#3590CF] hover:bg-[#2a7cb3] text-white px-6 py-2 rounded-lg transition text-lg">
          Book Now
        </button>
      </div>
    </div>
  </div>
);

const TourList = ({ tours }) => (
  <div className="grid grid-cols-1 gap-8">
    {tours.map((tour) => (
      <TourCard key={tour.id} tour={tour} />
    ))}
  </div>
);

const TourPage = () => {
  const [filteredTours, setFilteredTours] = useState(tours);
  const [sortOption, setSortOption] = useState("popularity");

  const applyFilters = ({ destination, minPrice, maxPrice }) => {
    let result = [...tours];

    if (destination.trim()) {
      result = result.filter((tour) =>
        tour.destination.toLowerCase().includes(destination.toLowerCase())
      );
    }

    if (minPrice !== undefined && maxPrice !== undefined) {
      result = result.filter((tour) => tour.price >= minPrice && tour.price <= maxPrice);
    }

    setFilteredTours(result);
  };

  useEffect(() => {
    let sortedTours = [...filteredTours];

    switch (sortOption) {
      case "price-low-to-high":
        sortedTours.sort((a, b) => a.price - b.price);
        break;
      case "price-high-to-low":
        sortedTours.sort((a, b) => b.price - a.price);
        break;
      case "rating-high-to-low":
        sortedTours.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    setFilteredTours(sortedTours);
  }, [sortOption, filteredTours]);

  return (
    <div className="bg-gray-100 min-h-screen py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-14">
          <div className="bg-white pt-6 py-10 px-6 rounded-xl">
            <Tour />
          </div>

          <main className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/3">
                <Sidebar onFilter={applyFilters} />
              </div>
              <div className="w-full lg:w-2/3">
                <div className="flex justify-between items-center mb-6 bg-white p-6 rounded-xl">
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                    Showing{" "}
                    <span className="text-[#3590CF]">{filteredTours.length}</span>{" "}
                    Tours
                  </h2>
                </div>
                <TourList tours={filteredTours} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TourPage;