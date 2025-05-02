
import React from "react";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin with a thorough assessment of your business needs, challenges, and goals to understand how AI can add value."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our team develops a strategic roadmap outlining how AI solutions will be implemented to address your specific requirements."
    },
    {
      number: "03",
      title: "Development",
      description: "We design and build custom AI solutions, integrating them with your existing systems and workflows."
    },
    {
      number: "04",
      title: "Deployment",
      description: "Once testing is complete, we deploy your AI solution with minimal disruption to your operations."
    },
    {
      number: "05",
      title: "Training",
      description: "We provide comprehensive training to ensure your team can effectively utilize and manage the new AI capabilities."
    },
    {
      number: "06",
      title: "Optimization",
      description: "We continuously monitor, maintain, and optimize your AI system to ensure it delivers maximum value over time."
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We follow a structured approach to ensure every AI project delivers measurable value and seamlessly integrates with your business.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-anvil-100 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="w-full md:w-1/2 mb-6 md:mb-0 px-4">
                  <div className={`text-center md:text-left ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                    <div className="inline-block bg-anvil-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                <div className="relative flex-shrink-0 w-12 h-12 rounded-full bg-anvil-600 flex items-center justify-center z-10 my-4 md:my-0">
                  <div className="text-white font-bold">{step.number}</div>
                </div>

                <div className="w-full md:w-1/2 px-4 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
