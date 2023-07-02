import React from "react";
import { StepsData } from "../data";
import StepMiddle from "./branches/StepMiddle";
import SmallStep from "./branches/SmallStep";
const Steps = () => {
  const { stepone, steptwo, stepHeader, stepDes, step2Des, step2Header } =
    StepsData;
  return (
    <section className="container mx-auto lg:my-2 my-2" id="COMMUNITY">
      <div className="container mx-auto py-8 md:px-10">
        <div className="flex flex-row">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 border border-gray-300 rounded mr-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-gray-500">Step 1</div>
              <div className="text-gray-500 text-sm">Idea</div>
            </div>
            <div className="h-full border-l-4 border-transparent">
              <div className="border-l-4 mr-4 h-full border-gray-300 border-dashed"></div>
            </div>
          </div>
          <SmallStep stepHeader={stepHeader} stepDes={stepDes} step={stepone} />
        </div>
        <StepMiddle />
        <div className="flex items-start flex-row">
          <div className="border-t-4 border-r-4 border-transparent">
            <div className="w-16 ml-16 h-8 border-l-4 border-gray-300 border-dashed border-b-4 rounded-bl-full"></div>
          </div>
          <div className="border-t-4 border-transparent flex-auto">
            <div className="h-8 mb-4 border-b-4 border-gray-300 border-dashed"></div>
          </div>
        </div>
        <div className="flex flex-row-reverse">
          <div className="hidden md:flex flex-col items-center">
            <div className="w-32 border border-gray-300 rounded ml-4 uppercase flex flex-col items-center justify-center">
              <div className="text-3xl font-black text-gray-500">Step 2</div>
              <div className="text-gray-500 text-sm">Collaboration</div>
            </div>
          </div>
          <div className="flex-auto border rounded  border-gray-300">
            <SmallStep
              stepHeader={step2Header}
              stepDes={step2Des}
              step={steptwo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
