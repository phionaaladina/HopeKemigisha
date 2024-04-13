function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}





var form = document.getElementById('sheetdb-form');
        form.addEventListener("submit", e => {
          e.preventDefault();
          fetch(form.action, {
              method : "POST",
              body: new FormData(document.getElementById("sheetdb-form")),
          }).then(
              response => response.json()
          ).then((html) => {
            // you can put any JS code here
            window.open('message.html', '_blank');

          });
        });






// // remove navlist
// navlist.addEventListener("click",()=>{
//   navlist.classList.remove("active");
//   menuIcon.classList.remove("active");
//   document.body.classList.remove("open");
// })



// Switch between about buttons
const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

console.log("Buttons: ", buttons);
console.log("Contents: ", contents);

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    console.log("Button clicked: ", index);
    contents.forEach(content => content.style.display = 'none');
    contents[index].style.display = 'block';
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});


















// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault(); // Prevent the default form submission

//   // Display a message indicating form submission is in progress
//   document.getElementById("message").textContent = "Submitting..";
//   document.getElementById("message").style.display = "block";
//   document.getElementById("submitButton").disabled = true;

//   // Collect the form data
//   var formData = new FormData(this);

//   // Send a POST request to the Google Apps Script web app
//   fetch("https://script.google.com/macros/s/AKfycbypeptCscfO3XMEpNbvg1KgT1HPqRSbdcVf-03zaq9FIEAzQAzK4PsR7PRGCv2FXTFI/exec", {
//     method: "POST",
//     body: formData
//   })
//     .then(function (response) {
//       // Check if the request was successful
//       if (!response.ok) {
//         throw new Error("Failed to submit the form.");
//       }
//       return response.text(); // Assuming your script returns plain text response
//     })
//     .then(function (data) {
//       // Display a success message
//       document.getElementById("message").textContent = "Data submitted successfully!";
//       document.getElementById("message").style.backgroundColor = "green";
//       document.getElementById("message").style.color = "white";
//       document.getElementById("contactForm").reset(); // Reset the form
//     })
//     .catch(function (error) {
//       // Handle errors and display an error message
//       console.error(error);
//       document.getElementById("message").textContent = "An error occurred while submitting the form.";
//       document.getElementById("message").style.backgroundColor = "red";
//     })
//     .finally(function () {
//       // Enable the submit button and hide the message after a delay
//       document.getElementById("submitButton").disabled = false;
//       setTimeout(function () {
//         document.getElementById("message").textContent = "";
//         document.getElementById("message").style.display = "none";
//       }, 3000); // 3 seconds delay
//     });
// });
