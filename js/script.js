function togglePdfFullscreen() {
    const modal = document.getElementById('pdfModal');
    const btn = document.getElementById('pdfFullscreenBtn');

    if (!modal) return;

    // পপ-আপের মেইন ডিভাইনারে 'is-fullscreen' ক্লাস টগল করা
    modal.classList.toggle('is-fullscreen');

    if (modal.classList.contains('is-fullscreen')) {
        if (btn) {
            btn.innerHTML = '🗗';
            btn.title = "ছোট করুন";
        }
    } else {
        if (btn) {
            btn.innerHTML = '⛶';
            btn.title = "ফুলস্ক্রিন করুন";
        }
    }
}