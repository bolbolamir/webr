import { Menu, Triangle } from "lucide-react";
import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container" style={{display: "flex", justifyContent : "space-between", width : "100%", alignItems : "center"}}>
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <Menu></Menu>
          </button>
        <div className="navbar-header">
          <a className="navbar-brand page-scroll" href="#page-top" style={{ transform : "translateY(0px)"}} >
          مثلث فراز سپهر ارتباطات 

          </a>{" "}
        </div>

          <Triangle style={{ marginInline:2}} className="rotate" strokeWidth={4}></Triangle>
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                درباره ما
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                خدمات
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                ارتباط با ما
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
