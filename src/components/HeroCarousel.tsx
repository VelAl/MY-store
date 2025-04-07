import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";

const slides = [hero1, hero2, hero3, hero4];

export const HeroCarousel = () => {
  return (
    <div className="hidden lg:block">
      <Carousel>
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i}>
              <Card>
                <CardContent>
                  <img
                    src={slide}
                    alt="hero"
                    className="w-full h-[24rem] rounded-md object-cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
    </div>
  );
};
