import React from 'react';
import "./experiance.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Experiance = () => {
    useGSAP(()=>{
        gsap.from(".animated-text-left",{
          x: -360,
          opacity: 0,
          duration: 1,
          delay: .5,
          stagger: 0.2
        })
        gsap.from(".animated-text-right",{
          x: 360,
          opacity: 0,
          duration: 2,
          delay: .5,
          stagger: 0.2
        })
        
      })
    return (
        <div className="main-container experiance-wrapper bg-slate-950 md:pb-[261px] max-sm:pb-[100px] max-sm:px-4 pt-[111px] tracking-widest">
            <div className="experiance-content md:flex md:flex-row text-left">
                <div className="left md:w-7/12 w-full bg-slate-950 pr-14">
                    <p className='animated-text-left poppins-regular text-[21px]'>why us?</p>
                    <hr className='text-main-blue w-[100px] h-[3px]'/>
                    <h2 className='animated-text-left poppins-bold text-[30px] md:text-[55px] uppercase pb-[45px] pt-[24.56px] leading-[109.5%] tracking-wider'>25 years of <span className='text-main-blue'>experience</span> as a creative agency</h2>
                    <button className='animated-text-left border-[3px] border-main-blue py-[10px] px-[30.5px] max-sm:mb-5'>Read more</button>
                </div>
                <div className="animated-text-right right md:w-5/12 w-full poppins-light text-[21px] content-end">
                    <p>Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor sit amet,  Neque porro elit NeDque porro  Lorem ipsum</p>
                    <ul className='pt-8'>
                        <li className='flex '><img className='pr-3' src="/icons/correct.svg" alt="" />Happy Customer</li>
                        <li className='flex py-1'><img className='pr-3' src="/icons/correct.svg" alt="" />Experienced Team</li>
                        <li className='flex '><img className='pr-3' src="/icons/correct.svg" alt="" />Modern Technology</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Experiance;