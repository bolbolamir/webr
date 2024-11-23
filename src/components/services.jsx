import { Brain, BrainCircuit, BrainCog, Bot, Factory, LaptopMinimalCheck } from "lucide-react";
import React from "react";

export const Services = (props) => {
  // Array of available icons
  const icons = [
    Brain,
    BrainCircuit,
    BrainCog,
    Bot,
    Factory,
    LaptopMinimalCheck
  ];

  return (
    <div id="services" className="text-center "  data-aos="fade-up" data-aos-once="false"  data-aos-duration="1000" data-aos-delay="50">
      <div className="container">
        <div className="section-title">
          <h2>خدمات ما</h2>
          <p></p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => {
                // Select an icon based on the index (looping through the icons)
                const Icon = icons[i % icons.length];  // Use modulo to loop over icons

                return (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    {/* Display selected icon above the service */}
                    <div className="service-icon">
                      <Icon size={48} />
                    </div>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                );
              })
            : "loading"}
        </div>
      </div>
    </div>
  );
};
