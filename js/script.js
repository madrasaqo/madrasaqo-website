// Animated Counters Logic
const counters = document.querySelectorAll('.counter');
const speed = 200; // নাম্বার গণনার গতি (অ্যানিমেশন স্পিড)

const animateCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + inc);
                setTimeout(updateCount, 15);
            } else {
                counter.innerText = target + (target === 100 ? "" : "+");
            }
        };
        updateCount();
    });
};

// ===== Perfect Slow Motion Hero Slider (Bulletproof) =====
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

if (slides.length > 0) {
    // শুরুতে সব ছবিকে অ্যানিমেশন ছাড়া ডানদিকে রেডি রাখা
    slides.forEach(slide => {
        slide.style.transition = 'none';
        slide.style.left = '100%';
    });
    
    // প্রথম ছবিটিকে ধীর গতিতে মাঝে আনা
    setTimeout(() => {
        slides[currentSlide].style.transition = 'left 2s ease-in-out';
        slides[currentSlide].style.left = '0';
    }, 100);

    setInterval(() => {
        let previousSlide = currentSlide;
        currentSlide = (currentSlide + 1) % slides.length;

        // ১. আগের ছবিটিকে ধীর গতিতে বামে সরিয়ে দেওয়া
        slides[previousSlide].style.transition = 'left 2s ease-in-out';
        slides[previousSlide].style.left = '-100%';

        // ২. নতুন ছবিটিকে চোখের পলকে (অ্যানিমেশন ছাড়া) ডানদিকে রেডি করা
        slides[currentSlide].style.transition = 'none';
        slides[currentSlide].style.left = '100%';

        // ৩. একটু সময় নিয়ে নতুন ছবিটিকে ধীর গতিতে ডান থেকে মাঝে আনা
        setTimeout(() => {
            slides[currentSlide].style.transition = 'left 2s ease-in-out';
            slides[currentSlide].style.left = '0';
        }, 50); // এই 50 মিলিসেকেন্ড গ্যাপটা ম্যাজিকের মতো কাজ করে!

    }, 5000); // প্রতি ৫ সেকেন্ড পর পর স্লাইড হবে
}