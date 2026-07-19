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

// স্ক্রল করে যখনই ইউজার স্ট্যাটিস্টিকস সেকশনে আসবে, তখন অ্যানিমেশন শুরু হবে
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect(); // একবার অ্যানিমেশন হলে আর হবে না
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    observer.observe(statsSection);
}
// ===== Hero Image Slider =====
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

if(slides.length > 0) {
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 2500); // 2500 মানে আড়াই সেকেন্ড (2.5s) পর পর ছবি পাল্টাবে
}