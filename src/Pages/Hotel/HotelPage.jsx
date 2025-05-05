import React, { useState, useMemo } from "react";
import {
  FiSearch,
  FiMapPin,
  FiCalendar,
  FiFilter,
  FiStar,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

const HotelPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState({ min: 12400, max: 25130 });
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sortBy, setSortBy] = useState("recommended");
  const [currentPage, setCurrentPage] = useState(1);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const packagesPerPage = 5;

  const packages = [
    {
      id: 1,
      title: "Explore the Heart of Thailand - Bangkok 3-Day Corporate Getaway",
      location: "Bangkok, Thailand",
      duration: 3,
      price: 13100,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80",
      rating: 4.5,
      reviews: 128,
      amenities: ["Free WiFi", "Breakfast", "Pool", "Gym"],
      destination: "Bangkok",
    },
    {
      id: 2,
      title: "Explore Bangkok–Pattaya in 4 Days",
      location: "Bangkok - Pattaya, Thailand",
      duration: 4,
      price: 16800,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80",
      rating: 4.8,
      reviews: 215,
      amenities: ["Spa", "Restaurant", "Beach Access", "Airport Transfer"],
      destination: "Pattaya",
    },
    {
      id: 3,
      title: "Explore Bangkok & Pattaya in 5 Days",
      location: "Bangkok - Pattaya, Thailand",
      duration: 5,
      price: 24000,
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80",
      rating: 4.3,
      reviews: 92,
      amenities: ["Free WiFi", "Breakfast", "City View", "24/7 Front Desk"],
      destination: "Pattaya",
    },
    {
      id: 4,
      title:
        "Thailand Delight: Exploring Bangkok–Phuket with Navigator Tourism",
      location: "Bangkok - Phuket, Thailand",
      duration: 6,
      price: 25130,
      image:
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80",
      rating: 4.9,
      reviews: 312,
      amenities: [
        "Private Beach",
        "All Inclusive",
        "Luxury Spa",
        "Free Shuttle",
      ],
      destination: "Phuket",
    },
    {
      id: 5,
      title: "Luxury Retreat in Chiang Mai",
      location: "Chiang Mai, Thailand",
      duration: 4,
      price: 18900,
      image:
        "https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80",
      rating: 4.7,
      reviews: 156,
      amenities: [
        "Mountain View",
        "Yoga Classes",
        "Organic Restaurant",
        "Free Bikes",
      ],
      destination: "Chiang Mai",
    },
    {
      id: 6,
      title: "Beachfront Paradise in Krabi",
      location: "Krabi, Thailand",
      duration: 5,
      price: 22500,
      image:
        "https://images.unsplash.com/photo-1528214133056-4f3d0ab0de7a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80",
      rating: 4.9,
      reviews: 278,
      amenities: ["Private Beach", "Infinity Pool", "Spa", "Water Sports"],
      destination: "Krabi",
    },
    {
      id: 7,
      title: "Premium Bangkok Experience",
      location: "Bangkok, Thailand",
      duration: 3,
      price: 14500,
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80",
      rating: 4.6,
      reviews: 187,
      amenities: ["City View", "Rooftop Bar", "Spa", "Concierge"],
      destination: "Bangkok",
    },
  ];

  const filteredPackages = useMemo(() => {
    return packages
      .filter((pkg) => {
        const matchesSearch =
          pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          pkg.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesPrice =
          pkg.price >= priceRange.min && pkg.price <= priceRange.max;
        const matchesDuration =
          selectedDurations.length === 0 ||
          selectedDurations.includes(pkg.duration);
        const matchesAmenities =
          selectedAmenities.length === 0 ||
          selectedAmenities.every((amenity) => pkg.amenities.includes(amenity));
        return (
          matchesSearch && matchesPrice && matchesDuration && matchesAmenities
        );
      })
      .sort((a, b) => {
        switch (sortBy) {
          case "priceAsc":
            return a.price - b.price;
          case "priceDesc":
            return b.price - a.price;
          case "rating":
            return b.rating - a.rating;
          default:
            return 0;
        }
      });
  }, [searchTerm, priceRange, selectedDurations, selectedAmenities, sortBy]);

  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = filteredPackages.slice(
    indexOfFirstPackage,
    indexOfLastPackage
  );
  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);

  const formatPrice = (price) => `BDT ${price.toLocaleString("en-IN")}`;

  const handlePriceChange = (e) =>
    setPriceRange((prev) => ({ ...prev, max: parseInt(e.target.value) }));
  const handleDurationToggle = (duration) =>
    setSelectedDurations((prev) =>
      prev.includes(duration)
        ? prev.filter((d) => d !== duration)
        : [...prev, duration]
    );
  const handleAmenityToggle = (amenity) =>
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );

  const resetFilters = () => {
    setSearchTerm("");
    setPriceRange({ min: 12400, max: 25130 });
    setSelectedDurations([]);
    setSelectedAmenities([]);
    setSortBy("recommended");
    setCurrentPage(1);
  };

  return (
    <div className="bg-gray-200 min-h-screen py-4 md:py-8">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 md:mb-8">
          <div className="p-4 md:p-8 bg-gradient-to-r from-[#3590CF] to-teal-500 text-white">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2">
              Thailand Hotel Packages
            </h1>
            <p className="text-teal-100 text-sm md:text-base">
              Discover the perfect stay for your next adventure in Thailand
            </p>
          </div>
        </div>

        <div className="lg:hidden flex justify-between items-center mb-4">
          <h2 className="text-base md:text-lg font-semibold text-gray-800">
            {filteredPackages.length} Properties Found
          </h2>
          <button
            className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            onClick={() => setShowMobileFilters(true)}
          >
            <FiFilter size={14} /> Filters
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div
            className={`hidden lg:block w-full lg:w-1/4 ${
              showMobileFilters ? "!block" : ""
            }`}
          >
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm sticky top-24">
              <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <FiFilter className="text-[#3590CF]" /> Filters
                </h3>
                <button
                  onClick={resetFilters}
                  className="text-xs md:text-sm text-[#3590CF] hover:text-[#2a7cb3] px-3 py-2 cursor-pointer rounded hover:bg-teal-50 transition-colors"
                >
                  Reset All
                </button>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiSearch className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Hotel or destination"
                      className="pl-10 w-full border border-gray-300 rounded-lg p-2 text-xs crd md:text-sm focus:ring-2 focus:ring-[#3590CF] focus:border-[#2a7cb3]"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Price Range
                  </label>
                  <div className="flex justify-between text-xs text-gray-500 mb-1 md:mb-2">
                    <span>BDT 12,400</span>
                    <span>{formatPrice(priceRange.max)}</span>
                  </div>
                  <input
                    type="range"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3590CF]"
                    min="12400"
                    max="25130"
                    value={priceRange.max}
                    onChange={handlePriceChange}
                  />
                  <div className="flex justify-between mt-2 md:mt-4">
                    <div className="border rounded-lg p-1 md:p-2 text-xs md:text-sm w-16 md:w-20 text-center crd border-gray-400">
                      12.4k
                    </div>
                    <div className="border rounded-lg p-1 md:p-2 text-xs md:text-sm w-16 md:w-20 text-center crd border-gray-400">
                      {Math.round(priceRange.max / 1000)}k
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1 md:mb-2">
                    <label className="block text-xs md:text-sm font-medium text-gray-700">
                      Duration (Days)
                    </label>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {[3, 4, 5, 6].map((day) => (
                      <button
                        key={day}
                        onClick={() => handleDurationToggle(day)}
                        className={`border rounded-lg p-1 md:p-2 text-xs md:text-sm transition-all ${
                          selectedDurations.includes(day)
                            ? "bg-teal-50 border-[#3590CF] text-[#3590CF]"
                            : "hover:bg-gray-50 text-gray-400 border-gray-400"
                        }`}
                      >
                        {day} Days
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1 md:mb-2">
                    Amenities
                  </label>
                  <div className="space-y-1 md:space-y-2">
                    {[
                      "Free WiFi",
                      "Breakfast",
                      "Pool",
                      "Spa",
                      "Gym",
                      "Beach Access",
                    ].map((amenity) => (
                      <label
                        key={amenity}
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          id={amenity}
                          checked={selectedAmenities.includes(amenity)}
                          onChange={() => handleAmenityToggle(amenity)}
                          className="checkbox checkbox-neutral checkbox-sm"
                        />
                        <label
                          htmlFor={amenity}
                          className="ml-2 text-xs md:text-sm text-gray-700"
                        >
                          {amenity}
                        </label>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="hidden lg:flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-4 py-2 px-4 rounded-xl bg-white">
              <h2 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800">
                {filteredPackages.length} properties found in Thailand
              </h2>
              <div className="flex items-center">
                <label className="text-xs md:text-sm text-gray-600 mr-2">
                  Sort by:
                </label>
                <select
                  className="border rounded-lg p-2 text-xs md:text-sm crd focus:ring-2 focus:ring-[#3590CF] focus:border-[#2a7cb3]"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="recommended">Recommended</option>
                  <option value="priceAsc">Price (Low to High)</option>
                  <option value="priceDesc">Price (High to Low)</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            {currentPackages.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 md:gap-6">
                {currentPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex flex-col md:flex-row h-full">
                      <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                      </div>
                      <div className="p-4 md:p-6 md:w-2/3 flex flex-col">
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-1">
                              {pkg.title}
                            </h3>
                            <div className="flex items-center bg-white bg-opacity-90 px-2 py-1 rounded">
                              <FiStar className="text-yellow-500 mr-1" />
                              <span className="font-medium text-gray-800">
                                {pkg.rating}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center text-gray-600 text-xs md:text-sm mt-1 md:mt-2 mb-2 md:mb-3">
                            <FiMapPin className="mr-1" />
                            <span>{pkg.location}</span>
                          </div>
                          <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-4">
                            {pkg.amenities.map((amenity, i) => (
                              <span
                                key={i}
                                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center text-xs md:text-sm text-gray-500">
                            <FiCalendar className="mr-1" />
                            <span className="mr-2 md:mr-4">
                              {pkg.duration} Days {pkg.duration - 1} Nights
                            </span>
                            <span className="text-gray-400">
                              {pkg.reviews} reviews
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 md:mt-4 pt-3 md:pt-4 border-t gap-2 md:gap-4">
                          <div>
                            <p className="text-gray-500 text-xs md:text-sm">
                              Starting from
                            </p>
                            <p className="text-xl md:text-2xl font-bold text-[#3590CF]">
                              {formatPrice(pkg.price)}
                            </p>
                            <p className="text-gray-500 text-xs">
                              per person, tax included
                            </p>
                          </div>
                          <button className="bg-[#3590CF] hover:bg-[#2a7cb3] text-white px-4 md:px-6 py-1 md:py-2 cursor-pointer rounded-lg font-medium transition-colors duration-300 w-full sm:w-auto text-sm md:text-base">
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 text-center">
                <p className="text-gray-500 text-sm md:text-base">
                  No packages found matching your criteria. Try adjusting your
                  filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="mt-3 md:mt-4 bg-[#3590CF] hover:bg-[#2a7cb3] text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 text-sm md:text-base"
                >
                  Reset Filters
                </button>
              </div>
            )}

            {totalPages > 1 && (
              <div className="flex justify-center mt-6 md:mt-8">
                <nav className="flex items-center space-x-1 md:space-x-2">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(1, prev - 1))
                    }
                    disabled={currentPage === 1}
                    className="px-2 md:px-3 py-1 cursor-pointer rounded border text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center text-xs md:text-sm"
                  >
                    <FiChevronLeft className="mr-1" /> Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`px-2 md:px-3 py-1 rounded text-xs md:text-sm cursor-pointer ${
                        currentPage === i + 1
                          ? "bg-[#3590CF] text-white border-[#3590CF]"
                          : "border text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="cursor-pointer px-2 md:px-3 py-1 rounded border text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center text-xs md:text-sm"
                  >
                    Next <FiChevronRight className="ml-1" />
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {showMobileFilters && (
        <div className="fixed inset-0 bg-black/60 z-50 lg:hidden flex items-center justify-center p-4">
          <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <button
                onClick={resetFilters}
                className="text-sm text-[#3590CF] hover:text-[#2a7cb3] px-3 py-1 rounded hover:bg-teal-50 transition-colors"
              >
                Reset All
              </button>
              <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="text-gray-500 hover:text-gray-700 p-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 md:p-6 space-y-4 md:space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Hotel or destination"
                    className="pl-10 w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 csd focus:ring-[#3590CF] focus:border-[#2a7cb3]"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>BDT 12,400</span>
                  <span>{formatPrice(priceRange.max)}</span>
                </div>
                <input
                  type="range"
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#3590CF]"
                  min="12400"
                  max="25130"
                  value={priceRange.max}
                  onChange={handlePriceChange}
                />
                <div className="flex justify-between mt-4">
                  <div className="border rounded-lg p-2 text-sm w-20 text-center border-gray-400">
                    12.4k
                  </div>
                  <div className="border rounded-lg p-2 text-sm w-20 text-center border-gray-400">
                    {Math.round(priceRange.max / 1000)}k
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Duration (Days)
                  </label>
                  <button
                    onClick={() => setSelectedDurations([])}
                    className="text-xs text-[#3590CF] hover:text-[#2a7cb3] px-2 py-1 rounded hover:bg-teal-50 transition-colors"
                  >
                    Reset
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[3, 4, 5, 6].map((day) => (
                    <button
                      key={day}
                      onClick={() => handleDurationToggle(day)}
                      className={`border rounded-lg p-2 text-sm transition-all ${
                        selectedDurations.includes(day)
                          ? "bg-teal-50 border-[#3590CF] text-[#2a7cb3]"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {day} Days
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amenities
                </label>
                <div className="space-y-2">
                  {[
                    "Free WiFi",
                    "Breakfast",
                    "Pool",
                    "Spa",
                    "Gym",
                    "Beach Access",
                  ].map((amenity) => (
                    <div key={amenity} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`mobile-${amenity}`}
                        checked={selectedAmenities.includes(amenity)}
                        onChange={() => handleAmenityToggle(amenity)}
                        className="h-4 w-4 text-[#3590CF] focus:ring-[#3590CF] border-gray-300 rounded"
                      />
                      <label
                        htmlFor={`mobile-${amenity}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {amenity}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white p-4 border-t">
              <button
                onClick={() => setShowMobileFilters(false)}
                className="w-full bg-[#3590CF] hover:bg-[#2a7cb3] text-white py-3 rounded-lg font-medium transition-colors duration-300"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelPage;
