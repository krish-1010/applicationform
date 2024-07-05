// components/AuthModal.tsx
import React from "react";
import Link from "next/link";

const AuthModal: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h2 className="text-blue-500 font-bold xl:text-2xl">
          Welcome to Monolith&apos;s Application Form
        </h2>
        <h3>Do you want to create a New form or Load from Previous</h3>
        <Link
          className="rounded-md mt-5 mb-2 bg-lime-500 py-1 px-4 inline-block text-center text-black"
          href="/login"
        >
          Load from Previous
        </Link>
        <span> or </span>
        <Link
          className="rounded-md mt-4 bg-lime-500 py-1 px-4 inline-block text-center text-black"
          href="/register"
        >
          New Form
        </Link>
      </div>
    </div>
  );
};

export default AuthModal;
