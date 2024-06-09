import React from "react";
import { useFormContext } from "react-hook-form";

const Step2: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const columns = [
    { label: "Qualification", width: "w-1/6" },
    { label: "Subject/Stream/Group", width: "w-1/4" },
    { label: "Board & Name of the Institution/University", width: "w-1/4" },
    { label: "Medium of Instruction", width: "w-1/6" },
    { label: "Year of Passing", width: "w-1/12" },
    { label: "% of Mark", width: "w-1/12" },
  ];

  const rows = [
    {
      label: "10th or O Level Equivalent",
      fields: ["textbox11", "textbox12", "textbox13", "textbox14", "textbox15"],
    },
    {
      label: "PUC/12th or A Level Equivalent",
      fields: ["textbox21", "textbox22", "textbox23", "textbox24", "textbox25"],
    },
    {
      label: "Graduation",
      fields: ["textbox31", "textbox32", "textbox33", "textbox34", "textbox35"],
    },
    {
      label: "Any Other",
      fields: ["textbox41", "textbox42", "textbox43", "textbox44", "textbox45"],
    },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Academic Qualification</h2>
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-col w-full max-w-5xl">
          <div className="flex flex-wrap border border-black">
            {columns.map((column, idx) => (
              <div
                key={idx}
                className={`${column.width} p-2 font-bold border-r border-black`}
              >
                {column.label}
              </div>
            ))}
          </div>

          {rows.map((row, index) => (
            <div key={index} className="flex flex-wrap border-b border-black">
              <div
                className={`${columns[0].width} p-2 border-r border-l border-black`}
              >
                {row.label}
              </div>
              {row.fields.map((field, idx) => (
                <div
                  key={idx}
                  className={`${columns[idx + 1].width}  border-r border-black`}
                >
                  <input
                    type="text"
                    {...register(field)}
                    className="w-full h-full border"
                  />
                  {errors[field] && (
                    <p className="text-red-500">
                      {String(errors[field]?.message)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4 mt-8">
        Parent / Guardian Information:
      </h2>
      <div>
        <div className="flex justify-between mb-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="parentname">Name of the Parent/ Guardian</label>
            <input
              type="text"
              {...register("parentname")}
              className="border border-black"
              id="parentname"
            />
            {errors.parentname?.message && (
              <p className="text-red-500">
                {errors.parentname.message.toString()}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="relationshiptostudent">
              Relationship to the Student
            </label>
            <input
              type="text"
              {...register("relationshiptostudent")}
              className="border border-black"
              id="relationshiptostudent"
            />
            {errors.relationshiptostudent && (
              <p className="text-red-500">
                {errors.relationshiptostudent.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <label htmlFor="occupation">Occupation</label>
            <input
              type="text"
              {...register("occupation")}
              className="border border-black"
              id="occupation"
            />
            {errors.occupation && (
              <p className="text-red-500">{errors.occupation.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="addressforcoresspondence"
          className="text-xl font-bold mb-3 mt-8"
        >
          Address for Correspondence
        </label>
        <textarea
          {...register("addressforcoresspondence")}
          id="addressforcoresspondence"
          cols={160}
          rows={4}
          className="border border-black"
        ></textarea>
        {errors.addressforcoresspondence && (
          <p className="text-red-500">
            {errors.addressforcoresspondence.message}
          </p>
        )}
      </div>

      <div className="flex justify-between mb-10 mt-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="text"
            {...register("mobile")}
            className="border border-black"
            id="mobile"
          />
          {errors.mobile && (
            <p className="text-red-500">{errors.mobile.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            {...register("email")}
            className="border border-black"
            id="email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <label
        htmlFor="personalhealthhistory"
        className="text-xl font-bold mb-3 mt-8"
      >
        Personal Health History :
      </label>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <label htmlFor="challenge" className="flex-1">
            Are you Physically Challenged? (If Yes, Please Indicate)
          </label>
          <div className="flex-1 flex">
            <label className="mr-4">
              <input
                type="radio"
                {...register("challenge")}
                id="yes1"
                value="yes"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                {...register("challenge")}
                id="no1"
                value="no"
              />
              No
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label className="flex-1">
            <input type="checkbox" {...register("hearing")} id="hearing" />
            Hearing
          </label>
          <label className="flex-1">
            <input type="checkbox" {...register("ortho")} id="ortho" />
            Orthopedic
          </label>
          <label className="flex-1">
            <input type="checkbox" {...register("visual")} id="visual" />
            Visual
          </label>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="blind" className="flex-1">
            Do you have Color Blindness?
          </label>
          <div className="flex-1 flex">
            <label className="mr-4">
              <input
                type="radio"
                {...register("blind")}
                id="yes2"
                value="yes"
              />
              Yes
            </label>
            <label>
              <input type="radio" {...register("blind")} id="no2" value="no" />
              No
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label htmlFor="disable" className="flex-1">
            Do you have Development (or) Learning Disability?
          </label>
          <div className="flex-1 flex">
            <label className="mr-4">
              <input
                type="radio"
                {...register("disable")}
                id="yes3"
                value="yes"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                {...register("disable")}
                id="no3"
                value="no"
              />
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
