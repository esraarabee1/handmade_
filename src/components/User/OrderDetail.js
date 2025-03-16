import React from "react";
import useTrackorderHook from "../../Hook/trackorder-hook";

const OrderDetail = () => {
  const [trackId, onChangeTrackId, onSubmit, res] = useTrackorderHook();
  return (
    <div className="p-6 border border-gray-300 rounded-lg mt-4">
      {/* Order Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Order ID</h4>
          <span className="font-semibold">{res.id}</span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Amount</h4>
          <span className="font-semibold">
            {res.amount} {res.currencyName}
          </span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Status</h4>
          <span className="font-semibold">{res.orderStatus}</span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Payment Method</h4>
          <span className="font-semibold">{res.paymentMethod}</span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Ordered Date</h4>
          <span className="font-semibold">
            {res.createdAt ? new Date(res.createdAt).toLocaleDateString() : ""}
          </span>
        </div>
      </div>

      <hr className="border-gray-300 mb-6" />

      {/* Pickup and Drop Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Order Address</h4>
          <span className="font-semibold">{res.orderAddress}</span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Delivery Company</h4>
          <span className="font-semibold">
            {res.deliveryCompany ? res.deliveryCompany : ""}
          </span>
        </div>
        <div className="flex flex-col">
          <h4 className="text-gray-600 text-sm">Transaction</h4>
          <span className="font-semibold">
            {res.transactionMoney ? res.transactionMoney : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
