import React from "react";
import { Link } from "react-router-dom";

const Faqs = () => {
 
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-center mb-8">FAQs</h1>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold">How can I place an Order?</h2>
            <p className="mt-2 text-gray-600">
              Select your products from this website
           and click Add to cart. Once you have added all your desired items to your Shopping Bag, follow these steps:
            </p>
            <ol className="list-decimal list-inside mt-2 text-gray-600">
              <li>Click on the ‘Shopping Bag’ button and proceed to checkout.</li>
              <li>Select the address and click Next.</li>
              <li>Select a payment method or choose cash on delivery.</li>
              <li>Click on ‘Place Order’.</li>
              <li>Note your order number.</li>
            </ol>
            <p className="mt-2 text-gray-600">Happy Shopping!</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              How do I search for an item on the website?
            </h2>
            <p className="mt-2 text-gray-600">
              Click on the search icon at the top of the website. Enter the name of the product for the men's category, or for kids' products, you can enter the product code and press Enter on your keyboard.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              How long will my order take to arrive?
            </h2>
            <p className="mt-2 text-gray-600">
              Orders will be delivered in 2-3 working days during regular days, and during sales, they will be delivered in 4-5 working days.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">How much is the shipping cost?</h2>
            <p className="mt-2 text-gray-600">
              FLAT Shipping of 200 PKR will be charged on orders below 3000 PKR within Pakistan.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">Can I Cancel My Order?</h2>
            <p className="mt-2 text-gray-600">
              Yes, you can cancel your order only if it has not been dispatched yet. Contact our customer service department to cancel your order.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Is My Personal Information Confidential?
            </h2>
            <p className="mt-2 text-gray-600">
              Your personal information is confidential. We do not rent, sell, barter, or trade email addresses. All your information is kept confidential and will not be disclosed to anybody unless ordered by government authorities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              How Can I Contact The Customer Service Department?
            </h2>
            <p className="mt-2 text-gray-600">
              You can share your queries or comments by calling UAN:{" "}
              <Link
                to="tel:04237404856"
                className="text-blue-600 underline"
              >
                04237404856
              </Link>{" "}
              , or by emailing us at{" "}
              <Link
                to="mailto:info@focusclothing.pk"
                className="text-blue-600 underline"
              >
                info@focusclothing.pk
              </Link>
              .
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Will I Receive The Same Product I See In The Photo?
            </h2>
            <p className="mt-2 text-gray-600">
              Actual product colors may vary from the images shown. Every monitor or mobile display has a different capability to display colors, and lighting conditions at the time the photo was taken can also affect the image's color.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
