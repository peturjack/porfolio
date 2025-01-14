import React from "react";
import Text from "../typography/Text";

const ContactForm = () => {
  return (
    <>
      <form className="bg-white rounded-lg p-20 w-1/2">
        <Text type="h3" className="font-normal">
          Please fill out the contact form
        </Text>
        <div className="flex gap-2">
          <div className="flex flex-col w-full">
            <label htmlFor="">Name</label>
            <input
              className="p-2 rounded outline-none border-2 focus:border-orange-500"
              placeholder="name..."
              type="text"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="">Email</label>
            <input
              className="p-2 rounded outline-none border-2 focus:border-orange-500 "
              placeholder="email..."
              type="text"
            />
          </div>
        </div>
        <div className="my-2">
          <label htmlFor="">Subject</label>
          <textarea
            className="p-2 rounded outline-none border-2 focus:border-orange-500 w-full resize-none"
            placeholder="subject..."
            maxLength={100}
          />
        </div>
        <button
          className="py-3 px-4 rounded bg-orange-500/20 border-2
         border-orange-500 w-full mt-4 
         active:bg-orange-500 duration-200"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default ContactForm;
