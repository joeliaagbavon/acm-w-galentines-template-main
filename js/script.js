document.addEventListener("DOMContentLoaded", function () {
    
    /*
    🎯 Function: openEnvelope
    📌 Purpose: Triggers an animation on the envelope when clicked 
    and then redirects the user to the e-card creation page.
    */
    function openEnvelope() {
        let envelope = document.querySelector('.envelope'); // 🔍 Selects the envelope element
        envelope.classList.add('jump-spin'); // 🎬 Adds animation to make it spin and fly off the screen
        
        setTimeout(() => {
            window.location.href = 'ecard.html'; // ⏳ Waits for the animation to complete, then redirects
        }, 1000); // ⏱ Challenge: What happens if you change 1000 to 500? (Hint: Adjusts animation timing)
    }

    /*
    🎯 Function: generateCard
    📌 Purpose: Collects user input from form fields, applies the background color, 
    and displays the custom e-card.
    */
    function generateCard() {
        let message = document.getElementById('message').value; // 📝 Retrieves user's message
        let background = document.getElementById('background').value; // 🎨 Retrieves selected background color
        let ecard = document.getElementById('ecard'); // 📌 Selects the e-card container

        // 🔴 Challenge: What happens if the user clicks submit without entering a message?
        // 🛑 Answer: This condition prevents an empty message from being submitted.
        if (message.trim() === "") { 
            alert("Please enter a message!"); // ⚠️ Displays an alert if the message is empty
            return;
        }

        ecard.style.backgroundColor = background; // 🎨 Sets the e-card background color
        ecard.innerHTML = `<p style="padding: 20px; color: white; font-size: 18px;">${message}</p>`; 
        // 📝 Inserts user message inside the e-card with inline styling

        ecard.style.display = "block"; // 👀 Makes the e-card visible
        document.getElementById('download').style.display = "block"; // 📥 Displays the download button
    }

    // 🖱️ Challenge: What does "?.addEventListener" do?
    // Answer: The optional chaining (?) prevents errors if the element doesn’t exist.
    document.querySelector(".envelope")?.addEventListener("click", openEnvelope);

    /*
    🎯 Floating Heart Animation
    📌 Purpose: When the thank-you page loads, a floating heart animation is applied.
    */
    let heart = document.querySelector(".hovering-heart");
    if (heart) { 
        heart.classList.add("floating-heart-animation"); // 💖 Adds the floating animation class to the heart
    }
});
