import React from "react";
import Navbar from "../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Home = () => {
  const customers = [
    { name: "John Doe", review: "Great service! Highly recommended." },
    { name: "Jane Smith", review: "Excellent experience with the team." },
    { name: "Alice Johnson", review: "Awesome product quality." },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-[80vh]">
        <div className="w-full mx-auto bg-white  overflow-hidden flex flex-col md:flex-row p-8">
          <div className="w-1/3">
            <img
              className="h-full w-full object-cover object-center"
              src="/nature.jpeg" // Replace with the relative path of your image
              alt="Your Image"
            />
          </div>
          <div className="w-2/3 p-6 flex flex-col justify-evenly  ">
            <h2 className="text-5xl font-semibold text-gray-800 mb-8 mt-8">
              Heading
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              sed, totam rem saepe asperiores, magnam rerum beatae et aliquam
              possimus ducimus sit velit! Exercitationem nesciunt vel laudantium
              perspiciatis neque inventore temporibus animi officia aliquam,
              libero illo quam maiores eveniet aspernatur. Mollitia maxime iure
              tempore dolores, placeat fugit, voluptate a ratione libero facere
              quidem culpa deleniti minus minima voluptates neque consequatur
              dignissimos pariatur exercitationem cum voluptatibus sint amet.
              Reiciendis officiis cum quaerat adipisci pariatur eius aperiam
              officia, molestiae ea quia vel iusto dicta! Maiores saepe
              veritatis nisi. Inventore eius consequatur eum reiciendis repellat
              ducimus atque autem ipsam necessitatibus, quis adipisci vero quae.
              Necessitatibus odit voluptatibus recusandae suscipit. Quasi facere
              accusantium officiis maxime a magni beatae ad nulla necessitatibus
              voluptates non sit dolorum autem possimus, aperiam laudantium
              doloremque nobis delectus animi ipsa ducimus dolores mollitia.
              Rerum ratione voluptatem maiores nam tempora saepe quia veniam?
              Expedita quod ducimus sed vero sunt officia voluptas?
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="w-full h-[50vh] relative overflow-hidden">
          <img
            src="/nat1.jpg"
            alt="Your Image"
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-500 bg-opacity-10">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-30">
            <div className="bg-white p-8 rounded-lg shadow-lg flex w-[60vw] justify-evenly">
              <div className="mb-4">
                <label htmlFor="place" className="block text-gray-700">
                  Place:
                </label>
                <input
                  type="text"
                  id="place"
                  className="form-input mt-1 block w-full"
                  placeholder="Enter a place"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700">
                  Date:
                </label>
                <input
                  type="date"
                  id="date"
                  className="form-input mt-1 block w-full"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="people" className="block text-gray-700">
                  Number of People:
                </label>
                <input
                  type="number"
                  id="people"
                  className="form-input mt-1 block w-full"
                  placeholder="no of people"
                />
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center">
        <div>
          <h1 className="font-bold text-4xl text-green-500">Reviews</h1>
        </div>
        <div className="h-[40vh] flex justify-center items-center w-[50vw] ">
          <Carousel
            autoPlay={true}
            interval={3000} // Change slide every 3 seconds
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
          >
            {customers.map((customer, index) => (
              <div
                key={index}
                className="p-4 rounded-lg shadow-lg bg-green-100 h-[30vh] flex flex-col justify-center items-center   "
              >
                <h2 className="text-xl font-semibold">{customer.name}</h2>
                <p className="text-gray-600">{customer.review}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
