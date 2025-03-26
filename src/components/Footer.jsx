import React from "react";
import image from "../image/fb.png";
import pic from "../image/in.png";
import twit from "../image/x.png";

const Footer = () => {
  return (
    <div>
      <section className="row footer">
        <div className="col-md-4">
          <p className="text-light bg-dark">
            Make Every Event Unforgettable with Our Premium Tents! At
            GibsEvents, we provide top-quality event tents designed for
            elegance, durability, and versatility. Whether you're hosting a
            wedding, corporate gathering, festival, or private party, our tents
            create the perfect atmosphere for any occasion. ✨ Stylish &
            Spacious Designs – Accommodate any crowd size 🌦 Weather-Resistant &
            Sturdy – Reliable in any season ⚡ Easy Setup & Customizable Options
            – Tailored to your event needs
          </p>
        </div>
        <div className="col-md-4  form shadow p-4 border-solid">
          <h4 className="text-light bg-dark ">Leave a comment</h4>
          <form action="">
            <textarea
              placeholder="comment"
              className="form-control"
              id=""
            ></textarea>{" "}
            <br />
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control"
            />{" "}
            <br />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="col-md-4">
          <p className="text-light bg-dark">
            Transform any space into a stunning venue with our high-quality
            event tents.Our stores are open from 6:00am to 8:00pm.
            Customercare hotline:0782785479
          </p>
          <a href="">
            <img src={image} alt="" />
          </a>
          <a href="">
            <img src={pic} alt="" />
          </a>
          <a href="">
            <img src={twit} alt="" />
          </a>

          <div><br />
            <div className="a">
              <b >
                <a
                  href="https://www.google.com/maps/place/Haven+Court/@-1.2613553,36.7933093,1070m/data=!3m2!1e3!4b1!4m6!3m5!1s0x182f17693b368f0f:0x13091f14086655c5!8m2!3d-1.2613607!4d36.7958842!16s%2Fg%2F11c5g_94dv?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h2>Our Location</h2>
                </a>
              </b>
            </div>
          </div>
        </div>
      </section>
      <div className=" row bg-info text-light w-100">
        <p className="col-md-6">
        Developed and designed by Gibson Igori.
        </p>
        <b className="col-md-6">
          For more information call 0799483599 or email gibsonigori@gmail.com
        </b>
      </div>
    </div>
  );
};

export default Footer;
