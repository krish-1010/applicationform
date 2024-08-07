-- CreateTable
CREATE TABLE "form_data" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "appno" TEXT,
    "date" TIMESTAMP(3) NOT NULL,
    "fname" TEXT NOT NULL,
    "sname" TEXT,
    "lname" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "presadd" TEXT NOT NULL,
    "permadd" TEXT NOT NULL,
    "mothertongue" TEXT NOT NULL,
    "nationality" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "bloodgroup" TEXT NOT NULL,
    "aadhaar" TEXT NOT NULL,
    "pannumber" TEXT,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "parentmobile" TEXT NOT NULL,
    "parentemail" TEXT NOT NULL,
    "textbox11" TEXT NOT NULL,
    "textbox12" TEXT NOT NULL,
    "textbox13" TEXT NOT NULL,
    "textbox14" TEXT NOT NULL,
    "textbox15" TEXT NOT NULL,
    "textbox21" TEXT NOT NULL,
    "textbox22" TEXT NOT NULL,
    "textbox23" TEXT NOT NULL,
    "textbox24" TEXT NOT NULL,
    "textbox25" TEXT NOT NULL,
    "textbox31" TEXT NOT NULL,
    "textbox32" TEXT NOT NULL,
    "textbox33" TEXT NOT NULL,
    "textbox34" TEXT NOT NULL,
    "textbox35" TEXT NOT NULL,
    "textbox41" TEXT NOT NULL,
    "textbox42" TEXT NOT NULL,
    "textbox43" TEXT NOT NULL,
    "textbox44" TEXT NOT NULL,
    "textbox45" TEXT NOT NULL,
    "parentname" TEXT NOT NULL,
    "relationshiptostudent" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "addressforcoresspondence" TEXT NOT NULL,
    "challenge" TEXT NOT NULL,
    "hearing" BOOLEAN,
    "ortho" BOOLEAN,
    "visual" BOOLEAN,
    "blind" TEXT,
    "disable" TEXT,
    "program" TEXT NOT NULL,
    "comments" TEXT,
    "paymentMethods" TEXT[],
    "otherpaymentmode" TEXT,
    "feestatus" TEXT NOT NULL,
    "paidstatus" TEXT,
    "amountpaid" TEXT NOT NULL,
    "t11" TEXT,
    "t12" TEXT,
    "t13" TEXT,
    "t21" TEXT,
    "t22" TEXT,
    "t23" TEXT,
    "t31" TEXT,
    "t32" TEXT,
    "t33" TEXT,
    "t41" TEXT,
    "t42" TEXT,
    "t43" TEXT,
    "t51" TEXT,
    "t52" TEXT,
    "t53" TEXT,
    "t61" TEXT,
    "t62" TEXT,
    "t63" TEXT,
    "declarationplace" TEXT NOT NULL,
    "declarationdate" TEXT NOT NULL,
    "signApplicant" TEXT,
    "signParent" TEXT,
    "documents" TEXT,
    "documentFiles" JSONB,
    "feereceipt" TEXT,
    "img" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "form_data_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "form_data" ADD CONSTRAINT "form_data_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
