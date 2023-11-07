// Add JavaScript code for handling navigation and form validation
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("section");
  
    // Handle navigation item clicks
    navLinks.forEach((link) => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        setActiveSection(targetId);
      });
    });
  
    // Set the default active section to "About Me"
    setActiveSection("about");
  
    // Function to set the active section
    function setActiveSection(sectionId) {
      sections.forEach((section) => {
        section.style.display = "none";
      });
  
      const activeSection = document.getElementById(sectionId);
      if (activeSection) {
        activeSection.style.display = "block";
      }
  
      // Highlight the active navigation item
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
  
      const activeLink = document.querySelector(`nav ul li a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  
// Add an event listener to the form
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Get form input values
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    // Validate form inputs
    if (nameInput.value.trim() === "") {
      alert("Name is required");
      nameInput.focus();
      return;
    }
  
    if (!isValidEmail(emailInput.value)) {
      alert("Invalid email address");
      emailInput.focus();
      return;
    }
  
    console.log("Name input value: ", nameInput.value);
    console.log("Email input value: ", emailInput.value);
    console.log("Message input value: ", messageInput.value);
  
    // Function to validate email format
    function isValidEmail(email) {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(email);
    }
  });
});
  