const form = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Clear previous message
  formMessage.textContent = '';
  formMessage.style.color = '';

  // Basic validation check
  if (!form.checkValidity()) {
    formMessage.textContent = 'Please fill in all required fields.';
    formMessage.style.color = 'red';
    return;
  }

  // Disable submit button while sending
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' },
    });

    if (response.ok) {
      formMessage.textContent = 'Thank you! Your booking has been received.';
      formMessage.style.color = 'green';
      form.reset();
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    formMessage.textContent = 'Oops! Something went wrong. Please try again later.';
    formMessage.style.color = 'red';
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Submit';
  }
});
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
