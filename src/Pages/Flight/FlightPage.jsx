import React, { useState, useMemo, memo } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiClock,
  FiFilter,
  FiRefreshCw,
  FiX,
} from "react-icons/fi";
import Flight from "../../Components/Flight";

// Constants
export const AIRLINE_MAP = {
  "Biman Bangladesh Airlines": "biman",
  "US-Bangla Airlines": "us-bangla",
};

// Flight Data (Moved outside component)
export const flightsData = [
  {
    id: 1,
    airline: "Biman Bangladesh Airlines",
    logo: "https://1000logos.net/wp-content/uploads/2023/05/Biman-Bangladesh-Airlines-Logo.png",
    departureTime: "11:45",
    arrivalTime: "13:00",
    duration: "1h 15m",
    stops: "Non-Stop",
    price: 5848,
    originalPrice: 6199,
    baggage: "20 kg",
    class: "Economy",
    refundable: "Partially Refundable",
    flightNumber: "BG 401",
    aircraft: "Boeing 737-800",
    meal: "Included",
  },
  {
    id: 2,
    airline: "US-Bangla Airlines",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmbTS0Ke1BYPm9zPFhzQ6fCAb3DjkDMqZ3uw&s",
    departureTime: "15:30",
    arrivalTime: "16:45",
    duration: "1h 15m",
    stops: "Non-Stop",
    price: 5848,
    originalPrice: 6199,
    baggage: "20 kg",
    class: "Economy",
    refundable: "Partially Refundable",
    flightNumber: "BS 211",
    aircraft: "Dash 8 Q400",
    meal: "Included",
  },
  {
    id: 3,
    airline: "Biman Bangladesh Airlines",
    logo: "https://1000logos.net/wp-content/uploads/2023/05/Biman-Bangladesh-Airlines-Logo.png",
    departureTime: "08:15",
    arrivalTime: "10:45",
    duration: "2h 30m",
    stops: "1 Stop (DAC)",
    price: 5120,
    originalPrice: 5500,
    baggage: "20 kg",
    class: "Economy",
    refundable: "Fully Refundable",
    flightNumber: "BG 203",
    aircraft: "Boeing 787-8",
    meal: "Included",
  },
  {
    id: 4,
    airline: "Novoair",
    logo: "https://www.novoair.com/assets/images/logo.png",
    departureTime: "09:30",
    arrivalTime: "10:45",
    duration: "1h 15m",
    stops: "Non-Stop",
    price: 6245,
    originalPrice: 6540,
    baggage: "20 kg",
    class: "Economy",
    refundable: "Partially Refundable",
    flightNumber: "VQ 903",
    aircraft: "ATR 72-600",
    meal: "Not Included",
  },
  {
    id: 5,
    airline: "Air Astra",
    logo: "https://www.airastra.com/wp-content/uploads/2022/11/air-astra-logo.png",
    departureTime: "14:20",
    arrivalTime: "15:35",
    duration: "1h 15m",
    stops: "Non-Stop",
    price: 5980,
    originalPrice: 6300,
    baggage: "20 kg",
    class: "Economy",
    refundable: "Non-Refundable",
    flightNumber: "2A 205",
    aircraft: "ATR 72-600",
    meal: "Not Included",
  },
  {
    id: 6,
    airline: "Biman Bangladesh Airlines",
    logo: "https://1000logos.net/wp-content/uploads/2023/05/Biman-Bangladesh-Airlines-Logo.png",
    departureTime: "18:00",
    arrivalTime: "19:15",
    duration: "1h 15m",
    stops: "Non-Stop",
    price: 6540,
    originalPrice: 6900,
    baggage: "30 kg",
    class: "Business",
    refundable: "Fully Refundable",
    flightNumber: "BG 407",
    aircraft: "Boeing 737-800",
    meal: "Included",
  },
  {
    id: 7,
    airline: "US-Bangla Airlines",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmbTS0Ke1BYPm9zPFhzQ6fCAb3DjkDMqZ3uw&s",
    departureTime: "07:15",
    arrivalTime: "10:30",
    duration: "3h 15m",
    stops: "1 Stop (CGP)",
    price: 4875,
    originalPrice: 5200,
    baggage: "20 kg",
    class: "Economy",
    refundable: "Partially Refundable",
    flightNumber: "BS 131",
    aircraft: "Bombardier CRJ-200",
    meal: "Included",
  },
  {
    id: 8,
    airline: "Emirates",
    logo: "https://1000logos.net/wp-content/uploads/2020/03/Emirates-Logo.png",
    departureTime: "22:45",
    arrivalTime: "06:15+1",
    duration: "7h 30m",
    stops: "Non-Stop",
    price: 45200,
    originalPrice: 47800,
    baggage: "35 kg",
    class: "Business",
    refundable: "Fully Refundable",
    flightNumber: "EK 585",
    aircraft: "Boeing 777-300ER",
    meal: "Included",
  },
  {
    id: 9,
    airline: "Qatar Airways",
    logo: "https://1000logos.net/wp-content/uploads/2020/03/Qatar-Airways-Logo.png",
    departureTime: "03:20",
    arrivalTime: "10:40",
    duration: "7h 20m",
    stops: "1 Stop (DOH)",
    price: 38750,
    originalPrice: 41000,
    baggage: "25 kg",
    class: "Economy",
    refundable: "Partially Refundable",
    flightNumber: "QR 647",
    aircraft: "Airbus A350-900",
    meal: "Included",
  },
  {
    id: 10,
    airline: "Singapore Airlines",
    logo: "https://1000logos.net/wp-content/uploads/2020/03/Singapore-Airlines-Logo.png",
    departureTime: "13:10",
    arrivalTime: "21:25",
    duration: "8h 15m",
    stops: "Non-Stop",
    price: 52300,
    originalPrice: 55000,
    baggage: "30 kg",
    class: "Premium Economy",
    refundable: "Fully Refundable",
    flightNumber: "SQ 468",
    aircraft: "Airbus A380-800",
    meal: "Included",
  }
];

