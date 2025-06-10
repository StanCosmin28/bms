import {
  Power,
  BarChart3,
  Settings,
  Rocket,
  Star,
  Moon,
  Globe,
} from "lucide-react";

const SolarSystemComponent = () => {
  const orbitalRings = [
    {
      radius: 100,
      items: [
        { icon: Power, angle: 0 },
        { icon: BarChart3, angle: 180 },
      ],
      duration: 20,
    },
    {
      radius: 160,
      items: [
        { icon: Settings, angle: 0 },
        { icon: Rocket, angle: 120 },
        { icon: Star, angle: 240 },
      ],
      duration: 30,
    },
    {
      radius: 220,
      items: [
        { icon: Moon, angle: 0 },
        { icon: Globe, angle: 90 },
        { icon: Globe, angle: 180 },
        { icon: Rocket, angle: 270 },
        { icon: Rocket, angle: 270 },
      ],
      duration: 40,
    },
  ];

  const OrbitItem = ({ icon: Icon, radius, angle, duration }) => {
    return (
      <div
        className="absolute w-12 h-12 flex items-center justify-center"
        style={{
          transform: `translate(-50%, -50%)`,
          animation: `orbit-${radius} ${duration}s linear infinite`,
          left: "50%",
          top: "50%",
        }}
      >
        <div
          className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer"
          style={{
            transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
          }}
        >
          <Icon className="w-5 h-5 text-gray-700" />
        </div>
      </div>
    );
  };

  const OrbitRing = ({ radius }) => (
    <div
      className="absolute border-2 border-gray-300 rounded-full opacity-30"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
  );

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${
                2 + Math.random() * 3
              }s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes orbit-100 {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes orbit-160 {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes orbit-220 {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
      {/* <style>{`
            @keyframes orbit-100 {
              from { transform: translate(-50%, -50%) rotate(0deg); }
              to { transform: translate(-50%, -50%) rotate(360deg); }
            }
            @keyframes orbit-160 {
              from { transform: translate(-50%, -50%) rotate(0deg); }
              to { transform: translate(-50%, -50%) rotate(360deg); }
            }
            @keyframes orbit-220 {
              from { transform: translate(-50%, -50%) rotate(0deg); }
              to { transform: translate(-50%, -50%) rotate(360deg); }
            }
            @keyframes counter-rotate-100 {
              from { transform: rotate(0deg); }
              to { transform: rotate(-360deg); }
            }
            @keyframes counter-rotate-160 {
              from { transform: rotate(0deg); }
              to { transform: rotate(-360deg); }
            }
            @keyframes counter-rotate-220 {
              from { transform: rotate(0deg); }
              to { transform: rotate(-360deg); }
            }
            @keyframes twinkle {
              0% { opacity: 0.3; }
              100% { opacity: 1; }
            }
          `}</style> */}

      {/* Solar System Container */}
      <div className="relative w-full h-full max-w-4xl max-h-4xl">
        {/* Orbital Ring Guides */}
        {orbitalRings.map((ring, index) => (
          <OrbitRing key={index} radius={ring.radius} />
        ))}

        {/* Central Sun/Logo */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-24 h-24 bg-gradient-to-br from-lime-400 to-lime-500 rounded-full shadow-2xl flex items-center justify-center">
            <Rocket size={36} className="text-white" />
          </div>
        </div>

        {/* Orbiting Items */}
        {orbitalRings.map((ring, ringIndex) =>
          ring.items.map((item, itemIndex) => (
            <OrbitItem
              key={`${ringIndex}-${itemIndex}`}
              icon={item.icon}
              radius={ring.radius}
              angle={item.angle}
              duration={ring.duration}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default SolarSystemComponent;
