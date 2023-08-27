// scrtipt for Buttons & Popups
{
// Get references to the buttons and popups for Student Affairs
const openPaymentCodesButton = document.getElementById("openPaymentCodesButton");
const openLeganMidTermButton = document.getElementById("openLeganMidTermButton");
const openLeganFinalButton = document.getElementById("openLeganFinalButton");
const openMidTermExamResultsButton = document.getElementById("openMidTermExamResultsButton");
const openFinalExamResultsButton = document.getElementById("openFinalExamResultsButton");
const openYourInfoButton = document.getElementById("openYourInfoButton");
const openCertificateButton = document.getElementById("openCertificateButton");
const openMedicalCareButton = document.getElementById("openmedicalcareButton");
const openComplaintsAndSuggestionsButton = document.getElementById("opencomplaintsandsuggestionsButton");

// Get references to the buttons and popups for Courses Affairs
const openAcademicProfileButton = document.getElementById("openpopupAcademicProfile");
const openAnnouncementButton = document.getElementById("openpopupannouncement");
const openCourseEvaluationButton = document.getElementById("openpopupcourseevaluation");
const openCourseRegistrationButton = document.getElementById("opencourseRegistration");
const openGraduationProjectButton = document.getElementById("openGraduationProject");
const openCoursesScheduleButton = document.getElementById("openCoursesScheduleButton");

// Get references to the popups
const popupYourInfo = document.getElementById("popup_Your_Info");
const popupAcademicProfile = document.getElementById("popup_Academic_Profile");
const popupAnnouncement = document.getElementById("popup_announcement");
const popupCertificate = document.getElementById("popup_Certificate");
const popupComplaintsAndSuggestions = document.getElementById("popup_complaints_and_suggestions");
const popupCourseRegistration = document.getElementById("popup_Course_Registration");
const popupCoursesSchedule = document.getElementById("popup_Courses_Schedule");
const popupFinalExamResults = document.getElementById("popup_Final_Exam_Results");
const popupLeganFinal = document.getElementById("popup_legan_Final");
const popupMedicalCare = document.getElementById("popup_medical_care");
const popupMidTermExamResults = document.getElementById("popup_MID_TREM_Exam_Results");
const popupPaymentCodes = document.getElementById("popup_Payment_Codes");
const popupLeganmid = document.getElementById("popup_Legan_mid");
const popupGraduationproject = document.getElementById("popup_Graduation_project");

// Add event listeners for Student Affairs buttons
openPaymentCodesButton.addEventListener("click", function () {
    popupPaymentCodes.style.display = "flex";
});

openLeganMidTermButton.addEventListener("click", function () {
    popupLeganmid.style.display = "flex";
});

openMidTermExamResultsButton.addEventListener("click", function () {
    popupMidTermExamResults.style.display = "flex";
});

openGraduationProjectButton.addEventListener("click", function () {
    popupGraduationproject.style.display = "flex";
});

openYourInfoButton.addEventListener("click", function () {
    popupYourInfo.style.display = "flex";
});

openAcademicProfileButton.addEventListener("click", function () {
    popupAcademicProfile.style.display = "flex";
});

openAnnouncementButton.addEventListener("click", function () {
    popupAnnouncement.style.display = "flex";
});

openCertificateButton.addEventListener("click", function () {
    popupCertificate.style.display = "flex";
});

openComplaintsAndSuggestionsButton.addEventListener("click", function () {
    popupComplaintsAndSuggestions.style.display = "flex";
});

openCourseRegistrationButton.addEventListener("click", function () {
    popupCourseRegistration.style.display = "flex";
});

openCoursesScheduleButton.addEventListener("click", function () {
    popupCoursesSchedule.style.display = "flex";
});

openFinalExamResultsButton.addEventListener("click", function () {
    popupFinalExamResults.style.display = "flex";
});

openLeganFinalButton.addEventListener("click", function () {
    popupLeganFinal.style.display = "flex";
});

openMedicalCareButton.addEventListener("click", function () {
    popupMedicalCare.style.display = "flex";
});

openCourseEvaluationButton.addEventListener("click", function () {
    popupCourseEvaluation.style.display = "flex";
});



// Close the popups when the close button is clicked
const closeButtons = document.querySelectorAll(".close-button");
closeButtons.forEach(function (closeButton) {
    closeButton.addEventListener("click", function () {
        const popup = this.closest(".popup");
        if (popup) {
            popup.style.display = "none";
        }
    });
});

// Helper function to close popups when clicking outside
window.addEventListener("click", function (event) {
    if (event.target.classList.contains("popup")) {
        event.target.style.display = "none";
    }
});
}
//end of script

