// Form submission handling
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");
  button.classList.add("loading");

  // Collect form data
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  try {
    // Replace with your actual API endpoint
    const response = await fetch("/api/demo-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Thanks! We'll be in touch soon.");
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    alert("Sorry, something went wrong. Please try again.");
  } finally {
    button.classList.remove("loading");
  }
});
