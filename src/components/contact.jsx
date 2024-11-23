import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import { Book, Headset, Mail, Map, Phone, PhoneCall } from "lucide-react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    
    {/* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */ }
    
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div  data-aos="fade-up" data-aos-once="false"  data-aos-duration="1000" data-aos-delay="50">

{/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="visual" viewBox="0 0 900 600" width="900" height="600" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#001220"/><defs><linearGradient id="grad1_0" x1="33.3%" y1="0%" x2="100%" y2="100%"><stop offset="20%" stopColor="#001220" stopOpacity="1"/><stop offset="80%" stopColor="#001220" stoppacity="1"/></linearGradient></defs><defs><linearGradient id="grad2_0" x1="0%" y1="0%" x2="66.7%" y2="100%"><stop offset="20%" stopColor="#001220" stoppacity="1"/><stop offset="80%" stopColor="#001220" stoppacity="1"/></linearGradient></defs><g transform="translate(900, 0)"><path d="M0 486.7C-44.4 433 -88.8 379.2 -150.4 363.1C-212 347 -290.7 368.6 -344.2 344.2C-397.6 319.8 -425.8 249.5 -445.3 184.5C-464.9 119.4 -475.8 59.7 -486.7 0L0 0Z" fill="#FBAE3C"/></g><g transform="translate(0, 600)"><path d="M0 -486.7C62.3 -479.2 124.6 -471.6 186.3 -449.7C248 -427.8 309 -391.7 340.1 -340.1C371.2 -288.5 372.3 -221.5 391.7 -162.3C411.2 -103 449 -51.5 486.7 0L0 0Z" fill="#FBAE3C"/></g></svg> */}
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>“برای شروع یک همکاری هوشمند آماده‌ایم”</h2>
                <p>
با پر کردن فریم زیر، در اسرع وقت با شما تماس میگیریم.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="نام"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="ایمیل"
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="پیام شما"
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  ارسال پیام
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              {/* <h3>Contact Info</h3> */}
              <p>
                <span>
                  <Map></Map>
                  <i className="fa"></i> آدرس
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <PhoneCall></PhoneCall>
                  <i className="fa "></i> شماره تماس
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <Mail></Mail>
                  <i className="fa"></i> ایمیل
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa">
                        <Headset></Headset>
                      </i>
                      
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      
                      <i className="fa">
                      <Phone></Phone>
                      </i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa">
                        <Book></Book>
                      </i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            تمامی حقوق برای شرکت مثلث فراز سپهر محفوظ است.
          </p>
        </div>
      </div>
    </div>
  );
};
