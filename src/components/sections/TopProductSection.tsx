import React from "react";
import CardsTopCard from "../cards/CardsTopCard";
import TopProductCard from "../cards/TopProductCard";
import Wrapper from "../Wrapper";
import { topProductData } from "@/utils/TopProductData";

const TopProductSection = () => {
  return (
    <Wrapper>
      <CardsTopCard
        title={"Top Product"}
        subTitle={"Top Product in This Month"}
      />
      <div className="mt-5 gap-3 flex flex-col">
        {topProductData.map((val) => (
          <TopProductCard
            key={val.id}
            title={val.title}
            subTitle={val.subTitle}
            digit={val.digit}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default TopProductSection;
