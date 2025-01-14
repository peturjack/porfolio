import React from "react";
import Text from "./typography/Text";
import ContainerBox from "./ContainerBox";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
  return (
    <div id="contacts" className="bg-gradient-to-r from-slate-900 to-slate-700">
      <ContainerBox className="flex flex-col justify-center items-center">
        <Text className="text-white" type="h2">
          Contact
        </Text>

        <ContactForm />
      </ContainerBox>
    </div>
  );
};

export default Contact;
