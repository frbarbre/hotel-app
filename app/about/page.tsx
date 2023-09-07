import React from 'react';

function About() {
  return (
    <div className="bg-gray-100">
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is simple: to connect you with the ideal hotel for your
          needs, preferences, and budget. We know that every traveler is unique,
          and that's why we've created a user-friendly platform that allows you
          to tailor your hotel search to your specific requirements. Whether
          you're seeking luxury accommodations, a budget-friendly stay, or
          something in between, we've got you covered.
        </p>
      </section>
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="space-y-4">
          <li>
            <h3 className="text-xl font-semibold">Comprehensive Search</h3>
            <p className="text-gray-700">
              We've partnered with a vast network of hotels worldwide to provide
              you with an extensive selection of options. From boutique hotels
              in bustling city centers to cozy inns nestled in picturesque
              landscapes, you'll find them all here.
            </p>
          </li>
          <li>
            <h3 className="text-xl font-semibold">User-Friendly Interface</h3>
            <p className="text-gray-700">
              Our website is designed with you in mind. Our intuitive search
              filters and easy-to-navigate interface ensure that you can quickly
              and effortlessly find the perfect hotel.
            </p>
          </li>
          {/* Add more list items for each point */}
        </ul>
      </section>
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-gray-700">
          Behind Hotel Locator is a dedicated team of travel enthusiasts who are
          passionate about helping you make the most of your travels. We're
          constantly working to improve our platform, adding new features, and
          expanding our hotel database to ensure that you have access to the
          best options out there.
        </p>
      </section>
      <section className="container mx-auto py-8">
        <h2 className="text-2xl font-semibold mb-4">Get Started Today!</h2>
        <p className="text-gray-700">
          Ready to find your perfect hotel? Start your search now on Hotel
          Locator and embark on your next adventure with confidence. Whether
          you're looking for a cozy bed and breakfast, a luxurious resort, or a
          budget-friendly motel, we're here to make your hotel booking
          experience as seamless as possible.
        </p>
      </section>
    </div>
  );
}

export default About;
