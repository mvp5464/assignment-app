import React from "react";
import CardsTopCard from "../cards/CardsTopCard";
import TopCategoryCard from "../cards/TopCategoryCard";
import Wrapper from "../Wrapper";
import { topCategoryData } from "@/utils/TopCategoryData";
import { LazySvg } from "../lazy-svg";

const TopCategorySection = () => {
  return (
    <Wrapper>
      <CardsTopCard
        title={"Top Category"}
        subTitle={"Top Category in This Month"}
      />
      <div className="mt-5 gap-3 flex flex-col">
        {topCategoryData.map((val) => (
          <TopCategoryCard
            key={val.id}
            bgColor={val.bgColor}
            textColor={val.textColor}
            icon={<LazySvg name={val.icon} />}
            title={val.title}
            digit={val.digit}
            percentage={val.percentage}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default TopCategorySection;
