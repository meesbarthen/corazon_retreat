import React, { useState } from 'react';
import {
  BuildingOffice2Icon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
  }) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        setSubmitted(true);
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="isolate px-6 py-24 bg-[#F4F3ED]  lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#AE8466] sm:text-4xl">
            Contact Us
          </h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit as any)}
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm leading-6 text-[#AE8466] font-sans"
              >
                Voornaam
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  disabled={submitted}
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 font-sans text-[#AE8466] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#A8C0BF] sm:text-sm sm:leading-6 focus:bg-white"
                  {...register('firstName', { required: true })}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm leading-6 text-[#AE8466] font-sans"
              >
                Achternaam
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  disabled={submitted}
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 font-sans text-[#AE8466] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#A8C0BF] sm:text-sm sm:leading-6"
                  {...register('lastName', { required: true })}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm leading-6 font-sans text-[#AE8466]"
              >
                Email address
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  id="email"
                  disabled={submitted}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 font-sans text-[#AE8466] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#A8C0BF] sm:text-sm sm:leading-6"
                  {...register('email', { required: true })}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm leading-6 font-sans text-[#AE8466]"
              >
                Telefoonnummer
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  id="phone-number"
                  disabled={submitted}
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 font-sans text-[#AE8466] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#A8C0BF] sm:text-sm sm:leading-6"
                  {...register('phoneNumber', { required: true })}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm leading-6 font-sans text-[#AE8466]"
              >
                Bericht
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  rows={4}
                  disabled={submitted}
                  className="block w-full rounded-md border-0 px-3.5 py-2 font-sans text-[#AE8466] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#A8C0BF] sm:text-sm sm:leading-6"
                  {...register('message', { required: true })}
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            {!submitted ? (
              <button
                disabled={submitted}
                style={{
                  cursor: submitted ? 'not-allowed' : 'pointer',
                  opacity: submitted ? 0.5 : 1,
                }}
                type="submit"
                className="block w-full rounded-md font-sans bg-[#AE8466] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#A8C0BF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Verstuur
              </button>
            ) : (
              <div className="text-center flex flex-row text-[#AE8466]">
                <img
                  src="/Corazon_BeeldmerkBruin.png"
                  alt=""
                  className="h-8 w-8 self-center"
                />
                Bedankt voor het invullen! Wij komen zo snel mogelijk bij je
                terug.
                <img
                  src="/Corazon_BeeldmerkBruin.png"
                  alt=""
                  className="h-8 w-8 self-center"
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
