import React from "react";
const Contact = () => {

  return (
    
    <div className="bg-primary">
      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-12 lg:px-24 bg-primary">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary-dark mb-6">Get in Touch</h2>
          <p className="text-lg text-primary-dark leading-relaxed">
            Have questions? We’re here to help! Reach out to us anytime, and we’ll make sure to get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Form */}
          <div className="bg-primary p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-primary-dark mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary-dark">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full border-secondary-light shadow-sm focus:ring-secondary-light focus:border-secondary-light p-2"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-dark">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border-secondary-light shadow-sm focus:ring-secondary-light focus:border-secondary-light p-2"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary-dark">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full border-secondary-light shadow-sm focus:ring-secondary-light focus:border-secondary-light p-2"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-primary-dark text-primary py-2 px-6 hover:bg-primary hover:text-primary-dark border-2"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-primary-dark mb-6">
              Contact Information
            </h3>
            <p className="text-primary-dark mb-6">
              We're always ready to hear from you. Reach us through the following channels:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-4">
                <img
                  src="https://img.icons8.com/color/48/000000/phone--v1.png"
                  alt="Phone"
                  className="w-6 h-6"
                />
                <span className="text-primary-dark">+923001111111</span>
              </li>
              <li className="flex items-center space-x-4">
                <img
                  src="https://img.icons8.com/color/48/000000/email.png"
                  alt="Email"
                  className="w-6 h-6"
                />
                <span className="text-primary-dark">support@focusclothing.com</span>
              </li>
        
            </ul>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-12 lg:px-24 bg-prmary">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-primary-dark mb-6">
            Find Us on the Map
          </h3>
          <p className="text-lg text-primary-dark mb-6">
            Visit our office or store in person to experience the quality of our products firsthand.
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.998574519997!2d-74.00594148429746!3d40.71277597933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6cf10efb6f3bb01a!2sGoogle!5e0!3m2!1sen!2sus!4v1630568936672!5m2!1sen!2sus"
            className="w-full h-96 border-none"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Contact;
