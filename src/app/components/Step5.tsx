import React from "react";
import { useFormContext } from "react-hook-form";

export default function Step5() {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext();

  const formData = watch();

  return (
    <div>
      <h2 className="text-base font-bold mt-4 mb-4">Fee Status</h2>
      <div className="flex gap-8">
        <div className="flex gap-2">
          <input
            type="radio"
            value="Partially Paid"
            {...register("feestatus")}
            id="partiallypaid"
          />
          <label htmlFor="partiallypaid">Partially Paid</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            value="Fully Paid"
            {...register("feestatus")}
            id="fullypaid"
          />
          <label htmlFor="fullypaid">Fully Paid</label>
        </div>
      </div>
      <div className="mt-8 mb-8">
        <label htmlFor="amountpaid">Amount Paid</label>
        <input
          type="text"
          {...register("amountpaid")}
          id="amountpaid"
          className="border-b border-dotted border-black ml-4"
        />
        {errors.amountpaid && (
          <p className="text-red-500">{String(errors.amountpaid?.message)}</p>
        )}
      </div>
      <div className="flex flex-col border-t border-l border-r border-collapse border-spacing-0 border-black mb-8">
        <div className="flex">
          <div className="w-1/3 font-bold border-b border-r border-collapse border-spacing-0 border-black">
            MONTH
          </div>
          <div className="w-1/3 font-bold border-b border-r border-collapse border-spacing-0 border-black">
            DATE
          </div>
          <div className="w-1/3 font-bold border-b border-collapse border-spacing-0 border-black">
            AMOUNT
          </div>
        </div>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex">
            <div className="w-1/3 border-b border-r border-black">
              <input
                type="text"
                {...register(`t${index + 1}1`)}
                className="border-none w-full"
              />
              {errors[`t${index + 1}1`] && (
                <p className="text-red-500">
                  {String(errors[`t${index + 1}1`]?.message)}
                </p>
              )}
            </div>
            <div className="w-1/3 border-b border-r border-black">
              <input
                type="text"
                {...register(`t${index + 1}2`)}
                className="border-none w-full"
              />
              {errors[`t${index + 1}2`] && (
                <p className="text-red-500">
                  {String(errors[`t${index + 1}2`]?.message)}
                </p>
              )}
            </div>
            <div className="w-1/3 border-b border-black">
              <input
                type="text"
                {...register(`t${index + 1}3`)}
                className="border-none w-full"
              />
              {errors[`t${index + 1}3`] && (
                <p className="text-red-500">
                  {String(errors[`t${index + 1}3`]?.message)}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 className="uppercase text-base mt-4 mb-4">Declaration</h2>
        <p className="mb-8">
          I declare that the details furnished in the application form and the
          enclosures are true. As an applicant, I have thoroughly reviewed and
          agree to comply with Monolith&apos;s rules and regulations.
        </p>
      </div>
      <div>
        <div className="border border-black flex flex-col items-center p-2 pl-3 pr-3">
          <h2 className="font-bold mb-2">FOR OFFICE USE:</h2>
          <div className="flex w-full mt-5 mb-4">
            <h2 className="font-bold mb-2">DOCUMENTS:</h2>
            <div className="flex w-full justify-evenly">
              <div>
                <input
                  type="radio"
                  {...register("documents")}
                  id="Marksheet"
                  value="Marksheet"
                />
                <label htmlFor="Marksheet">Marksheet</label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register("documents")}
                  id="Certificate"
                  value="Certificate"
                />
                <label htmlFor="Certificate">Certificate</label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register("documents")}
                  id="Aadhaar"
                  value="Aadhaar"
                />
                <label htmlFor="Aadhaar">Aadhaar</label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register("documents")}
                  id="PAN"
                  value="PAN"
                />
                <label htmlFor="PAN">PAN</label>
              </div>
            </div>
          </div>

          <div className="flex w-full mt-5 mb-4">
            <input
              type="file"
              {...register("documentFile")}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
          </div>

          <div className="mt-4">
            {formData.documents &&
              formData.documentFiles &&
              formData.documentFiles[formData.documents] && (
                <div>
                  <h4 className="font-bold">{formData.documents}</h4>
                  <p>{formData.documentFiles[formData.documents]?.name}</p>
                </div>
              )}
          </div>

          <div className="flex w-full mt-5 mb-4">
            <h2 className="font-bold w-36 mb-2">FEE RECEIPT:</h2>
            <div className="flex w-full justify-evenly">
              <div>
                <input
                  type="radio"
                  {...register("feereceipt")}
                  id="Registration"
                  value="Registration"
                />
                <label htmlFor="Registration">Registration</label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register("feereceipt")}
                  id="Admission Fee"
                  value="Admission Fee"
                />
                <label htmlFor="Admission Fee">Admission Fee</label>
              </div>
              <div>
                <input
                  type="radio"
                  {...register("feereceipt")}
                  id="Installment"
                  value="Installment"
                />
                <label htmlFor="Installment">Installment</label>
              </div>
            </div>
          </div>

          <div className="flex w-full mt-5 mb-4">
            <input
              type="file"
              {...register("feereceiptFile")}
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
          </div>

          <div className="mt-4">
            {formData.feereceipt &&
              formData.feereceiptFiles &&
              formData.feereceiptFiles[formData.feereceipt] && (
                <div>
                  <h4 className="font-bold">{formData.feereceipt}</h4>
                  <p>{formData.feereceiptFiles[formData.feereceipt]?.name}</p>
                </div>
              )}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <label className="text-base font-bold" htmlFor="declarationdate">
            Date:
          </label>
          <input
            type="text"
            {...register("declarationdate")}
            id="declarationdate"
            className="border-b border-dotted border-black"
          />
        </div>
        <div className="flex gap-3">
          <label className="text-base font-bold" htmlFor="declarationplace">
            Place:
          </label>
          <input
            type="text"
            {...register("declarationplace")}
            id="declarationplace"
            className="border-b border-dotted border-black"
          />
        </div>
      </div>
      <div className="flex justify-between mt-8 mb-12">
        <div className="flex gap-3">
          <label className="text-base font-bold" htmlFor="signApplicant">
            Signature of the Applicant:
          </label>
          <input
            type="file"
            {...register("signApplicant")}
            id="signApplicant"
            hidden
          />
          <button
            type="button"
            className={`border pl-2 pr-2 border-black ${
              formData.signApplicant ? "bg-green-500" : "bg-red-500"
            }`}
            onClick={() => document.getElementById("signApplicant")?.click()}
          >
            {formData.signApplicant ? "Uploaded" : "Upload"}
          </button>
          {errors.signApplicant?.message && (
            <p className="text-red-500">
              {String(errors.signApplicant?.message)}
            </p>
          )}
        </div>
        <div className="flex gap-3">
          <label className="text-base font-bold" htmlFor="signParent">
            Signature of the Parent/Guardian:
          </label>
          <input
            type="file"
            {...register("signParent")}
            id="signParent"
            hidden
          />
          <button
            type="button"
            className={`border pl-2 pr-2 border-black ${
              formData.signParent ? "bg-green-500" : "bg-red-500"
            }`}
            onClick={() => document.getElementById("signParent")?.click()}
          >
            {formData.signParent ? "Uploaded" : "Upload"}
          </button>
          {errors.signParent?.message && (
            <p className="text-red-500">{String(errors.signParent?.message)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
