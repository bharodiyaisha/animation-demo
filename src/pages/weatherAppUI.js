export default function weatherAppUI() {
  return (
    <div
      className="p-4 "
      initial={{ opacity: 0, y: -400 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-4">
        <div className=" bg-zinc-900 rounded-3xl p-6 md:p-8w-full py-4 text-white font-bold">
          <div>
            <h6 className="text-[#98FF7C] uppercase text-sm font-medium mb-4">
              Adaptability
            </h6>
            <h5 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight">
              Make the experience truly intuitive
            </h5>
          </div>
          <figure className="relative w-full max-w-sm mx-auto h-[500px]">
            {/* App Image */}
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <img
                decoding="async"
                loading="lazy"
                src="https://framerusercontent.com/images/7g4IDykxZuRVZ5A1Y1eQar5fFw.webp"
                alt="Weather app image"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* iPhone Mockup */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <img
                    decoding="async"
                    loading="lazy"
                    src="https://framerusercontent.com/images/YlYIbfFEujexwgWABDzpsRlY.webp"
                    alt="iPhone mockup"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </figure>

          {/* Scrollable cards */}
          {/* <div className="image-section">
            {[
              {
                location: "Dublin, Ireland",
                temp: "8°",
                description: "Calm evening, perfect for taking the trash out",
                bgColor: "#0B4E0B",
                textColor: "white",
                feelsLike: "3°",
                wind: "2 km/h",
                uvIndex: "1",
                rain: "0%",
                windStatus: "calm",
              },
              {
                location: "Reykjavík, Iceland",
                temp: "8°",
                description:
                  "Gleðilega páska, it rains today so don’t forget your raincoat for egg hunt",
                bgColor: "#E8F1FF",
                textColor: "black",
                feelsLike: "4°",
                wind: "10 km/h",
                uvIndex: "1",
                rain: "90%",
                windStatus: "strong",
              },
              {
                location: "Amsterdam, Netherlands",
                temp: "10°",
                description: "It's gonna be a great day today.",
                bgColor: "#0B4E0B",
                textColor: "white",
                schedule: [
                  { time: "8:00", event: "Meet with max" },
                  { time: "10:00", event: "Design Workshop" },
                  { time: "12:00", event: "Team Lunch" },
                ],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="mockup"
                style={{
                  backgroundImage: `url('https://framerusercontent.com/images/YlYIbfFEujexwgWABDzpsRlY.webp')`,
                  color: item.textColor,
                }}
              >
                <div className="inner-content">
                  <div>
                    <div className="text-section">{item.location}</div>
                    <div className="temp">{item.temp}</div>
                    <div className="description">{item.description}</div>
                  </div>
                  <div className="extra-info">
                    {item.feelsLike && (
                      <div>
                        Feels like: {item.feelsLike}{" "}
                        <strong>{item.windStatus}</strong>
                      </div>
                    )}
                    {item.wind && <div>Wind: {item.wind}</div>}
                    {item.uvIndex && <div>UV Index: {item.uvIndex}</div>}
                    {item.rain && <div>Rain: {item.rain}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
        <div className="w-full py-4 text-indigo-300 font-semibold bg-zinc-900 rounded-3xl p-6 md:p-8">
          <div>
            <h6 className="text-[#98FF7C] uppercase text-sm font-medium mb-4">
              App Store
            </h6>
            <h5 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium leading-tight">
              Top rated app in the world.
            </h5>
          </div>
          {/* Rating Section */}
          <div className="mt-8">
            <div className="text-[#98FF7C] text-6xl sm:text-7xl lg:text-9xl font-bold mb-4">
              4.9
            </div>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-[#98FF7C]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
