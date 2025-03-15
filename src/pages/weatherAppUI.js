import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function WeatherAppUI() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex items-center gap-4 justify-center overflow-visible p-0 relative w-full h-screen"
    >
      <div className="bg-gray-900 p-6 rounded-xl flex flex-col gap-4">
        <h3 className="text-lime-400 font-bold text-sm">ADAPTABILITY</h3>
        <h2 className="text-2xl font-light">
          Make the experience truly intuitive
        </h2>
        <div className="flex gap-4 justify-center">
          <PhoneMockup
            location="Dublin, Ireland"
            temperature="8"
            description="Calm evening, perfect for taking the trash out"
            bgColor="bg-green-900"
          />
          <PhoneMockup
            location="Reykjavik, Iceland"
            temperature="8"
            description="Gleðilega páska, it rains today so don’t forget your raincoat for egg hunt"
            bgColor="bg-blue-100 text-black"
          />
          <PhoneMockup
            location="Amsterdam, Netherlands"
            temperature="10"
            description="It’s gonna be great day today."
            bgColor="bg-green-950"
          />
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-xl text-center">
        <h3 className="text-lime-400 font-bold text-sm">APP STORE</h3>
        <h2 className="text-2xl font-light">Top rated app in the world.</h2>
        <div className="text-lime-400 text-5xl font-bold mt-2">4.9</div>
        <div className="flex justify-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              fill="currentColor"
              stroke="none"
              className="text-lime-400 w-6 h-6"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function PhoneMockup({ location, temperature, description, bgColor }) {
  return (
    <div
      className={`w-40 h-80 rounded-3xl p-4 flex flex-col justify-between ${bgColor}`}
    >
      <div className="text-xs uppercase font-bold">{location}</div>
      <div>
        <div className="text-5xl font-bold">{temperature}°</div>
        <p className="text-sm font-medium leading-tight mt-2">{description}</p>
      </div>
    </div>
  );
}

// import { motion } from 'framer-motion';

// const weatherAppUI = () => {
//   return (
//     <motion.div
//       style={{
//         width: '300px',
//         height: '300px',
//         backgroundColor: '#4F9BFC',
//         position: 'relative',
//         margin: '50px auto',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//       initial={{ opacity: 0, y: -200 }} // Starts from opacity 0 and 200px above
//       animate={{ opacity: 1, y: 0 }}     // Ends with full opacity and in the original position
//       transition={{ duration: 1 }}        // Animation duration of 1 second
//     >
//       <h2 style={{ color: '#fff', fontSize: '24px' }}>Hello, World!</h2>
//     </motion.div>
//   );
// };

// export default weatherAppUI;
