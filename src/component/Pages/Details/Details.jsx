import teamMembers from "../../../../public/Group.svg";

const Details = () => {
  return (
    <div
      style={{
        background: "linear-gradient(90deg, #000000, rgba(8, 14, 19, 0.758))",
      }}
    >
      <div className="py-20 flex justify-around">
        <div className="flex flex-col items-center justify-center">
          <img src={teamMembers} alt="" />
          <h1 className="text-white font-extrabold text-[64px]">50+</h1>
          <p
            style={{ color: "rgba(109, 149, 252, 1)" }}
            className="font-normal text-[21px] tracking-[4%] leading-[25.73px] text-center pt-[3px]"
          >
            Team members
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={teamMembers} alt="" />
          <h1 className="text-white font-extrabold text-[64px]">50+</h1>
          <p
            style={{ color: "rgba(109, 149, 252, 1)" }}
            className="font-normal text-[21px] tracking-[4%] leading-[25.73px] text-center pt-[3px]"
          >
            Team members
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={teamMembers} alt="" />
          <h1 className="text-white font-extrabold text-[64px]">50+</h1>
          <p
            style={{ color: "rgba(109, 149, 252, 1)" }}
            className="font-normal text-[21px] tracking-[4%] leading-[25.73px] text-center pt-[3px]"
          >
            Team members
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={teamMembers} alt="" />
          <h1 className="text-white font-extrabold text-[64px]">50+</h1>
          <p
            style={{ color: "rgba(109, 149, 252, 1)" }}
            className="font-normal text-[21px] tracking-[4%] leading-[25.73px] text-center pt-[3px]"
          >
            Team members
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
