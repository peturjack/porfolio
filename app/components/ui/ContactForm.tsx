"use client";
import React from "react";
import Text from "../typography/Text";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaCircleCheck } from "react-icons/fa6";

const userFormSchema = z.object({
  name: z.string().min(1).max(50),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1).max(200),
});

type UserForm = z.infer<typeof userFormSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<UserForm>({
    resolver: zodResolver(userFormSchema),
  });
  const onSubmit: SubmitHandler<UserForm> = () => {
    setTimeout(() => {
      reset();
    }, 1000);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-lg w-[100%] p-10 md:p-20 md:w-[70%]"
      >
        <Text type="h3" className="font-normal">
          Please fill out the contact form
        </Text>
        <div className="flex gap-2">
          <div className="flex flex-col w-full">
            <label htmlFor="">Name</label>
            <input
              {...register("name")}
              className="p-2 rounded outline-none border-2 focus:border-orange-500 w-full"
              placeholder="name..."
              type="text"
            />
            {errors.name && (
              <div className="text-red-500">{errors.name.message}</div>
            )}
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="">Email</label>
            <input
              {...register("email")}
              className="p-2 rounded outline-none border-2 focus:border-orange-500 w-full"
              placeholder="email..."
              type="text"
            />
            {errors.email && (
              <div className="text-red-500">{errors.email.message}</div>
            )}
          </div>
        </div>
        <div className="my-2">
          <label htmlFor="">Subject</label>
          <textarea
            {...register("subject")}
            className="p-2 rounded outline-none border-2 focus:border-orange-500 w-full resize-none"
            placeholder="subject..."
            maxLength={100}
          />
          {errors.subject && (
            <div className="text-red-500">{errors.subject.message}</div>
          )}
        </div>
        <button
          type="submit"
          className="py-3 px-4 rounded bg-orange-500/20 border-2
         border-orange-500 w-full mt-4 
         active:bg-orange-500 duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
        {isSubmitSuccessful ? (
          <div className="flex flex-col justify-center items-center mt-4 ">
            <FaCircleCheck className="text-green-500 size-10" />
            <p>Message Recieved</p>
          </div>
        ) : null}
      </form>
    </>
  );
};

export default ContactForm;
