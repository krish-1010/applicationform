// utils/api.ts

export const submitFormData = async (data: FormData) => {
  try {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Form submission failed");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error submitting form:", error);
    throw error; // Re-throw the error if needed
  }
};
