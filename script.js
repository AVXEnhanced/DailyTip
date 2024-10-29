const tips = [
    "Use keyboard shortcuts to boost your productivity!",
    "Always back up your data to avoid losing important files.",
    "Keep your software updated to stay secure.",
    "Organize your files and folders for easy access.",
    "Use a password manager to keep track of your passwords.",
    "Disable unnecessary startup programs to speed up boot times.",
    "Clear your cache regularly to free up space.",
    "Set up two-factor authentication for extra security.",
    "Learn to use your terminal for faster navigation.",
    "Regularly check your device's battery health."
];

function generateTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById("techTip").textContent = tips[randomIndex];
}
