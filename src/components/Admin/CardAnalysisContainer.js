import React from "react";
import CardAnalysis from "./CardAnalysis";

const CardAnalysisContainer = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <CardAnalysis />
      <CardAnalysis />
      <CardAnalysis />
    </div>
  );
};

export default CardAnalysisContainer;
