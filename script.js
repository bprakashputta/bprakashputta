const sections = [
    { title: "Bhanu Prakash Putta", subtitle: "Quant Developer | Software Engineer" },
    { title: "Engineering for Performance", subtitle: "Python | C++ | Java | High-Performance Computing | Web Development" },
    { title: "Turning Data into Market Signals", subtitle: "Extracting Alpha | Market Insights | Trading Strategies" },
    { title: "AI That Moves Markets", subtitle: "Machine Learning | NLP | Predictive Analytics" },
    { title: "From Research to Execution", subtitle: "Backtesting | Automation | Strategy Development" },
    { title: "Let’s Connect", subtitle: "linkedin.com/in/bprakashputta | github.com/bprakashputta" }
];

let index = 0, charIndex = 0, deleting = false;
let speed = 70, eraseSpeed = 40, delay = 3000;

const typingText = document.getElementById("typing-text");
const subText = document.getElementById("subtext");

function typeEffect() {
    let { title, subtitle } = sections[index];

    if (!deleting) {
        typingText.textContent = title.substring(0, charIndex + 1);
        subText.textContent = subtitle.substring(0, charIndex + 1);
        charIndex++;

        typingText.style.opacity = "1";
        subText.style.opacity = "1";

        if (charIndex === title.length) {
            setTimeout(() => deleting = true, delay);
        }
    } else {
        typingText.textContent = title.substring(0, charIndex - 1);
        subText.textContent = subtitle.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            index = (index + 1) % sections.length;
            deleting = false;
        }
    }

    setTimeout(typeEffect, deleting ? eraseSpeed : speed);
}

document.addEventListener("DOMContentLoaded", typeEffect);
