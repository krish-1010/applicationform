import React from "react";
import { useFormContext } from "react-hook-form";

export default function Step4() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2 className="font-bold uppercase text-md mb-4">Notes:</h2>
      <p className="">
        {" "}
        Any false information given in the Application shall be reason for
        disciplinary action against the Applicant. <br />
        <br /> Registration Fee, Admission Fee, once paid, are Non-refunded.{" "}
        <br />
        <br /> Government Medical Practitioner Certified Medical Certified and
        Evaluation Report Should be produced in case od any medical condition{" "}
        <br />
        <br /> Admission of the student will be confirmed only after thorough
        verification of the submitted Medical Certificate (or) Evaluation Report
        and Monolith reserves the authority to either accept or reject the
        application or withdraw the admission at any point during the course.
      </p>

      <div className="flex flex-col">
        <label htmlFor="comments" className="text-xl font-bold mb-3 mt-8">
          Comments from the Interview :
        </label>
        <textarea
          {...register("comments")}
          id="comments"
          cols={160}
          rows={4}
          className="border border-black"
        />
        {errors.comments && (
          <p className="text-red-500">{String(errors.comments?.message)}</p>
        )}

        <div className="text-xl font-bold mb-3 mt-8">Payment Mode:</div>
        <div className="grid grid-cols-5 gap-2">
          <label>
            <input type="checkbox" {...register("paymentMethods")} />
            Cash
          </label>
          <label>
            <input type="checkbox" {...register("paymentMethods")} />
            Cheque
          </label>
          <label>
            <input type="checkbox" {...register("paymentMethods")} />
            DD
          </label>
          <label>
            <input type="checkbox" {...register("paymentMethods")} />
            NEFT
          </label>
          <label>
            <input type="checkbox" {...register("paymentMethods")} />
            RTGS
          </label>
          <label>
            <input type="checkbox" {...register("paymentMethods")} />
            NACH
          </label>
          <label>
            <input type="checkbox" {...register("paymentMethods")} />
            Credit Card
          </label>
          <label>
            <input type="checkbox" {...register("paymentMethods")} />
            Debit Card
          </label>
          <label>
            <input type="checkbox" {...register("paymentMethods")} />
            GPay
          </label>
          <label>
            <input type="checkbox" {...register("paymentMethods")} />
            Phone Pe
          </label>
        </div>

        <div className="mt-8 mb-8">
          <label>
            <b className="mr-2">Others </b>
            <input
              type="text"
              id="otherpay"
              {...register("otherpay")}
              className="border-b border-dotted border-black"
            />
          </label>
          {errors.otherpay && (
            <p className="text-red-500">{String(errors.otherpay?.message)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
