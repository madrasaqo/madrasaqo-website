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

// ===== Perfect Slow Motion Hero Slider =====
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

if(slides.length > 0) {
    // শুরুতে সব ছবি ডানদিকে রেডি রাখা
    slides.forEach(slide => slide.classList.add('snap'));
    
    // প্রথম ছবিটি স্ক্রিনে আনা
    setTimeout(() => {
        slides[currentSlide].classList.remove('snap');
        slides[currentSlide].classList.add('active');
    }, 50);

    setInterval(() => {
        const previousSlide = currentSlide;
        currentSlide = (currentSlide + 1) % slides.length;
        
        // আগের ছবিটিকে বাম দিকে ধীর গতিতে পাঠিয়ে দেওয়া
        slides[previousSlide].classList.remove('active');
        slides[previousSlide].classList.add('exit');
        
        // নতুন ছবিটিকে ডানদিকে জাদুকরীভাবে রেডি করা (যাতে চোখের পলকে না দৌড়ায়)
        slides[currentSlide].classList.remove('exit');
        slides[currentSlide].classList.add('snap'); 
        
        // ডানদিক থেকে ধীর গতিতে স্ক্রিনের মাঝে আনা
        setTimeout(() => {
            slides[currentSlide].classList.remove('snap');
            slides[currentSlide].classList.add('active');
        }, 50);
        
    }, 4000); // 4 সেকেন্ড পর পর পরিবর্তন হবে
}