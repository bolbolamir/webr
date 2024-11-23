import { Pyramid, Triangle } from "lucide-react";
import React from "react";

export const Header = (props) => {
  return (
    <header id="header" data-aos="fade-up" data-aos-once="false" data-aos-duration="1000" data-aos-delay="50">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text glass">
                <h1>
                  <Pyramid style={{ transform: "translateY(-200%) scale(5)" }}></Pyramid>
                  <br />
                  <span
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    data-aos-delay="150"
                    data-aos-once="false"
                    style={{color : "white"}}
                  >
                    {props.data ? props.data.title : "Loading"}
                  </span>
                  <span></span>
                </h1>

                <p
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                  data-aos-once="false"
                >
                  <span style={{fontSize : 34, margin : 4}}>
                  
                  <span style={{marginBlock : 8}}>
                  "مثلث فراز سپهر ارتباطات پردیسان خوارزم"


                  </span>



                  </span>
                  <br />
                  
                  <Triangle style={{margin : 4}}></Triangle>
                  <br />

                  <span style={{marginTop  : 10, display : "block"}}>
                  "آینده‌ای هوشمندتر را امروز بسازید.”


                  </span>

                </p>

                <p
                  style={{ textDecoration: "underline" }}
                  data-aos="fade-left"
                  data-aos-duration="1000"
                  data-aos-delay="250"
                  data-aos-once="false"

                >
                  ما با بهره‌گیری از پیشرفته‌ترین فناوری‌های هوش مصنوعی، راه‌حل‌هایی نوین برای صنایع مختلف ارائه می‌دهیم و شما را در مسیر تحول دیجیتال همراهی می‌کنیم.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
