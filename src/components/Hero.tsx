import { Link } from "react-router-dom";

import { HeroCarousel } from "./HeroCarousel";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          corporis quibusdam alias sed debitis vel est veniam, eius iure
          doloremque voluptate sunt perferendis quasi dolorem, molestias omnis
          facilis animi dolore!
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link to="./products">Our products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};
