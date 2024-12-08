import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Privacy Policy</h1>

      <div className="space-y-4">
        <p>
          1. Each time that you use this website, you will be bound by the
          current privacy policy applicable at that particular moment, and you
          must review said text in order to confirm that you are in agreement
          with it.
        </p>
        <p>
          2. The personal data that you provide us shall be subject to data
          handling by Focus with the following objectives:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            To develop, fulfill, and execute the sales contract for the products
            that you have acquired or any other contract between both parties.
          </li>
          <li>To tend to your requests.</li>
          <li>
            To provide you with information regarding Focus products (whose
            activities are related to made-to-measure apparel, ready-to-wear
            apparel as well as any other accessories related to the same),
            including the sending of marketing mail-outs in relation to said
            products by email or any other equivalent means of electronic
            communication (such as SMS text message). You can change your
            preferences in relation to the sending of such marketing mail-outs
            in the <strong>Your Account</strong> section.
          </li>
        </ul>

        <p>
          3. Focus, as data holder, is committed to ensuring the confidentiality
          of your personal information and guaranteeing that your access,
          rectification, cancellation, and objection rights are met by sending
          a letter to our corporate address.
        </p>

        <p>
          4. In order to comply with the aforementioned objectives, we must
          convey the information that you have provided us to our legal counsel,
          assuming that you are expressly authorizing us to perform said
          conveyance by registering and providing us with information on this
          website.
        </p>

        <p>
          5. <strong>Cookies:</strong> We use cookies on this website, small
          text files with information on your navigation in this site whose
          principal objective is to improve your experience on the website. 
        </p>

        <p>
          By accepting this privacy policy, you consent to the use of the cookies
          used on this website and which are described on the previously
          indicated page.
        </p>

        <h2 className="text-xl font-semibold mt-6">Disclaimer</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Focus makes every effort to ensure that product images & descriptions
            are as accurate as possible. Please note, however, that there might
            be some minor differences between product images on the website and
            the actual product. Such variations may come about due to extra
            embellishments used during shoots, which may differ from original
            products slightly.
          </li>
          <li>
            All details of Focus’s products are given on the website, and we
            make every effort to guarantee that the information provided is
            accurate. Customers are requested to review this information before
            making purchases.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Privacy;
