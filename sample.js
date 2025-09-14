// ----------------------------
// MENU TOGGLE
// ----------------------------
const menu = document.getElementById("menu-content");
const overlay = document.getElementById("menu-overlay");
const btn = document.getElementById("menu-btn");

btn.addEventListener("click", () => {
  menu.classList.toggle("show");
  overlay.classList.toggle("show");
});

// Clicking overlay closes menu
overlay.addEventListener("click", () => {
  menu.classList.remove("show");
  overlay.classList.remove("show");
});

// ----------------------------
// PROFILE EDIT
// ----------------------------
const editBtn = document.getElementById("edit-profile");
const username = document.getElementById("username");
const email = document.getElementById("email");

editBtn.addEventListener("click", () => {
  username.readOnly = !username.readOnly;
  email.readOnly = !email.readOnly;

  if (!username.readOnly) {
    editBtn.textContent = "Save";
    username.focus(); // Focus for better mobile UX
  } else {
    editBtn.textContent = "Edit Profile";
    alert("✅ Profile Updated!");
  }
});

// ----------------------------
// AVATAR UPLOAD
// ----------------------------
const profilePic = document.getElementById("profile-pic");
const uploadInput = document.getElementById("upload-avatar");

profilePic.addEventListener("click", () => {
  uploadInput.click();
});

uploadInput.addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePic.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// ----------------------------
// FEEDBACK SUBMISSION
// ----------------------------
const feedbackText = document.getElementById("feedback-text");
const submitFeedback = document.getElementById("submit-feedback");

submitFeedback.addEventListener("click", () => {
  const feedback = feedbackText.value.trim();
  if (feedback) {
    alert("✅ Feedback submitted: " + feedback);
    feedbackText.value = "";
    feedbackText.blur(); // Close mobile keyboard for better UX
  } else {
    alert("⚠️ Please write something!");
  }
});

// ----------------------------
// PROGRESS BAR
// ----------------------------
const progressBar = document.getElementById("progress-bar");
function setProgress(percent) {
  progressBar.style.width = percent;
  progressBar.textContent = percent;
}

// Example: 57% progress
setProgress("57%");

// ----------------------------
// RESPONSIVENESS HANDLING
// ----------------------------

// Optional: adjust menu / overlay for mobile
function handleResize() {
  if (window.innerWidth <= 600) {
    menu.style.width = "70%"; // Mobile menu width
  } else {
    menu.style.width = "300px"; // Laptop/desktop menu
  }
}

window.addEventListener("resize", handleResize);
handleResize(); // Initialize on load
//for count up//

