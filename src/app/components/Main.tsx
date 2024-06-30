// components/Main.tsx
"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDataSchema } from "../lib/schema";
import { stepFields } from "../lib/importData";
import { z } from "zod";
import Navbar from "./Navbar";
// import { auth } from "@/auth";
import { User } from "next-auth";

const Step1 = dynamic(() => import("./Step1"), {
  ssr: false,
});
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

type FormData = z.infer<typeof FormDataSchema>;

const Main = ({ user }: { user: User | null }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const methods = useForm<FormData>({
    resolver: zodResolver(FormDataSchema),
  });

  const handleNext = async () => {
    const currentStepFields = stepFields[currentStep.toString()];
    const isStepValid = await methods.trigger(currentStepFields);
    console.log(isStepValid);

    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, 5));
    } else {
      currentStepFields.forEach((field) => {
        const fieldState = methods.getFieldState(field);
        if (fieldState.error) {
          console.error(`Error in ${field}: ${fieldState.error.message}`);
        }
      });
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (data: FormData) => {
    console.log(data);
    // Handle final form submission
  };

  return (
    <main className="bg-gray-300 pt-2 pb-2">
      <div className="xl:w-[1200px] bg-white border ml-auto mr-auto p-10 border-black h-[98%]">
        <div className="border-8 h-full p-4 border-blue-900">
          <div className="border-2 border-blue-900 p-8 h-full flex items-center flex-col">
            <Navbar user={user} />
            <></>
            <FormProvider {...methods}>
              <form
                onSubmit={methods.handleSubmit(handleSubmit)}
                className="w-full"
              >
                {currentStep === 1 && <Step1 />}
                {currentStep === 2 && <Step2 />}
                {currentStep === 3 && <Step3 />}
                {currentStep === 4 && <Step4 />}
                {currentStep === 5 && <Step5 />}

                <div className="flex justify-between mt-4">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handlePrevious}
                      className="btn mt-4 mb-4 text-lg"
                    >
                      &laquo; Previous
                    </button>
                  )}
                  {currentStep < 5 && (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="btn mt-4 mb-4 text-lg"
                    >
                      Next &raquo;
                    </button>
                  )}
                  {currentStep === 5 && (
                    <button
                      type="submit"
                      className="btn border pl-2 pr-2 border-black rounded-sm mr-auto ml-auto text-xl mt-4 mb-4"
                    >
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </FormProvider>
          </div>
          <div className="flex justify-center items-center bg-indigo-900 h-20 text-xl text-white">
            <span>www.monolith.acadamy</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
