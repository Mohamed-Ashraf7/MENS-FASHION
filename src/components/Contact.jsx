import React from "react";
import { contactData } from "../data";
const Contact = () => {
  const { info, image } = contactData;
  return (
    <section className="text-gray-800" id="CONTACT">
      <div
        className="relative h-[300px] container mx-auto overflow-hidden bg-no-repeat bg-cover bg-[10% 10%]"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="container mx-auto text-gray-800 px-4 md:px-12">
        <div className="backdrop-blur-[30px] bg-white bg-opacity-80 rounded-lg shadow-lg mt-[-150px]  py-10 md:py-12 px-4  md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12">
            {info.map((item, idx) => (
              <div
                key={idx}
                className="mb-12 lg:mb-0 text-center mx-auto flex flex-col items-center"
              >
                <span className="text-3xl  text-black mb-6 ">{item.icon}</span>
                <p className="font-primary text-2xl ">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto flex flex-col items-center">
            <form className="w-[80%] text-center">
              <input
                required
                type="text"
                className="form-control  text-secondery text-2xl block w-full mb-6 px-3 py-1.5 text-black  border-b-2 m-0 focus:border-b-blue-gray-700 outline-none"
                id="exampleInput7"
                placeholder="Name"
              />
              <input
                required
                type="email"
                className="form-control  text-secondery block text-2xl w-full mb-6 px-3 py-1.5 text-black  border-b-2 m-0 focus:border-b-blue-gray-700 outline-none"
                id="exampleInput8"
                placeholder="Email address"
              />
              <textarea
                className="mb-6 text-secondery  form-control text-2xl block w-full  px-3 py-1.5 text-black border-b-2 outline-none  focus:border-b-blue-gray-700"
                id="exampleFormControlTextarea13"
                rows="3"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                className="button md:px-[200px] px-[60px] py-[10px] text-2xl "
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
