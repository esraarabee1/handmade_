import React from "react";
import Breadcrumb from "../Uitily/Breadcrumb";
import OrderSearch from "./OrderSearch";
import OrderDetail from "./OrderDetail";

const OrderDetailsContainer = () => {
  return (
    <div className="container mx-auto p-10">
      <Breadcrumb />
      <OrderSearch />
      <OrderDetail />
    </div>
  );
};

export default OrderDetailsContainer;
