function sendWaMessage() {
    const input = document.getElementById('waInputMessage');
    if (!input) return;
    
    const message = input.value.trim();
    const phoneNumber = "8801707532306"; // আপনার নম্বর

    if (message !== "") {
        const encodedMessage = encodeURIComponent(message);
        
        // মোবাইল নাকি পিসি ডিটেক্ট করা
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
        
        let whatsappUrl = "";
        
        if (isMobile) {
            // মোবাইলে: সরাসরি হোয়াটসঅ্যাপ অ্যাপে চ্যাট খুলে যাবে
            whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`;
        } else {
            // পিসিতে: api.whatsapp বাইপাস করে সরাসরি WhatsApp Web-এ চলে যাবে
            whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        }
        
        window.open(whatsappUrl, '_blank');
        
        input.value = "";
        toggleWaChat();
    }
}