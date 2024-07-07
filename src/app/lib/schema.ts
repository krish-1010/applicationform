import { z } from "zod";

// Type guard to check if the value is a FileList
function isFileList(value: unknown): value is FileList {
  return typeof FileList !== "undefined" && value instanceof FileList;
}

function checkFileType(fileList: FileList) {
  const file = fileList[0];
  if (file) {
    const fileType = file.type.split("/").pop();
    return fileType === "jpeg" || fileType === "png" || fileType === "jpg";
  }
  return false;
}

const imgSchema = z
  .any() // Use any as the initial type
  .refine((value) => typeof window === "undefined" || isFileList(value), {
    message: "Invalid file input.",
  })
  .refine(
    (fileList) =>
      typeof window === "undefined" || (fileList as FileList).length > 0,
    {
      message: "Image is required",
    }
  )
  .refine(
    (fileList) =>
      typeof window === "undefined" || checkFileType(fileList as FileList),
    {
      message: "Only .jpg, .jpeg, and .png formats are supported.",
    }
  )
  .refine(
    (fileList) =>
      typeof window === "undefined" ||
      (fileList as FileList)[0]?.size <= 5 * 1024 * 1024,
    {
      message: "File size must be less than 5MB.",
    }
  );
// Regex to match dd/mm/yyyy format
const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
const stringOnlyRegex = /^[a-zA-Z\s]*$/;
const addressRegex = /^(?=.*[A-Za-z])[A-Za-z0-9\s,.-]+$/;
const numberOnlyRegex = /^\d+$/;
const numberOnlyRegexWithTrailingSpaces = /^\d+\s*$/;
const numericFieldSchema = z
  .string()
  .regex(/^\d+$/, { message: "This field must be a number" });

//dateregex:
// .regex(dateRegex, { message: "Invalid date format, expected dd/mm/yyyy" })
//   .refine(dateString => {
//     const [day, month, year] = dateString.split('/').map(Number);
//     const date = new Date(year, month - 1, day);
//     return (
//       date.getFullYear() === year &&
//       date.getMonth() === month - 1 &&
//       date.getDate() === day
//     );
//   }, { message: "Invalid date" }),

function checkYear(value: string) {
  const trimmedValue = value.trim();
  const year = Number(trimmedValue);
  // console.log("Trimmed Year:", year);
  return year >= 1900 && year <= 2100;
}

function checkPercentage(value: string) {
  value.trim();
  if (Number(value) < 1 || Number(value) > 100) {
    return false;
  }
  return true;
}

const imgSchemaServer = z.any();

