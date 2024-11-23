import { Brain, BrainCircuit, BrainCog, Bot, Factory, LaptopMinimalCheck, Handshake, HandCoins } from "lucide-react";
import React from "react";

export const Features = (props) => {
  // Array of available icons
  const icons = [
    Brain,
    Handshake,
    HandCoins,
    Bot,
    BrainCog,
    LaptopMinimalCheck
  ];

  return (
    <div id="features" className="text-center"  data-aos="fade-up" data-aos-once="false"  data-aos-duration="1000" data-aos-delay="50">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>ویژگی های ما</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => {
                // Select an icon based on the index (looping through the icons)
                const Icon = icons[i % icons.length];  // Use modulo to loop over icons

                return (
                  <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                    {/* Display selected icon above the feature */}
                    <div className="feature-icon">
                      <Icon size={48} />
                    </div>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                );
              })
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