// scrtipt for Acadimic Profile
{
    function toggleVisibility(pageNumber) {
        var pages = document.getElementsByClassName('page');
        var AcademicInformationtable = document.querySelector('.Academic_Information_table');
        var AcademicInformationtext = document.querySelector('.Academic_Information_text');
      

        for (var i = 0; i < pages.length; i++) {
          pages[i].style.display = 'none';
        }
      
        var selectedPage = document.getElementById('page' + pageNumber);
        selectedPage.style.display = 'block';
        AcademicInformationtable.style.display = 'none';
        AcademicInformationtext.style.display ='none';

      
        window.scrollTo(0, 0);
      }      
}
//end of script

// scrtipt for Announcment
{
    const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let slideIndex = 0;

function showSlide(index) {

    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slider.children.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slider.children.length) % slider.children.length;
    showSlide(slideIndex);
}


const interval = setInterval(nextSlide, 5000);


nextBtn.addEventListener('click', () => {
    clearInterval(interval); 
    nextSlide();
});

prevBtn.addEventListener('click', () => {
    clearInterval(interval); 
    prevSlide();
});

}
//end of script

// scrtipt for Certificate
{
// Get references to the elements
const instructionsSection = document.getElementById('instructions');
const formSection = document.querySelector('form');
const successMessageCER = document.getElementById('successMessageCER');
const creditCardInfo = document.getElementById('creditCardInfo');

// Get references to the button and add a click event listener
const requestButton = document.getElementById('requestButton');
requestButton.addEventListener('click', function () {
    // Hide the instructions and show the form
    instructionsSection.style.display = 'none';
    formSection.style.display = 'block';
});

// Get a reference to the form
const registrationForm = document.querySelector('form');

// Handle form submission
registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form values
    const numberOfCertificates = document.getElementById('certificateNumber').value;
    const to = document.getElementById('to').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    // Perform the desired action, e.g., show a confirmation message
    // For demonstration purposes, we'll just log the form values to the console
    console.log('Number of Certificates:', numberOfCertificates);
    console.log('To:', to);
    console.log('Payment Method:', paymentMethod);

    // Show the success message
    if (paymentMethod === 'cash' || paymentMethod === 'creditCard') {
        successMessageCER.style.display = 'block';
    }

    // If the payment method is "Credit Card," also log credit card info
    if (paymentMethod === 'creditCard') {
        const creditCardNumber = document.getElementById('creditCardNumber').value;
        const cvv = document.getElementById('cvv').value;
        const expiryDate = document.getElementById('expiryDate').value;

        console.log('Credit Card Number:', creditCardNumber);
        console.log('CVV:', cvv);
        console.log('Expiration Date:', expiryDate);
    }
});

// Get reference to the payment method select element
const paymentMethodSelect = document.getElementById('paymentMethod');

// Add an event listener to toggle the visibility of the credit card form section
paymentMethodSelect.addEventListener('change', function () {
    if (paymentMethodSelect.value === 'creditCard') {
        creditCardInfo.style.display = 'block';
    } else {
        creditCardInfo.style.display = 'none';
    }
});
}
//end of script

