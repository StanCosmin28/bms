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
        { icon: Power, angle: 0, text: "Power test" },
        { icon: BarChart3, angle: 180, text: "Analytics test" },
      ],
      duration: 20,
    },
    {
      radius: 160,
      items: [
        { icon: Settings, angle: 0, text: "Settings test" },
        { icon: Rocket, angle: 120, text: "Launch test" },
        { icon: Star, angle: 240, text: "Star test" },
      ],
      duration: 30,
    },
    {
      radius: 220,
      items: [
        { icon: Moon, angle: 0, text: "Moon test" },
        { icon: Globe, angle: 180, text: "Globe test" },
      ],
      duration: 40,
    },
  ];

  const OrbitItem = ({ icon: Icon, radius, angle, duration, text }) => {
    return (
      <div
        className="absolute hover:w-34 w-12 h-12 flex items-center justify-center"
        style={{
          transform: `translate(-50%, -50%)`,
          left: "50%",
          top: "50%",
          animation: `orbit-${radius}-${angle} ${duration}s linear infinite`,
        }}
      >
        <div className="hover:w-34 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200 hover:shadow-xl transition-shadow cursor-pointer gap-2">
          <Icon className="w-5 h-5 text-gray-700" />
          <p className="text-xs text-gray-700 font-medium">{text}</p>
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
      <style>{`
        ${orbitalRings
          .map((ring) =>
            ring.items
              .map(
                (item) => `
          @keyframes orbit-${ring.radius}-${item.angle} {
            from {
              transform: translate(-50%, -50%) rotate(${
                item.angle
              }deg) translateX(${ring.radius}px) rotate(-${item.angle}deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(${
                item.angle + 360
              }deg) translateX(${ring.radius}px) rotate(-${
                  item.angle + 360
                }deg);
            }
          }
        `
              )
              .join("")
          )
          .join("")}
      `}</style>
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
              text={item.text}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default SolarSystemComponent;
