import React from "react";
import Section from "./Section";
import AboutButton from "./Search/AboutButton/AboutButton";


const AboutUs = () => {
  return (
    <div>
      
      <AboutButton/>
      

    <div>
    <Section/>
    </div>    

      {/* Introduction Section */}
      <section className="py-16 px-4 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-primary-dark mb-6">Who We Are</h2>
          <p className="text-lg text-primary-dark leading-relaxed">
            Welcome to <span className="font-semibold text-primary-dark">Focus Clothing</span>, your ultimate destination for premium fashion and style. Since our inception, we have been committed to delivering exceptional designs and high-quality clothing to help you stand out and feel confident in every situation. Our mission is to blend modern trends with timeless elegance, ensuring every piece in our collection resonates with your unique personality.
          </p>
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-12 lg:px-24 py-12 bg-primary">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://focusclothing.pk/cdn/shop/files/1_ed7d4c49-b242-4c4b-a84a-d23a4cefce84_1270x.jpg?v=1704101183"
            alt="High Quality Clothing"
            className="w-full max-w-lg"
          />
        </div>
        {/* Text */}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-semibold text-primary-dark mb-4">Our Philosophy</h3>
          <p className="text-primary-dark text-lg leading-relaxed">
            At Focus Clothing, we believe fashion is more than just apparel; it’s an expression of who you are. We strive to bring you collections that are crafted with passion and precision, ensuring that every item you wear tells a story. Our commitment to sustainability and ethical practices drives our approach to sourcing, designing, and producing our products.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-primary-dark text-center mb-12">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "A",
              role: "Founder & CEO",
              img: "https://media.istockphoto.com/id/2154829518/photo/modern-office-interior-with-workplace-work-desk-with-armchairs-near-window.webp?a=1&b=1&s=612x612&w=0&k=20&c=B73a_AYjsrKYljvNih_-hHbTdggY1c9o6NVw15kNrb8=",
            },
            {
              name: "B",
              role: "Lead Designer",
              img: "https://media.istockphoto.com/id/1575907553/photo/director-office-interior-design-computer-generated-image-of-office-architectural.webp?a=1&b=1&s=612x612&w=0&k=20&c=C6M9F5fHfWX3MjYrq46ZImMrguT-sDce6uTwrY4HL0I=",
            },
            {
              name: "C",
              role: "Marketing Head",
              img: "https://images.unsplash.com/photo-1665686310429-ee43624978fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q0VPfGVufDB8fDB8fHww",
            },
            {
              name: "D",
              role: "Operations Manager",
              img: "https://images.unsplash.com/photo-1444720895098-cbd6b640c909?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
            },
          ].map((teamMember) => (
            <div key={teamMember.name} className="text-center">
              <img
                src={teamMember.img}
                alt={teamMember.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h4 className="font-semibold text-lg">{teamMember.name}</h4>
              <p className="text-primary-dark">{teamMember.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-primary px-4 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary-dark mb-6">Our Vision</h2>
          <p className="text-lg text-primary-dark leading-relaxed">
            To inspire confidence and individuality through our designs, creating a world where fashion empowers people to embrace their true selves.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
