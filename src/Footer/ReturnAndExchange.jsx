import React from "react";
import { Link } from "react-router-dom";

const ReturnAndExchange = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 text-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Return and Exchange</h1>

      <div className="space-y-4">
        <p>
          <strong>Online orders</strong> cannot be exchanged at any Focus outlet.
        </p>

        <p>
          <strong>Products during sale</strong> can be exchanged only for size issues or damaged articles.
        </p>

        <p>
          In case of a <strong>lost shipment</strong>, the customer must inform via email or call. After inquiry, if it’s confirmed that the shipment was lost, we will ship the product again.
        </p>

        <p>
          The charges for the exchange of size or product will be borne by customers. If we have sent the wrong size, we will bear the cost.
        </p>

        <p>
          <strong>Qualify for Return:</strong> Return will only be entertained if the wrong or damaged product is sent from our end.
        </p>

        <p>
          <strong>Procedure:</strong> For exchange, email us at{" "}
          <Link
            to="mailto:info@focusclothing.pk"
            className="text-blue-500 underline"
          >
            info@focusclothing.pk
          </Link>{" "}
          or call us at{" "}
          <Link to="tel:04232084053" className="text-blue-500 underline">
            042 32084053
          </Link>{" "}
          during working hours.
        </p>

        <p>
          <strong>Deadline:</strong> The deadline for all exchange & returns is 7 calendar days from the delivery date.
        </p>
      </div>
    </div>
  );
};

export default ReturnAndExchange;
