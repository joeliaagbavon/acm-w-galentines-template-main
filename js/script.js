document.addEventListener("DOMContentLoaded", function () {
    /*
    🎯 Function: openEnvelope
*/
    function openEnvelope() {
        let envelope = document.querySelector('.envelope'); // 🔍 Selects the envelope element
        envelope.classList.add('jump-spin'); // 🎬 Adds animation to make it spin and fly off the screen
        
        setTimeout(() => {
            window.location.href ='mainpage.html' // ⏳ Waits for the animation to complete, then redirects
        }, 1000); // ⏱ Challenge: What happens if you change 1000 to 500? (Hint: Adjusts animation timing)
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

    let noMessages = [
        "Are you sure? 💔",
        "Don't you love me, pookie? 🥺",
        "Why are you doing this to me?😭",
        "No, its fine, I get it, you hate me...",
        "FRICK YOU, STOP RESISTING! 😡",
        "WHY DO YOU HATE ME SO MUCH???",
        "FINE, BE LIKE THAT, IDC ANYMORE! 😤",
        "GOOD LUCK FINDING SOMEONE BETTER!",
        "You're still saying no? ....kinda embarrassing for you... 🫥",
        "Are you not tired, I know I am... 🥱",
        "PLEASE IM DESPEARATE! "
    ];

    let clickCount = 0; 

    function changeNo() {
        let yesButton = document.querySelector(".yes-button");
        let noButton = document.querySelector(".no-button");
    
        clickCount++;
        if (clickCount < noMessages.length) {
            noButton.innerText = noMessages[clickCount];
        } else {
            // Reset or hide the noButton if you want to stop at the last message
            noButton.style.display = "none"; // This hides the "No" button when all messages are shown
        }
    
        // Increase font size of "Yes" button
        let currentYesFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        let newYesSize = parseFloat(currentYesFontSize) * 1.2; // Scale font size up by 20% instead of doubling
        yesButton.style.fontSize = newYesSize + 'px';
        yesButton.style.transition = "font-size 0.3s"; // Add transition for smooth effect
        
       
        
        // Change text of "Yes" button after all messages are shown
        if (clickCount === noMessages.length) {    
        yesButton.innerText = "HA! GOTCHA!"; 
        }
    }
    function sayYes() {
        window.location.href = "yespage.html";
    }
document.querySelector(".no-button")?.addEventListener("click", changeNo);
document.querySelector(".yes-button")?.addEventListener("click", sayYes);
});
