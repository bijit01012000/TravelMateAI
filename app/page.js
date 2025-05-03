import Link from "next/link";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">Travel Mate </h1>
          <p className="py-6 text-lg leading-loose">
            TravelMateAI: Your AI language companion. Powered by OpenAI, it A
            smart travel companion designed to guide you through any city,
            answering your queries and providing tailored suggestions. Discover
            hidden gems and make the most of your journey!
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
