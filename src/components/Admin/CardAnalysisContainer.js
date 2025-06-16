import React from "react";
import CardAnalysis from "./CardAnalysis";

const CardAnalysisContainer = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <CardAnalysis
        title="Sales"
        sales={2450.75}
        volume={120}
        period="This Week"
      />

      <CardAnalysis
        title="Vendors"
        sales={450}
        volume={120}
        period="This Week"
      />

      <CardAnalysis
        title="Customers"
        sales={450}
        volume={120}
        period="This Week"
      />
    </div>
  );
};

export default CardAnalysisContainer;
