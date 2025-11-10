
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ecoDecorIdeas = [
  {
    id: 1,
    title: "🍀 Cozy Window Garden",
    description:
      "Place small potted herbs or succulents by the window to add freshness and natural light.",
    image: "/eco1.jpeg",
  },
  {
    id: 2,
    title: "🌸 Hanging Planter Wall",
    description:
      "Use vertical space to hang your favorite trailing plants with stylish macramé planters.",
    image: "/eco2.jpeg",
  },
  {
    id: 3,
    title: "🌺 Desk Plant Inspiration",
    description:
      "Add a mini cactus or peace lily to your desk for calmness and better focus.",
    image: "/eco3.jpeg",
  },
  {
    id: 4,
    title: "🌼 Bathroom Green Corner",
    description:
      "Decorate your bathroom with ferns or pothos that thrive in humid environments.",
    image: "/eco4.jpeg",
  },
];

// ✅ Carousel Responsive Breakpoints
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function EcoDecoridea() {
  return (
    <section className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-emerald-900 text-white">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-300 mb-6">
          🌿 Bring the Outdoors In
        </h2>
        <p className="text-lg text-green-100/80 max-w-2xl mx-auto mb-14">
          Transform your home into a peaceful green retreat — with simple,
          creative ways to decorate using indoor plants
        </p>

        {/* ✅ Carousel Section */}
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .8"
          transitionDuration={800}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="px-4"
        >
          {ecoDecorIdeas.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center bg-white/5 backdrop-blur-md rounded-3xl shadow-lg overflow-hidden p-6 md:p-10"
            >
              <div className="w-full md:w-1/2 h-64 md:h-80 overflow-hidden rounded-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-200 mb-3">
                  {item.title}
                </h3>
                <p className="text-green-100/90 text-base md:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
