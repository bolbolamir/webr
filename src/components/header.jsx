import { Pyramid } from "lucide-react";
import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text glass">
                
                <h1>
                
                <Pyramid style={{transform : "translateY(-200%) scale(5)"}}></Pyramid>
    <br />
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>

                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                {/* <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "} */}
                <p style={{textDecoration : "underline"}}>ما با بهره‌گیری از پیشرفته‌ترین فناوری‌های هوش مصنوعی، راه‌حل‌هایی نوین برای صنایع مختلف ارائه می‌دهیم و شما را در مسیر تحول دیجیتال همراهی می‌کنیم.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
