import React from "react";
import { useFormContext } from "react-hook-form";

const Step3 = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Programs</h2>
      {errors.program?.message && (
        <p className="text-red-500">{String(errors.program.message)}</p>
      )}
      <div className="degree-container flex flex-col mb-4">
        <h2 className="text-lg font-semibold">Degree</h2>
        <div className="flex mb-4">
          <div className="w-1/4">
            <label htmlFor="ug">
              <b>UG</b>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="radio"
              id="ug"
              value="B. Sc Creative Media Technologies"
              {...register("program")}
            />
            <label htmlFor="ug">B. Sc Creative Media Technologies</label>
          </div>
        </div>

        <div className="flex mb-4">
          <div className="w-1/4">
            <label htmlFor="pg">
              <b>PG</b>
            </label>
          </div>
          <div className="flex-1">
            <input
              type="radio"
              id="pg"
              value="M. Sc Creative Media Technologies"
              {...register("program")}
            />
            <label htmlFor="pg">M. Sc Creative Media Technologies</label>
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Certificate Courses</h2>
      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="cc1">
            <b>(a)</b>
          </label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            id="cc1"
            value="Master Certification in AR/VR"
            {...register("program")}
          />
          <label htmlFor="cc1">Master Certification in AR/VR</label>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="cc2">
            <b>(b)</b>
          </label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            id="cc2"
            value="Foundation in Unreal Engine"
            {...register("program")}
          />
          <label htmlFor="cc2">Foundation in Unreal Engine</label>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="cc3">
            <b>(c)</b>
          </label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            id="cc3"
            value="Foundation in Toon Boom"
            {...register("program")}
          />
          <label htmlFor="cc3">Foundation in Toon Boom</label>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Diploma Courses</h2>
      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="dc1">
            <b>(a)</b>
          </label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            id="dc1"
            value="Advanced Diploma in Game Design & Development"
            {...register("program")}
          />
          <label htmlFor="dc1">
            Advanced Diploma in Game Design & Development
          </label>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="dc2">
            <b>(b)</b>
          </label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            id="dc2"
            value="Advanced Diploma in 3D Animation"
            {...register("program")}
          />
          <label htmlFor="dc2">Advanced Diploma in 3D Animation</label>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="dc3">
            <b>(c)</b>
          </label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            id="dc3"
            value="Advanced Diploma in 2D Animation"
            {...register("program")}
          />
          <label htmlFor="dc3">Advanced Diploma in 2D Animation</label>
        </div>
      </div>

      <div className="flex mb-4">
        <div className="w-1/4">
          <label htmlFor="dc4">
            <b>(d)</b>
          </label>
        </div>
        <div className="flex-1">
          <input
            type="radio"
            id="dc4"
            value="PG Diploma in 2D Animation"
            {...register("program")}
          />
          <label htmlFor="dc4">PG Diploma in 2D Animation</label>
        </div>
      </div>

      <h2 className="text-xl font-bold mb-4">Online Courses</h2>
      <div className="flex flex-wrap justify-between">
        <div className="flex-1">
          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc1">
                <b>(a)</b>
              </label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                id="oc1"
                value="Toon Boom Storyboard Pro"
                {...register("program")}
              />
              <label htmlFor="oc1">Toon Boom Storyboard Pro</label>
            </div>
            {errors.program?.message && (
              <p className="text-red-500">{String(errors.program.message)}</p>
            )}
          </div>

          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc2">
                <b>(b)</b>
              </label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                id="oc2"
                value="Toon Boom Harmony"
                {...register("program")}
              />
              <label htmlFor="oc2">Toon Boom Harmony</label>
            </div>
            {errors.program?.message && (
              <p className="text-red-500">{String(errors.program.message)}</p>
            )}
          </div>

          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc3">
                <b>(c)</b>
              </label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                id="oc3"
                value="Game Design"
                {...register("program")}
              />
              <label htmlFor="oc3">Game Design</label>
            </div>
            {errors.program?.message && (
              <p className="text-red-500">{String(errors.program.message)}</p>
            )}
          </div>

          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc4">
                <b>(d)</b>
              </label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                id="oc4"
                value="Game Development"
                {...register("program")}
              />
              <label htmlFor="oc4">Game Development</label>
            </div>
            {errors.program?.message && (
              <p className="text-red-500">{String(errors.program.message)}</p>
            )}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc5">
                <b>(e)</b>
              </label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                id="oc5"
                value="Unreal Engine"
                {...register("program")}
              />
              <label htmlFor="oc5">Unreal Engine</label>
            </div>
            {errors.program?.message && (
              <p className="text-red-500">{String(errors.program.message)}</p>
            )}
          </div>

          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc6">
                <b>(f)</b>
              </label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                id="oc6"
                value="AR/VR"
                {...register("program")}
              />
              <label htmlFor="oc6">AR/VR</label>
            </div>
            {errors.program?.message && (
              <p className="text-red-500">{String(errors.program.message)}</p>
            )}
          </div>

          <div className="flex mb-4">
            <div className="w-1/4">
              <label htmlFor="oc7">
                <b>(g)</b>
              </label>
            </div>
            <div className="flex-1">
              <input
                type="radio"
                id="oc7"
                value="3D Animation"
                {...register("program")}
              />
              <label htmlFor="oc7">3D Animation</label>
            </div>
            {errors.program?.message && (
              <p className="text-red-500">{String(errors.program.message)}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
