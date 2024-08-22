import React from "react";
import CardsTopCard from "../cards/CardsTopCard";
import TopProductCard from "../cards/TopProductCard";
import Wrapper from "../Wrapper";

const TopProductSection = () => {
  return (
    <Wrapper>
      <CardsTopCard
        title={"Top Product"}
        subTitle={"Top Product in This Month"}
      />
      <div className="mt-5 gap-3 flex flex-col">
        <TopProductCard
          title={"Logic+ Wireless Mouse"}
          subTitle={"Mouse"}
          digit={"1,240"}
        />
        <TopProductCard
          title={"PS Wireless Controller"}
          subTitle={"Smartphone"}
          digit={"1,189"}
        />
        <TopProductCard
          title={"Ximi Mechanical Keyboard"}
          subTitle={"Smartphone"}
          digit={"1,100"}
        />
        <TopProductCard
          title={"Audia Tech Earphone"}
          subTitle={"Earphone"}
          digit={"908"}
        />
        <TopProductCard
          title={"Sams S14 Pro"}
          subTitle={"Tablet"}
          digit={"900"}
        />
        <TopProductCard
          title={"Sams A13 5G"}
          subTitle={"Smartphone"}
          digit={"870"}
        />
        <TopProductCard
          title={"Jsound P01 TWS"}
          subTitle={"Earphone"}
          digit={"870"}
        />
      </div>
    </Wrapper>
  );
};

export default TopProductSection;