// Utility functions
export const timeToMinutes = (timeStr) => {
  const [hours, minutes] = timeStr.split(":").map(Number);
  return hours * 60 + minutes;
};

export const getMinutesFromDuration = (duration) => {
  const [h, m] = duration.split(/h|m/).map(Number);
  return h * 60 + m;
};

// Memoized Flight Card Component
const FlightCard = memo(
  ({ flight }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-xs border border-gray-100 hover:shadow-sm transition-all duration-200">
        {/* Flight Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          {/* Airline + Time */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full">
            <div className="flex-shrink-0 w-32">
              <img
                src={flight.logo}
                alt={flight.airline}
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/80x30?text=Airline";
                }}
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    {flight.airline}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                    <span className="font-medium">
                      {flight.departureTime} - {flight.arrivalTime}
                    </span>
                    <span className="hidden sm:inline-block">•</span>
                    <span className="flex items-center gap-1">
                      <FiClock className="text-gray-400" size={14} />
                      {flight.duration}
                    </span>
                  </div>
                </div>
                <div className="md:text-right">
                  <span className="inline-block px-2 py-1 bg-blue-50 text-[#3590CF] text-xs font-medium rounded">
                    {flight.stops}
                  </span>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600">
                {/* Flight Details */}
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                  {flight.baggage}
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  {flight.class}
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  {flight.refundable}
                </span>
              </div>
            </div>
          </div>
          {/* Price */}
          <div className="w-full md:w-auto flex flex-col md:items-end">
            <div className="flex items-center gap-2">
              {flight.originalPrice > flight.price && (
                <p className="text-gray-400 line-through text-sm">
                  BDT {flight.originalPrice.toLocaleString()}
                </p>
              )}
              <p className="text-lg md:text-xl font-bold text-[#3590CF]">
                BDT {flight.price.toLocaleString()}
              </p>
            </div>
            <button className="mt-3 w-full md:w-auto px-5 py-2 bg-[#3590CF] text-white rounded-md transition-all duration-200 font-medium shadow-xs cursor-pointer">
              Book Now
            </button>
          </div>
        </div>
        {/* Expandable Details */}
        {showDetails && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <h4 className="font-medium text-gray-700 mb-3">Flight Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-500 mb-1">Flight Number</p>
                <p>{flight.flightNumber}</p>
              </div>
              <div>
                <p className="font-medium text-gray-500 mb-1">Aircraft</p>
                <p>{flight.aircraft}</p>
              </div>
              <div>
                <p className="font-medium text-gray-500 mb-1">Meal</p>
                <p>{flight.meal}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-500 mb-1 text-sm">
                  Baggage Allowance
                </p>
                <p className="text-sm">
                  Cabin: 7kg • Check-in: {flight.baggage}
                </p>
              </div>
              <button className="text-[#3590CF] hover:text-blue-800 text-sm font-medium">
                Fare Rules
              </button>
            </div>
          </div>
        )}
        {/* Toggle Button */}
        <button
          className="text-[#3590CF] text-sm mt-4 flex items-center gap-1 hover:text-blue-800 font-medium cursor-pointer"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? (
            <>
              <FiChevronUp size={16} /> Hide Details
            </>
          ) : (
            <>
              <FiChevronDown size={16} /> Show Details
            </>
          )}
        </button>
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if flight data actually changes
    return (
      prevProps.flight.id === nextProps.flight.id &&
      prevProps.flight.price === nextProps.flight.price &&
      prevProps.flight.stops === nextProps.flight.stops
    );
  }
);