// scrtipt for Complaints And Suggestion
{
    document.getElementById('feedbackForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
    
        // Get the values from the form (you can handle form data submission to the server here if needed)
    
        // Show the response message after submission
        var responseMessage = document.getElementById('responseMessage');
        responseMessage.style.display = 'block';
    
        // Hide the form
        var formContainer = document.getElementById('feedbackFormContainer');
        formContainer.style.display = 'none';
    });

}
//end of script

// scrtipt for Course Registration
{
// Get references to elements in the DOM
const confirmButton = document.getElementById("confirm-registration");
const termsCheckbox = document.getElementById("terms");
const courseSelectionTable = document.getElementById("course-selection-table");
const courseDetailsTable = document.getElementById("course-details-table");
const page9 = document.getElementById("page9");
const finishButton = document.getElementById("finish_Registration_Button");
const confirmTerms = document.querySelector(".confirm-terms");

// Function to enable the Confirm Registration button when the terms checkbox is checked
function toggleConfirmButton() {
  confirmButton.disabled = !termsCheckbox.checked;
}

// Function to toggle between course selection table and course details table
function showCourseDetails() {
  courseSelectionTable.style.display = "none";
  courseDetailsTable.style.display = "table";
}

// Function to show the course schedule table and hide the course details table
function showScheduleTable() {
  page9.style.display = "block";
  courseDetailsTable.style.display = "none";
  finishButton.style.display = "none";
}

// Function to handle registration confirmation
function confirmRegistration() {
  showCourseDetails();
  confirmButton.style.display = "none"; // Hide the "Confirm Registration" button after it's clicked
  confirmTerms.style.display = "none"; // Hide the terms and checkbox after confirming registration
  toggleFinishButton(); // Check the status of the Finish button after confirming registration
}

// Function to check if all selects have valid doctor and group selections
function toggleFinishButton() {
  const selects = courseDetailsTable.getElementsByTagName("select");
  let allValid = true;

  for (const select of selects) {
    if (select.value === "disabled") {
      allValid = false;
      break;
    }
  }

  finishButton.style.display = allValid ? "block" : "none"; // Show the Finish button if all selects have valid options
  finishButton.disabled = !allValid;
}

// Function to handle changes in doctor and group selections
function handleSelectChange() {
  toggleFinishButton();
}

// Add event listeners
termsCheckbox.addEventListener("change", toggleConfirmButton);
finishButton.addEventListener("click", showScheduleTable);
confirmButton.addEventListener("click", confirmRegistration);

// Add event listener to each select element in the course details table
const selects = courseDetailsTable.getElementsByTagName("select");
for (const select of selects) {
  select.addEventListener("change", handleSelectChange);
}

// Call the toggleConfirmButton and toggleFinishButton functions initially to set the initial state of the buttons
toggleConfirmButton();
toggleFinishButton();

}
//end of script

// scrtipt for Final Exams Results 
{
function toggleVisibility(pageNumber) {
  var pages = document.getElementsByClassName('page');

  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }

  var selectedPage = document.getElementById('page' + pageNumber);
  selectedPage.style.display = 'block';

  window.scrollTo(0, 0);
}
}
//end of script


// scrtipt for Medical Care
{
const form = document.getElementById('appointmentForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Simulate form submission success
  successMessage.style.display = 'block';
  form.reset();
});
}
//end of script


// scrtipt for Payment Codes
{
    function toggleVisibility(pageNumber) {
    var pages = document.getElementsByClassName('page');
  
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display = 'none';
    }
  
    var selectedPage = document.getElementById('page' + pageNumber);
    selectedPage.style.display = 'block';
    
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  }
  }
//end of script

// sscript for rotate-message but.
{
    document.addEventListener('DOMContentLoaded', function () {
      const rotateMessage = document.querySelector('.rotate-message');
      const closeRotateMessageButton = document.getElementById('closeRotateMessage');
    
      closeRotateMessageButton.addEventListener('click', function () {
        rotateMessage.style.display = 'none';
      });
    });
    }
    //end of script
    