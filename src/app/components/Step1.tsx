import React, { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import Image from "next/image";

const Step1: React.FC = () => {
  const {
    register,
    formState: { errors },
    control,
  } = useFormContext();

  const imgFile = useWatch({
    control,
    name: "img",
  });

  const [imgPreview, setImgPreview] = useState<string | null>(null);

  useEffect(() => {
    if (imgFile && imgFile.length > 0) {
      const file = imgFile[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setImgPreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    } else {
      setImgPreview(null);
    }
  }, [imgFile]);

  return (
    <div>
      <div className="flex justify-between flex-wrap items-center mb-8">
        <div>
          <div className="flex flex-col">
            <div className="flex mb-4">
              <label htmlFor="appno" className="block w-[112px] mr-2">
                Application No
              </label>
              <input
                type="text"
                id="appno"
                {...register("appno")}
                className="border-b outline-none border-black focus:border-b focus:ring-0"
              />
              {errors.appno?.message && (
                <p>{errors.appno.message.toString()}</p>
              )}
            </div>
            <div className="flex">
              <label htmlFor="date" className="block w-[112px] mr-2">
                Date
              </label>
              <input
                type="text"
                id="date"
                {...register("date")}
                className="border-b outline-none border-black focus:border-b focus:ring-0"
              />
              {errors.date?.message && <p>{errors.date.message.toString()}</p>}
            </div>
          </div>
        </div>
        <div>
          <div className="border border-black border-dotted w-[140px] h-[150px] flex justify-center items-center rounded-md">
            <input
              type="file"
              id="img"
              className="w-full padding-5 h-full"
              {...register("img")}
              accept="image/*"
              hidden
            />
            {errors.img?.message && <p>{errors.img.message.toString()}</p>}
            {imgPreview ? (
              <Image
                src={imgPreview}
                alt="Uploaded"
                width={50}
                height={80}
                className="w-full h-full object-cover rounded-md"
                onClick={() => {
                  document.getElementById("img")?.click();
                }}
              />
            ) : (
              <label
                htmlFor="img"
                className="cursor-pointer pt-12 pb-12 text-center"
              >
                [Upload Image]
              </label>
            )}
          </div>
        </div>
      </div>

      <h2 className="font-bold mt-4 mb-8">
        Student Information: (Name and Details as given in official records)
      </h2>
      <div className="flex justify-between flex-wrap">
        <div className="">
          <label htmlFor="fname" className="">
            First Name
          </label>
          <br />
          <br />
          <input
            type="text"
            id="fname"
            {...register("fname")}
            className="border border-black"
          />
          {errors.fname?.message && <p>{errors.fname.message.toString()}</p>}
        </div>
        <div className="">
          <label htmlFor="sname" className="">
            SurName
          </label>
          <br />
          <br />
          <input
            type="text"
            id="sname"
            {...register("sname")}
            className="border border-black"
          />
          {errors.sname?.message && <p>{errors.sname.message.toString()}</p>}
        </div>
        <div className="">
          <label htmlFor="lname" className="">
            Last Name
          </label>
          <br />
          <br />
          <input
            type="text"
            id="lname"
            {...register("lname")}
            className="border border-black"
          />
          {errors.lname?.message && <p>{errors.lname.message.toString()}</p>}
        </div>
      </div>

      <div className="mt-8">
        <p className="mb-4">Gender</p>
        <div className="flex justify-between">
          <div>
            <input
              type="radio"
              id="male"
              value="male"
              {...register("gender")}
            />
            <label htmlFor="male" className="ml-2">
              Male
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              value="female"
              {...register("gender")}
            />
            <label htmlFor="female" className="ml-2">
              Female
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="trans"
              value="transgender"
              {...register("gender")}
            />
            <label htmlFor="trans" className="ml-2">
              Transgender
            </label>
          </div>
        </div>
        {errors.gender?.message && <p>{errors.gender.message.toString()}</p>}
      </div>

      <div>
        <div className="mt-4">
          <label htmlFor="presadd">Present Address</label>
          <br />
          <textarea
            className="border border-black w-full h-[100px] mt-4 ml-2"
            id="presadd"
            {...register("presadd")}
            rows={3}
            cols={80}
          ></textarea>
          {errors.presadd?.message && (
            <p>{errors.presadd.message.toString()}</p>
          )}
        </div>
        <div className="mt-4">
          <label htmlFor="permadd"> Permanent Address</label>
          <br />
          <textarea
            className="border border-black w-full h-[100px] mt-4 ml-2"
            id="permadd"
            {...register("permadd")}
            rows={3}
            cols={80}
          ></textarea>
          {errors.permadd?.message && (
            <p>{errors.permadd.message.toString()}</p>
          )}
        </div>
      </div>

      <div className="mb-14">
        <div className="flex flex-wrap justify-between mt-6">
          <div>
            <div className="mb-4">
              <label htmlFor="mothertongue">Mother Tongue</label>
            </div>
            <input
              type="text"
              id="mothertongue"
              {...register("mothertongue")}
              className="border border-black w-[224px] h-7"
            />
            {errors.mothertongue?.message && (
              <p>{errors.mothertongue.message.toString()}</p>
            )}
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="nationality"> Nationality</label>
            </div>
            <select
              id="nationality"
              {...register("nationality")}
              className="border border-black w-[224px] h-7 mr-20"
            >
              <option value="">Select a Country</option>
              <option value="India">India</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="Australia">Australia</option>
            </select>
            {errors.nationality?.message && (
              <p>{errors.nationality.message.toString()}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-6">
          <div>
            <div className="mb-4">
              <label htmlFor="dob">Date of Birth</label>
            </div>
            <input
              type="date"
              id="dob"
              {...register("dob")}
              className="border border-black w-[224px] h-7"
            />
            {errors.dob?.message && <p>{errors.dob.message.toString()}</p>}
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="bloodgroup">Blood Group</label>
            </div>
            <input
              type="text"
              id="bloodgroup"
              {...register("bloodgroup")}
              placeholder="O+ve"
              className="border border-black w-[224px] h-7 mr-20"
            />
            {errors.bloodgroup?.message && (
              <p>{errors.bloodgroup.message.toString()}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-6">
          <div>
            <div className="mb-4">
              <label htmlFor="aadhaar">Aadhaar No</label>
            </div>
            <input
              type="text"
              id="aadhaar"
              {...register("aadhaar")}
              className="border border-black w-[224px] h-7"
            />
            {errors.aadhaar?.message && (
              <p>{errors.aadhaar.message.toString()}</p>
            )}
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="passport">Passport No</label>
            </div>
            <input
              type="text"
              id="passport"
              {...register("passport")}
              className="border border-black w-[224px] h-7 mr-20"
            />
            {errors.passport?.message && (
              <p>{errors.passport.message.toString()}</p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap justify-between mt-6">
          <div>
            <div className="mb-4">
              <label htmlFor="mobile">Mobile</label>
            </div>
            <input
              type="text"
              id="mobile"
              {...register("mobile")}
              className="border border-black w-[224px] h-7"
            />
            {errors.mobile?.message && (
              <p>{errors.mobile.message.toString()}</p>
            )}
          </div>
          <div>
            <div className="mb-4">
              <label htmlFor="email">Email</label>
            </div>
            <input
              type="text"
              id="email"
              {...register("email")}
              className="border border-black w-[224px] h-7 mr-20"
            />
            {errors.email?.message && <p>{errors.email.message.toString()}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