// Main Component
const FlightPage = () => {
  // Initial States
  const [filters, setFilters] = useState({
    stops: ["direct"],
    airlines: ["biman", "us-bangla"],
    sortBy: "price",
    departureTime: "all",
  });
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Filter Handlers
  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const toggleArrayFilter = (filterType, item) => {
    setFilters((prev) => {
      const currentItems = prev[filterType];
      const newItems = currentItems.includes(item)
        ? currentItems.filter((i) => i !== item)
        : [...currentItems, item];
      return { ...prev, [filterType]: newItems };
    });
  };

  // Reset Filters
  const resetFilters = () => {
    setFilters({
      stops: ["direct"],
      airlines: ["biman", "us-bangla"],
      sortBy: "price",
      departureTime: "all",
    });
  };

  // Filter & Sort Logic (with useMemo for performance)
  const filteredFlights = useMemo(() => {
    return flightsData
      .filter((flight) => {
        // Stop Filter
        const hasDirect =
          filters.stops.includes("direct") && flight.stops === "Non-Stop";
        const hasOneStop =
          filters.stops.includes("1-stop") && flight.stops.includes("1 Stop");
        if (filters.stops.length > 0 && !hasDirect && !hasOneStop) {
          return false;
        }

        // Airline Filter
        const airlineKey = AIRLINE_MAP[flight.airline] || "other";
        if (
          filters.airlines.length > 0 &&
          !filters.airlines.includes(airlineKey)
        ) {
          return false;
        }

        // Time Filter
        if (filters.departureTime !== "all") {
          const minutes = timeToMinutes(flight.departureTime);
          if (
            filters.departureTime === "morning" &&
            !(minutes >= 360 && minutes < 720)
          )
            return false;
          if (
            filters.departureTime === "afternoon" &&
            !(minutes >= 720 && minutes < 1020)
          )
            return false;
          if (
            filters.departureTime === "evening" &&
            !(minutes >= 1020 && minutes < 1260)
          )
            return false;
          if (
            filters.departureTime === "night" &&
            !(minutes >= 1260 || minutes < 360)
          )
            return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === "price") {
          return a.price - b.price;
        } else {
          return (
            getMinutesFromDuration(a.duration) -
            getMinutesFromDuration(b.duration)
          );
        }
      });
  }, [filters]);

  return (
    <div className="bg-gray-200 min-h-screen pb-14">
      {/* Main Content */}
      <main className="container mx-auto px-4 pt-6 max-w-7xl">
        <div className="space-y-14">
          <div className="bg-white pt-6 py-10 px-4 rounded-xl">
            <Flight />
          </div>

          {/* Mobile Filter Button */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              {filteredFlights.length} Flights Found
            </h2>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              onClick={() => setShowMobileFilters(true)}
            >
              <FiFilter size={16} /> Filters
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters Sidebar - Desktop */}
            <div className="hidden lg:block bg-white w-72 p-5 rounded-lg shadow-xs border border-gray-100 h-fit sticky top-24">
              {/* Filters Content */}
              <div className="space-y-6">
                {/* Sort By */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Sort By</h4>
                  <div className="space-y-2">
                    <button
                      className={`w-full text-left px-4 py-2 rounded-md font-medium text-sm ${
                        filters.sortBy === "price"
                          ? "bg-blue-50 text-[#3590CF] border border-blue-200"
                          : "text-gray-600 border border-gray-200 hover:bg-gray-50"
                      }`}
                      onClick={() => handleFilterChange("sortBy", "price")}
                    >
                      Cheapest First
                    </button>
                    <button
                      className={`w-full text-left px-4 py-2 rounded-md font-medium text-sm ${
                        filters.sortBy === "duration"
                          ? "bg-blue-50 text-[#3590CF] border border-blue-200"
                          : "text-gray-600 border border-gray-200 hover:bg-gray-50"
                      }`}
                      onClick={() => handleFilterChange("sortBy", "duration")}
                    >
                      Fastest First
                    </button>
                  </div>
                </div>
                {/* Stops */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Stops</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Non-stop", value: "direct" },
                      { label: "1 Stop", value: "1-stop" },
                    ].map((stop) => (
                      <label
                        key={stop.value}
                        className="flex items-center gap-3 text-gray-700 cursor-pointer p-2 hover:bg-gray-50 rounded"
                      >
                        <input
                          type="checkbox"
                          className="checkbox checkbox-neutral checkbox-sm"
                          checked={filters.stops.includes(stop.value)}
                          onChange={() =>
                            toggleArrayFilter("stops", stop.value)
                          }
                        />
                        <span>{stop.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Airlines */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">Airlines</h4>
                  <div className="space-y-2">
                    {[
                      { label: "Biman Bangladesh", value: "biman" },
                      { label: "US-Bangla Airlines", value: "us-bangla" },
                    ].map((airline) => (
                      <label
                        key={airline.value}
                        className="flex items-center gap-3 text-gray-700 cursor-pointer p-2 hover:bg-gray-50 rounded"
                      >
                        <input
                          type="checkbox"
                          className="checkbox checkbox-neutral checkbox-sm"
                          checked={filters.airlines.includes(airline.value)}
                          onChange={() =>
                            toggleArrayFilter("airlines", airline.value)
                          }
                        />
                        <span>{airline.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
                {/* Departure Time */}
                <div>
                  <h4 className="font-medium text-gray-700 mb-3">
                    Departure Time
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      {
                        label: "Morning",
                        value: "morning",
                        time: "6AM - 12PM",
                      },
                      {
                        label: "Afternoon",
                        value: "afternoon",
                        time: "12PM - 5PM",
                      },
                      { label: "Evening", value: "evening", time: "5PM - 9PM" },
                      { label: "Night", value: "night", time: "9PM - 6AM" },
                    ].map((time) => (
                      <button
                        key={time.value}
                        className={`py-2 text-xs rounded-md flex flex-col items-center ${
                          filters.departureTime === time.value
                            ? "bg-[#3590CF] text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() =>
                          handleFilterChange("departureTime", time.value)
                        }
                      >
                        <span className="font-medium">{time.label}</span>
                        <span className="text-xs opacity-80">{time.time}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Filters Drawer */}
            {showMobileFilters && (
              <div className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  {/* Background overlay */}
                  <div
                    className="fixed inset-0 transition-opacity"
                    aria-hidden="true"
                    onClick={() => setShowMobileFilters(false)}
                  >
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>

                  {/* Modal content */}
                  <div className="inline-block align-bottom bg-white rounded-t-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      {/* Modal Header */}
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Filters
                        </h3>
                        <button
                          onClick={() => setShowMobileFilters(false)}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <FiX size={24} />
                        </button>
                      </div>

                      {/* Filter Options */}
                      <div className="space-y-6">
                        {/* Sort */}
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">
                            Sort
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              className={`px-4 py-2 rounded-md font-medium text-sm ${
                                filters.sortBy === "price"
                                  ? "bg-blue-50 text-[#3590CF] border border-blue-200"
                                  : "text-gray-600 border border-gray-200 hover:bg-gray-50"
                              }`}
                              onClick={() =>
                                handleFilterChange("sortBy", "price")
                              }
                            >
                              Cheapest
                            </button>
                            <button
                              className={`px-4 py-2 rounded-md font-medium text-sm ${
                                filters.sortBy === "duration"
                                  ? "bg-blue-50 text-[#3590CF] border border-blue-200"
                                  : "text-gray-600 border border-gray-200 hover:bg-gray-50"
                              }`}
                              onClick={() =>
                                handleFilterChange("sortBy", "duration")
                              }
                            >
                              Fastest
                            </button>
                          </div>
                        </div>

                        {/* Stops */}
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">
                            Stops
                          </h4>
                          <div className="space-y-2">
                            {[
                              { label: "Non-stop", value: "direct" },
                              { label: "1 Stop", value: "1-stop" },
                            ].map((stop) => (
                              <label
                                key={stop.value}
                                className="flex items-center gap-3 text-gray-700 cursor-pointer p-2 hover:bg-gray-50 rounded"
                              >
                                <input
                                  type="checkbox"
                                  className="rounded text-[#3590CF] focus:ring-blue-500"
                                  checked={filters.stops.includes(stop.value)}
                                  onChange={() =>
                                    toggleArrayFilter("stops", stop.value)
                                  }
                                />
                                <span>{stop.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Airlines */}
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">
                            Airlines
                          </h4>
                          <div className="space-y-2">
                            {[
                              { label: "Biman Bangladesh", value: "biman" },
                              {
                                label: "US-Bangla Airlines",
                                value: "us-bangla",
                              },
                            ].map((airline) => (
                              <label
                                key={airline.value}
                                className="flex items-center gap-3 text-gray-700 cursor-pointer p-2 hover:bg-gray-50 rounded"
                              >
                                <input
                                  type="checkbox"
                                  className="rounded text-[#3590CF] focus:ring-blue-500"
                                  checked={filters.airlines.includes(
                                    airline.value
                                  )}
                                  onChange={() =>
                                    toggleArrayFilter("airlines", airline.value)
                                  }
                                />
                                <span>{airline.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        {/* Departure Time */}
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">
                            Departure Time
                          </h4>
                          <div className="grid grid-cols-2 gap-2">
                            {[
                              {
                                label: "Morning",
                                value: "morning",
                                time: "6AM-12PM",
                              },
                              {
                                label: "Afternoon",
                                value: "afternoon",
                                time: "12PM-5PM",
                              },
                              {
                                label: "Evening",
                                value: "evening",
                                time: "5PM-9PM",
                              },
                              {
                                label: "Night",
                                value: "night",
                                time: "9PM-6AM",
                              },
                            ].map((time) => (
                              <button
                                key={time.value}
                                className={`py-2 text-xs rounded-md flex flex-col items-center ${
                                  filters.departureTime === time.value
                                    ? "bg-[#3590CF] text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                                onClick={() =>
                                  handleFilterChange(
                                    "departureTime",
                                    time.value
                                  )
                                }
                              >
                                <span className="font-medium">
                                  {time.label}
                                </span>
                                <span className="text-xs opacity-80">
                                  {time.time}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Modal Footer */}
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button
                        type="button"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-[#3590CF] text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={() => setShowMobileFilters(false)}
                      >
                        Apply Filters
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                        onClick={resetFilters}
                      >
                        Reset All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Flight Results */}
            <div className="flex-1">
              <div className="hidden lg:flex justify-between items-center mb-4 py-2 px-4 rounded-xl bg-white">
                <h2 className="text-xl font-semibold text-gray-800">
                  {filteredFlights.length} Flights Found
                </h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>Sorted by:</span>
                  <span className="font-medium">
                    {filters.sortBy === "price"
                      ? "Price (Lowest first)"
                      : "Duration (Shortest first)"}
                  </span>
                </div>
              </div>

              {/* Flight Cards */}
              {filteredFlights.length > 0 ? (
                <div className="space-y-4">
                  {filteredFlights.map((flight) => (
                    <FlightCard key={flight.id} flight={flight} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg shadow-xs border border-gray-100 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                    <svg
                      className="h-6 w-6 text-[#3590CF]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    No flights match your filters
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Try adjusting your filters or search criteria
                  </p>
                  <button
                    className="px-4 py-2 bg-[#3590CF] text-white rounded-md hover:bg-blue-700 font-medium"
                    onClick={resetFilters}
                  >
                    Reset all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FlightPage;
