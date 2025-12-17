import BreadCumb from "@/app/Components/Common/BreadCumb";
import Pricing5 from "@/app/Components/Pricing/Pricing5";
import React from "react";

const page = () => {
  return (
    <div>
      <BreadCumb
        bgimg="/assets/images/bg/breadcumgBg.png"
        Title="Paket Harga"
      ></BreadCumb>
      <Pricing5></Pricing5>
    </div>
  );
};

export default page;