export const FormDataSchema = z.object({
  appno: z
    .string({
      required_error: "Age is required",
      invalid_type_error: "Age must be a number",
    })
    .optional(),

  date: z
    .date({
      required_error: "Date is required",
    })
    .refine((date) => date instanceof Date && !isNaN(date.getTime()), {
      message: "Invalid date",
    }),

  fname: z.string().min(1, "First name is required").regex(stringOnlyRegex, {
    message: "Name must not contain numbers or special characters",
  }),
  sname: z
    .string()
    .regex(stringOnlyRegex, {
      message: "Name must not contain numbers or special characters",
    })
    .optional(),
  lname: z.string().min(1, "Last name is required"),
  gender: z
    .string({
      required_error: "Gender is required",
      invalid_type_error: "Gender must be a Selected",
    })
    .min(1, "Gender is required"),

  presadd: z
    .string()
    .min(1, "Present address is required")
    .regex(addressRegex, { message: "Address Cannot contain only numbers" }),
  permadd: z
    .string()
    .min(1, "Permanent address is required")
    .regex(addressRegex, { message: "Address Cannot contain only numbers" }),

  mothertongue: z
    .string()
    .min(1, "Mother tongue is required")
    .regex(stringOnlyRegex, {
      message: "Mother Toungue cannot contain numbers",
    }),
  nationality: z.string().min(1, "Nationality is required"),

  //TODO: check if this works on submission
  dob: z.string().min(1, "Date of birth is required"),

  bloodgroup: z.string().min(1, "Blood group is required"),

  aadhaar: z
    .string()
    .length(12, { message: "Aadhaar number must be exactly 12 digits" })
    .regex(/^[1-9]\d{11}$/, {
      message:
        "Aadhaar number must be a valid 12-digit number starting with a digit from 1-9",
    }),

  pannumber: z.string().optional(),

  mobile: z
    .string()
    .length(10, { message: "Mobile number must be exactly 10 digits" })
    .regex(/^[6-9]\d{9}$/, {
      message:
        "Mobile number must start with a digit from 6 to 9 and be followed by 9 digits",
    }),

  email: z.string().email("Invalid email address"),

  parentmobile: z
    .string()
    .length(10, { message: "Mobile number must be exactly 10 digits" })
    .regex(/^[6-9]\d{9}$/, {
      message:
        "Mobile number must start with a digit from 6 to 9 and be followed by 9 digits",
    }),

  parentemail: z.string().email("Invalid email address"),

  textbox11: z.string().min(1, "required"),
  textbox12: z.string().min(1, "required"),
  textbox13: z.string().min(1, "required"),

  textbox14: z
    .string()
    .min(1, "required")
    .regex(numberOnlyRegexWithTrailingSpaces, { message: "Enter a Valid Year" })
    .refine((value) => checkYear(value), {
      message: "Enter a Valid Year in the first row",
    }),

  textbox15: z
    .string()
    .min(1, "required")
    .regex(numberOnlyRegexWithTrailingSpaces, {
      message: "Enter a Valid Percentage n",
    })
    .refine((value) => checkPercentage(value), {
      message: "Enter a Valid Percentage eg.(75)",
    }),

  textbox21: z.string().min(1, "required"),
  textbox22: z.string().min(1, "required"),
  textbox23: z.string().min(1, "required"),
  textbox24: z
    .string()
    .min(1, "required")
    .regex(numberOnlyRegexWithTrailingSpaces, {
      message: "Enter a Valid Year r",
    })
    .refine((value) => checkYear(value), { message: "Enter a Valid Year" }),
  textbox25: z
    .string()
    .min(1, "required")
    .regex(numberOnlyRegexWithTrailingSpaces, {
      message: "Enter a Valid Percentage n",
    })
    .refine((value) => checkPercentage(value), {
      message: "Enter a Valid Percentage eg.(75)",
    }),

  textbox31: z.string().min(1, "required"),
  textbox32: z.string().min(1, "required"),
  textbox33: z.string().min(1, "required"),
  textbox34: z
    .string()
    .min(1, "required")
    .regex(numberOnlyRegexWithTrailingSpaces, { message: "Enter a Valid Year" })
    .refine((value) => checkYear(value), { message: "Enter a Valid Year" }),
  textbox35: z
    .string()
    .min(1, "required")
    .regex(numberOnlyRegexWithTrailingSpaces, {
      message: "Enter a Valid Percentage n",
    })
    .refine((value) => checkPercentage(value), {
      message: "Enter a Valid Percentage eg.(75)",
    }),

  textbox41: z.string().min(1, "required"),
  textbox42: z.string().min(1, "required"),
  textbox43: z.string().min(1, "required"),
  textbox44: z
    .string()
    .min(1, "required")
    .regex(numberOnlyRegexWithTrailingSpaces, { message: "Enter a Valid Year" })
    .refine((value) => checkYear(value), { message: "Enter a Valid Year" }),
  textbox45: z
    .string()
    .min(1, "required")
    .regex(numberOnlyRegexWithTrailingSpaces, {
      message: "Enter a Valid Percentage n",
    })
    .refine((value) => checkPercentage(value), {
      message: "Enter a Valid Percentage eg.(75)",
    }),

  parentname: z
    .string()
    .min(1, "Parent name is required")
    .regex(stringOnlyRegex, { message: "Only Letters is accepted" }),
  relationshiptostudent: z
    .string()
    .min(1, "Relationship to student is required"),
  occupation: z.string().min(1, "Occupation is required"),
  addressforcoresspondence: z
    .string()
    .min(1, "Address for correspondence is required"),
  challenge: z.string().min(1, "Challenge information is required"),
  hearing: z.boolean().optional(),
  ortho: z.boolean().optional(),
  visual: z.boolean().optional(),
  blind: z.string().optional(),
  disable: z.string().optional(),
  program: z.string().min(1, "Program is required"),
  comments: z.string().optional(),
  paymentMethods: z.array(z.string()),
  otherpaymentmode: z.string().optional(),
  feestatus: z.string().min(1, "Fee status is required"),
  paidstatus: z.string().optional(),
  amountpaid: z.string().min(1, "Amount paid is required"),
  t11: z.string().optional(),
  t12: z.string().optional(),
  t13: z.string().optional(),
  t21: z.string().optional(),
  t22: z.string().optional(),
  t23: z.string().optional(),
  t31: z.string().optional(),
  t32: z.string().optional(),
  t33: z.string().optional(),
  t41: z.string().optional(),
  t42: z.string().optional(),
  t43: z.string().optional(),
  t51: z.string().optional(),
  t52: z.string().optional(),
  t53: z.string().optional(),
  t61: z.string().optional(),
  t62: z.string().optional(),
  t63: z.string().optional(),
  declarationplace: z.string().min(1, "Declaration place is required"),
  declarationdate: z.string().min(1, "Declaration date is required"),
  signApplicant: z.record(z.string(), z.instanceof(File)).optional(),
  signParent: z.record(z.string(), z.instanceof(File)).optional(),
  documents: z.string().optional(),
  documentFiles: z.record(z.string(), z.instanceof(File)).optional(),
  feereceipt: z.string().optional(),
  img: imgSchema,
});
