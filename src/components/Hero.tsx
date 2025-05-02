
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-gradient pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Forge Your AI Future with AI Anvil
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-12">
            We transform businesses with cutting-edge AI solutions tailored to your specific needs.
            From concept to deployment, we craft intelligent systems that drive real results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-anvil-600 hover:bg-anvil-700 text-white px-8 py-6 text-lg">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-anvil-600 text-anvil-700 hover:bg-anvil-50 px-8 py-6 text-lg">
              Explore Services
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
