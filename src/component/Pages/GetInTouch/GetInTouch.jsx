import React from "react";
import "./GetInTouch.css";

const GetInTouch = () => {
  return (
    <div className="container mx-auto getInTOuch-wrapper bg-slate-950 pb-[261px] pt-[111px] tracking-widest md:flex md:flex-row">
      <div className="experiance-content md:flex md:flex-row text-left">
        <div className="left md:w-8/12 w-full bg-slate-950">
          <h2 className="poppins-bold text-[55px] uppercase pb-[12px] pt-[24.56px] leading-[109.5%] tracking-wider">
            Get in <span className="text-main-blue">touch</span>
          </h2>
          <hr className="text-white w-[60px] h-[3px]" />
          <p className="pt-[12px]">
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
            sit amet, Neque porro elit NeDque porro{" "}
          </p>
          <div>
            <div className="icon-text md:flex md:flex-row items-center gap-4">
              <img src="/icons/locatiom.svg" alt="location icon" />
              <div>
                <h3>Office Address</h3>
                <p className="text-main-blue">
                  98, Arca St, PR City, 33414 , Indonesia
                </p>
              </div>
            </div>
            <div className="icon-text md:flex md:flex-row items-center gap-4">
              <img src="/icons/phone.svg" alt="location icon" />
              <div>
                <h3>Office Address</h3>
                <p className="text-main-blue">
                  98, Arca St, PR City, 33414 , Indonesia
                </p>
              </div>
            </div>
            <div className="icon-text md:flex md:flex-row items-center gap-4">
              <img src="/icons/email.svg" alt="location icon" />
              <div>
                <h3>Office Address</h3>
                <p className="text-main-blue">
                  98, Arca St, PR City, 33414 , Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="from md:w-4/12 w-full flex flex-col items-center justify-center">
          <div className="form-card">
            <label className="form-controlw-full max-w-xs">
              <div className="label">
                <span className="label-text">YOUR NAME</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">YOUR EMAIL</span>
              </div>
              <input
                type="email"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <label className="form-control w-full md:max-w-[426px]">
              <div className="label">
                <span className="label-text">YOUR MESSAGE</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
            </label>
            <button className="border-[3px] border-main-blue py-[10px] px-[30.5px] mt-[20px] uppercase">
              {" "}
              SEND MESSAGE{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
