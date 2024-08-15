import { FaLocationDot } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
const Touch = () => {
  return (
    <div className="bg-black md:pb-[130px]">
      <div className="md:flex gap-[147px] justify-center max-sm:px-4">
        <div className="pt-[50px] md:pt-[172px] md:w-[596px]">
          <h1 className="text-white font-bold text-[30px] md:text-[48px] leading-[72px] pb-[30px]">
            Get in <span className="text-[#6D95FC]">TOUCH</span>
          </h1>
          <p className="border-[3px] rounded border-white w-[97.5px] "></p>
          <p className="text-white font-light text-[21px] tracking-[4%] leading-[34.96px] pt-[26px] pb-[40px] md:w-[500px]">
            Lorem ipsum Neque porro quisquam est qui do lorem ipsum quia dolor
            sit amet, Neque porro elit NeDque porro
          </p>
          <div className="flex items-center gap-[27px]">
            <FaLocationDot className="text-[#6D95FC] w-8 h-[45px]" />
            <div>
              <p className="text-white font-light text-[21px] tracking-[4%] leading-[34.96px]">
                Office Address
              </p>
              <p className="text-white font-normal text-[16px] tracking-[4%] leading-[26.64px]">
                834710a, 8123740b, 237403 , dhaka, bangladesh
              </p>
            </div>
          </div>
          <div className="py-[39px] flex gap-[27px]">
            <IoMdCall className="text-[#6D95FC] w-8 h-[45px]" />
            <div>
              <p className="text-white font-light text-[21px] tracking-[4%] leading-[34.96px]">
                Call Us
              </p>
              <p className="text-white font-normal text-[16px] tracking-[4%] leading-[26.64px]">
                *************
              </p>
            </div>
          </div>
          <div className="flex gap-[27px]">
            <MdEmail className="text-[#6D95FC] w-8 h-[45px]" />
            <div>
              <p className="text-white font-light text-[21px] tracking-[4%] leading-[34.96px]">
                Mail Us
              </p>
              <p className="text-white font-normal text-[16px] tracking-[4%] leading-[26.64px]">
                email@mail.com
              </p>
            </div>
          </div>
        </div>
        <div className="pt-[50px] md:pt-[134px]">
          <div
            style={{
              background:
                "linear-gradient(180deg, #12192B 0%, rgba(109, 149, 252, 0.35) 50%, #12192B 100%)",
            }}
            className="md:w-[539px] md:h-[606px] rounded-[34px]"
          >
            <div className="p-[20px] md:p-[50px]">
              <h1 className="text-white font-normal text-[17px] tracking-[8.5%] leading-[25.5px] pb-[5px]">
                YOUR NAME
              </h1>
              <input
                type="text"
                class="w-full h-[50px] border border-white p-2 text-white 
                 text-left bg-transparent"
              />

              <h1 className="text-white font-normal text-[17px] tracking-[8.5%] leading-[25.5px] pt-[22px] pb-[5px]">
                YOUR EMAIL
              </h1>
              <input
                type="text"
                class="w-full h-[50px] border border-white p-2 text-white 
                 text-left bg-transparent"
              />
              <h1 className="text-white font-normal text-[17px] tracking-[8.5%] leading-[25.5px] pt-[22px] pb-[5px]">
                YOUR MESSAGE
              </h1>
              <textarea
                type="text"
                class="w-full h-[178px] border border-white p-2 text-white 
                 text-left bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Touch;
