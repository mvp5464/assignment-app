import React from "react";
import CardsTopCard from "../cards/CardsTopCard";
import TopCategoryCard from "../cards/TopCategoryCard";
import Wrapper from "../Wrapper";
import PhoneIcon from "../icons/PhoneIcon";
import TabletIcon from "../icons/TabletIcon";
import EarphoneIcon from "../icons/EarphoneIcon";
import LaptopIcon from "../icons/LaptopIcon";
import MouseIcon from "../icons/MouseIcon";
import USBIcon from "../icons/USBIcon";
import CameraIcon from "../icons/cameraIcon";

const TopCategorySection = () => {
  return (
    <Wrapper>
      <CardsTopCard
        title={"Top Category"}
        subTitle={"Top Category in This Month"}
      />
      <div className="mt-5 gap-3 flex flex-col">
        <TopCategoryCard
          bgColor={"bg-[#EAF8FF]"}
          textColor={"text-[#2086BF]"}
          icon={<PhoneIcon />}
          title={"Smartphone"}
          digit={"1,509"}
          percentage={"+12"}
        />
        <TopCategoryCard
          bgColor={"bg-[#FFF0EA]"}
          textColor={"text-[#F86624]"}
          icon={<TabletIcon />}
          title={"Tablet"}
          digit={"1,460"}
          percentage={"-5"}
        />
        <TopCategoryCard
          bgColor={"bg-[#E9FAF7]"}
          textColor={"text-[#22CAAD]"}
          icon={<EarphoneIcon />}
          title={"Earphone"}
          digit={"1,229"}
          percentage={"0"}
        />
        <TopCategoryCard
          bgColor={"bg-[#FEECEE]"}
          textColor={"text-[#EB3D4D]"}
          icon={<LaptopIcon />}
          title={"Laptop & PC"}
          digit={"982"}
          percentage={"+19"}
        />
        <TopCategoryCard
          bgColor={"bg-[#EAF8FF]"}
          textColor={"text-[#2BB2FE]"}
          icon={<MouseIcon />}
          title={"Mouse"}
          digit={"791"}
          percentage={"-25"}
        />
        <TopCategoryCard
          bgColor={"bg-[#FFFAE7]"}
          textColor={"text-[#F9C80E]"}
          icon={<USBIcon />}
          title={"Hardisk & USB Drive"}
          digit={"679"}
          percentage={"+11"}
        />
        <TopCategoryCard
          bgColor={"bg-[#F0F1F3]"}
          textColor={"text-[#4A4C56]"}
          icon={<CameraIcon />}
          title={"Camera"}
          digit={"679"}
          percentage={"+11"}
        />
      </div>
    </Wrapper>
  );
};

export default TopCategorySection;
