


// // Speech recognition setup
// const recognition = new (window.SpeechRecognition ||
//     window.webkitSpeechRecognition)();
// recognition.lang = "en-US";

// const btn = document.querySelector("#listen-btn");
// let isListening = false; // To avoid multiple instances

// // Function to convert text to speech
// function speak(text) {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "hi-IN"; // Set language to Hindi
//     window.speechSynthesis.speak(utterance);
// }

// // Function to handle recognized commands
// function handleCommand(command) {
//     console.log("Recognized Command: ", command);
//     if (command.includes("open youtube") || command.includes("open yt")) {
//         speak("यूट्यूब खोल रहा हूँ...");
//         window.open("https://www.youtube.com", "_blank");
//     } else if (command.includes("open google")) {
//         speak("गूगल खोल रहा हूँ...");
//         window.open("https://www.google.com", "_blank");
//     } else if (command.includes("open facebook")) {
//         speak("फेसबुक खोल रहा हूँ...");
//         window.open("https://www.facebook.com", "_blank");
//     } else if (command.includes("open linkedin")) {
//         speak("लिंक्डइन खोल रहा हूँ...");
//         window.open("https://www.linkedin.com", "_blank");
//     } else if (command.includes("open whatsapp")) {
//         speak("व्हाट्सएप खोल रहा हूँ...");
//         window.open("https://www.whatsapp.com", "_blank");
//     } else if (command.includes("what is your name")) {
//         speak("मेरा नाम भारत है। मुझे उज्जवल तिवारी ने बनाया है।");
//     } else if (command.includes("what is react js")) {
//         speak("React JS एक जावास्क्रिप्ट लाइब्रेरी है जो यूजर इंटरफेस बनाने में उपयोग होती है")

//     } else if (command.includes("what is blockchain")) {
//         speak("Blockchain एक decentralized डिजिटल लेज़र है जो डेटा को सुरक्षित और पारदर्शी तरीके से स्टोर करता है। ब्लॉकचेन एक विकेंद्रीकृत तकनीक है और क्रिप्टो करेंसी इस पर आधारित एक एप्लीकेशन है। ब्लॉकचेन तकनीक वितरित लेजर (distributed ledger) टेक्नोलॉजी का एक हिस्सा है, जँहा ब्लॉकचेन में डाटा को ब्लॉक्स में स्टोर किया जाता हैं। इसमें ब्लॉक्स की एक श्रेणी रहती है, जिनमें सूचनाएं जँहा ब्लॉकचेन में डाटा को ब्लॉक्स में स्टोर किया जाता हैं। इसमें ब्लॉक्स की एक श्रेणी रहती है, जिनमें सूचनाएं होती है और ये सूचनाएं क्रिप्टोग्राफी के जरिए एनकोडेड होती हैं। सरल शब्दों में ब्लॉकचेन को इलेक्ट्रॉनिक डाटाबेस भी कहते हैं। क्रिप्टोग्राफ़ी की बात करें तो यह डाटा को स्टोर करने और आगे ट्रांसमीट करने का एक तरीका हैं। अगर ब्लॉकचेन का प्रयोग पैसे ट्रांसफर के लिए किया जा रहा है तो ब्लॉक्स में सेंडर का नाम रिसीवर का नाम और अमाउंट की जानकारी होती है इसके अलावा ब्लॉक्स में एक हैश(HASH) भी होता है, हैश यूनिक आइडेंटिटी कार्ड्स को कहां जाता है। इस हैश की तुलना आप फिंगरप्रिंट से भी कर सकते हैं जैसे फिंगरप्रिंट यूनिक होता है वैसे ही हर हैश यूनिक होता हैं।");
//     }

//     // else if (command.includes(" who is director of iit patna ")) {
//     //         speak(" DR. टी.एन. सिंह, आईआईटी पटना के director हैं।");





//      else {
//         // Perform a Google search if command not recognized
//         speak("मैं गूगल पर खोज रहा हूँ।");
//         window.open(
//             `https://www.google.com/search?q=${encodeURIComponent(command)}`,
//             "_blank"
//         );
//     }
// }

// // Attach click event listener to the button
// btn.addEventListener("click", function () {
//     if (isListening) return; // Prevent multiple instances

//     speak("नमस्ते, मैं आपकी कैसे मदद कर सकता हूँ?");
//     isListening = true;

//     // Delay to ensure greeting completes before starting recognition
//     setTimeout(() => {
//         btn.innerHTML = "सुन रहा हूँ...👂";
//         btn.classList.add("listening");
//         console.log("Recognition started");
//         recognition.start();
//     }, 2500);
// });

// // When a result is received
// recognition.onresult = (event) => {
//     if (event.results[0] && event.results[0][0]) {
//         const command = event.results[0][0].transcript.toLowerCase().trim();
//         handleCommand(command);
//     } else {
//         console.warn("कोई आवाज़ नहीं मिली");
//     }
// };

// // When recognition ends
// recognition.onend = () => {
//     btn.innerHTML = "🎤 शुरू करें";
//     btn.classList.remove("listening");
//     isListening = false;
//     console.log("Recognition stopped");
// };

// // To catch errors
// recognition.onerror = (event) => {
//     console.error("त्रुटि हुई:", event.error);
//     speak("कुछ त्रुटि हुई है। कृपया पुनः प्रयास करें।");
//     isListening = false;
//     btn.innerHTML = "🎤 शुरू करें";
//     btn.classList.remove("listening");
// };






// Speech recognition setup
// const recognition = new (window.SpeechRecognition ||
//     window.webkitSpeechRecognition)();
// recognition.lang = "en-US";

// const btn = document.querySelector("#listen-btn");
// let isListening = false; // To avoid multiple instances

// // Function to convert text to speech
// function speak(text) {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "hi-IN"; // Set language to Hindi
//     window.speechSynthesis.speak(utterance);
// }

// // Function to handle recognized commands
// function handleCommand(command) {
//     console.log("Recognized Command: ", command);
//     if (command.includes("open youtube") || command.includes("open yt")) {
//         speak("यूट्यूब खोल रहा हूँ...");
//         window.open("https://www.youtube.com", "_blank");
//     } else if (command.includes("open google")) {
//         speak("गूगल खोल रहा हूँ...");
//         window.open("https://www.google.com", "_blank");
//     } else if (command.includes("open facebook")) {
//         speak("फेसबुक खोल रहा हूँ...");
//         window.open("https://www.facebook.com", "_blank");
//     } else if (command.includes("open linkedin")) {
//         speak("लिंक्डइन खोल रहा हूँ...");
//         window.open("https://www.linkedin.com", "_blank");
//     } else if (command.includes("open whatsapp")) {
//         speak("व्हाट्सएप खोल रहा हूँ...");
//         window.open("https://www.whatsapp.com", "_blank");
//     } else if (command.includes("what is your name")) {
//         speak("मेरा नाम भारत है। मुझे उज्जवल तिवारी ने बनाया है।");
//     } else if (command.includes("what is react js")) {
//         speak("React JS एक जावास्क्रिप्ट लाइब्रेरी है जो यूजर इंटरफेस बनाने में उपयोग होती है");
//     } else if (command.includes("what is blockchain")) {
//         speak("Blockchain एक decentralized डिजिटल लेज़र है जो डेटा को सुरक्षित और पारदर्शी तरीके से स्टोर करता हैं।");
//     } else {
//         // Perform a Google search if command not recognized
//         speak("मैं गूगल पर खोज रहा हूं।");
//         window.open(
//             `https://www.google.com/search?q=${encodeURIComponent(command)}`,
//             "_blank"
//         );
//     }
// }

// // Attach click event listener to the button
// btn.addEventListener("click", function () {
//     if (isListening) return; // Prevent multiple instances

//     speak("नमस्ते, मैं आपकी कैसे मदद कर सकता हूँ?");
//     isListening = true;

//     // Delay to ensure greeting completes before starting recognition
//     setTimeout(() => {
//         btn.innerHTML = "सुन रहा हूँ...\ud83d\udc42";
//         btn.classList.add("listening");
//         console.log("Recognition started");
//         recognition.start();
//     }, 2500);
// });

// // When a result is received
// recognition.onresult = (event) => {
//     if (event.results[0] && event.results[0][0]) {
//         const command = event.results[0][0].transcript.toLowerCase().trim();
//         handleCommand(command);
//     } else {
//         console.warn("कोई आवाज़ नहीं मिली");
//     }
// };

// // When recognition ends
// recognition.onend = () => {
//     btn.innerHTML = "🎤 शुरू करें";
//     btn.classList.remove("listening");
//     isListening = false;
//     console.log("Recognition stopped");
// };

// // To catch errors
// recognition.onerror = (event) => {
//     console.error("त्रुटि हुई:", event.error);
//     speak("कुछ त्रुटि हुई है। कृपया पुनह प्रयास करें।");
//     isListening = false;
//     btn.innerHTML = "🎤 शुरू करें";
//     btn.classList.remove("listening");
// };





// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// recognition.lang = "en-US";
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// const btn = document.querySelector("#listen-btn");
// let isListening = false;

// function speak(text) {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "hi-IN";
//     window.speechSynthesis.speak(utterance);
// }

// function handleCommand(command) {
//     console.log("Recognized Command:", command);
//     const commands = {
//         "open youtube": "https://www.youtube.com",
//         "open yt": "https://www.youtube.com",
//         "open google": "https://www.google.com",
//         "open facebook": "https://www.facebook.com",
//         "open linkedin": "https://www.linkedin.com",
//         "open whatsapp": "https://www.whatsapp.com",
//     };

//     for (const key in commands) {
//         if (command.includes(key)) {
//             speak(`${key.split(" ")[1]} खोल रहा हूँ...`);
//             window.open(commands[key], "_blank");
//             return;
//         }
//     }

//     if (command.includes("what is your name")) {
//         speak("मेरा नाम भारत है। मुझे उज्जवल तिवारी ने बनाया है।");
//     } else if (command.includes("what is react ")) {
//         speak("React JS एक जावास्क्रिप्ट लाइब्रेरी है जो यूजर इंटरफेस बनाने में उपयोग होती है");
//     } else if (command.includes(" who is director of iit patna ")) {
//         speak(" DR. टी.एन. सिंह, आईआईटी पटना के director हैं।");

//      } else if (command.includes("what is blockchain")) {
//         speak("Blockchain एक decentralized डिजिटल लेज़र है जो डेटा को सुरक्षित और पारदर्शी तरीके से स्टोर करता है।");

//     } else {
//         speak("मैं गूगल पर खोज रहा हूँ।");
//         window.open(`https://www.google.com/search?q=${encodeURIComponent(command)}`, "_blank");
//     }
// }

// btn.addEventListener("click", function () {
//     if (isListening) return;
//     speak("नमस्ते,  मैं आपकी कैसे मदद कर सकता हूँ?");
//     isListening = true;
//     setTimeout(() => {
//         btn.innerHTML = "सुन रहा हूँ...👂";
//         btn.classList.add("listening");
//         recognition.start();
//     }, 1000);
// });

// recognition.onresult = (event) => {
//     const command = event.results[0][0].transcript.toLowerCase().trim();
//     handleCommand(command);
// };

// recognition.onend = () => {
//     btn.innerHTML = "🎤 शुरू करें";
//     btn.classList.remove("listening");
//     isListening = false;
// };

// recognition.onerror = (event) => {
//     console.error("त्रुटि हुई:", event.error);
//     speak("कुछ त्रुटि हुई है। कृपया पुनः प्रयास करें।");
//     isListening = false;
//     btn.innerHTML = "🎤 शुरू करें";
//     btn.classList.remove("listening");
// };




// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// recognition.lang = "en-US";
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// const btn = document.querySelector("#listen-btn");
// let isListening = false;

// function speak(text) {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "hi-IN";
//     window.speechSynthesis.speak(utterance);
// }

// function handleCommand(command) {
//     console.log("Recognized Command:", command);
//     const commands = {
//         "open youtube": "https://www.youtube.com",
//         "open yt": "https://www.youtube.com",
//         "open google": "https://www.google.com",
//         "open facebook": "https://www.facebook.com",
//         "open linkedin": "https://www.linkedin.com",
//         "open whatsapp": "https://www.whatsapp.com",
//     };

//     for (const key in commands) {
//         if (command.includes(key)) {
//             speak(`${key.split(" ")[1]} खोल रहा हूँ...`);
//             window.open(commands[key], "_blank");
//             return;
//         }
//     }

//     if (command.includes("what is your name")) {
//         speak("मेरा नाम भारत है। मुझे उज्जवल तिवारी ने बनाया है।");
//     } else if (command.includes("what is react")) {
//         speak("React JS एक जावास्क्रिप्ट लाइब्रेरी है जो यूजर इंटरफेस बनाने में उपयोग होती है");
//     } else if (command.includes("who is director of iit patna")) {  // Extra space removed
//         speak("Doctor T.N. सिंह, डायरेक्टर of iit patna");
//     } else if (command.includes("what is blockchain")) {
//         speak("Blockchain एक decentralized डिजिटल लेज़र है जो डेटा को सुरक्षित और पारदर्शी तरीके से स्टोर करता है।Blockchain is a decentralized digital ledger that securely records transactions across a network of computers. It ensures transparency, security, and immutability, meaning once data is recorded, it cannot be altered or deleted.");

//     } else if (command.includes("how to work blockchain")) {
//         speak("Blockchain works by maintaining a distributed digital ledger that records data in blocks connected in a chain. Each block stores transaction data, a timestamp, and a unique cryptographic hash. The system ensures security, transparency, and immutability without relying on a central authority.");
//     } else if (command.includes("what is Cryptography")) {
//         speak("Cryptography is the science of securing information by transforming it into an unreadable format to protect it from unauthorized access. It ensures that sensitive data like passwords, messages, and transactions can only be read by the intended recipient.");

//     } else if (command.includes("pawan singh lalipop song")) {  // Extra space removed
//         speak("सतुआ जवन खियवले रहला,भूल गइनी ए राजा।गोर गाल के लाली देख के,फिसल गइनी ए राजा।छपरा से लेकर पटना,सब जगह पे चर्चा बा,अरे जोबन के करेजा के,चोट भारी तगड़ा बा।कमरिया लटकेलटकेलटकेलॉलीपॉप लागेलु।");
//     } else {
//         speak("मैं गूगल पर खोज रहा हूँ।");
//         window.open(`https://www.google.com/search?q=${encodeURIComponent(command)}`, "_blank");
//     }
// }

// btn.addEventListener("click", function () {
//     if (isListening) return;
//     speak("नमस्ते, मैं आपकी कैसे मदद कर सकता हूँ?");
//     isListening = true;
//     setTimeout(() => {
//         btn.innerHTML = "सुन रहा हूँ...👂";
//         btn.classList.add("listening");
//         recognition.start();
//     }, 1000);
// });

// recognition.onresult = (event) => {
//     const command = event.results[0][0].transcript.toLowerCase().trim();
//     handleCommand(command);
// };

// recognition.onend = () => {
//     btn.innerHTML = "🎤 शुरू करें";
//     btn.classList.remove("listening");
//     isListening = false;
// };

// recognition.onerror = (event) => {
//     console.error("त्रुटि हुई:", event.error);
//     // speak("कुछ त्रुटि हुई है। कृपया पुनः प्रयास करें।");
//     isListening = false;
//     btn.innerHTML = "🎤 शुरू करें";
//     btn.classList.remove("listening");
// };




// const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// recognition.lang = "en-US";
// recognition.interimResults = false;
// recognition.maxAlternatives = 1;

// const btn = document.querySelector("#listen-btn");
// let isListening = false;

// function speak(text) {
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "hi-IN";
//     window.speechSynthesis.speak(utterance);
// }

// function handleCommand(command) {
//     console.log("Recognized Command:", command);
//     const commands = {
//         "open youtube": "https://www.youtube.com",
//         "open yt": "https://www.youtube.com",
//         "open google": "https://www.google.com",
//         "open facebook": "https://www.facebook.com",
//         "open linkedin": "https://www.linkedin.com",
//         "open whatsapp": "https://www.whatsapp.com",
//     };

//     for (const key in commands) {
//         if (command.includes(key)) {
//             speak(`${key.split(" ")[1]} खोल रहा हूँ...`);
//             window.open(commands[key], "_blank");
//             return;
//         }
//     }

//     if (command.includes("what is your name")) {
//         speak("मेरा नाम भारत है। मुझे उज्जवल तिवारी ने बनाया है।");
//     } else if (command.includes("what is react")) {
//         speak("React JS एक जावास्क्रिप्ट लाइब्रेरी है जो यूजर इंटरफेस बनाने में उपयोग होती है");
//     } else if (command.includes("who is director of iit patna")) {  
//         speak("Doctor T.N. सिंह, डायरेक्टर of iit patna");
//     } else if (command.includes("what is blockchain")) {
//         speak("Blockchain एक decentralized डिजिटल लेज़र है जो डेटा को सुरक्षित और पारदर्शी तरीके से स्टोर करता है।Blockchain is a decentralized digital ledger that securely records transactions across a network of computers. It ensures transparency, security, and immutability, meaning once data is recorded, it cannot be altered or deleted.");
//     } else if (command.includes("how to work blockchain")) {
//         speak("Blockchain works by maintaining a distributed digital ledger that records data in blocks connected in a chain. Each block stores transaction data, a timestamp, and a unique cryptographic hash. The system ensures security, transparency, and immutability without relying on a central authority.");
//     } else if (command.includes("what is cryptography")) {
//         speak("Cryptography is the science of securing information by transforming it into an unreadable format to protect it from unauthorized access. It ensures that sensitive data like passwords, messages, and transactions can only be read by the intended recipient.");
//     } else if (command.includes("lalipop song")) {
//         speak("सतुआ जवन खियवले रहला, भूल गइनी ए राजा। गोर गाल के लाली देख के, फिसल गइनी ए राजा। छपरा से लेकर पटना, सब जगह पे चर्चा बा, अरे जोबन के करेजा के, चोट भारी तगड़ा बा। कमरिया लटके लटके लटके लॉलीपॉप लागेलु।");
//     } else {
//         speak("मैं गूगल पर खोज रहा हूँ।");
//         window.open(`https://www.google.com/search?q=${encodeURIComponent(command)}`, "_blank");
//     }
// }

// btn.addEventListener("click", function () {
//     if (isListening) return;
//     speak("नमस्ते, मैं आपकी कैसे मदद कर सकता हूँ?");
//     isListening = true;
//     setTimeout(() => {
//         btn.innerHTML = "सुन रहा हूँ...👂";
//         btn.classList.add("listening");
//         recognition.start();
//     }, 1000);
// });

// recognition.onresult = (event) => {
//     const command = event.results[0][0].transcript.toLowerCase().trim();
//     handleCommand(command);
// };

// recognition.onend = () => {
//     btn.innerHTML = "🎤 शुरू करें";
//     btn.classList.remove("listening");
//     isListening = false;
// };

// recognition.onerror = (event) => {
//     console.error("त्रुटि हुई:", event.error);
//     isListening = false;
//     btn.innerHTML = "🎤 शुरू करें";
//     btn.classList.remove("listening");
// };




const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const btn = document.querySelector("#listen-btn");
let isListening = false;
const audio = new Audio();

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "hi-IN";
    window.speechSynthesis.speak(utterance);
}

function playSong(src) {
    if (audio.src !== src) {
        audio.src = src;
    }
    audio.play();
}

function stopSong() {
    audio.pause();
    audio.currentTime = 0;
}

function handleCommand(command) {
    console.log("Recognized Command:", command);
    const commands = {
        "open youtube": "https://www.youtube.com",
        "open yt": "https://www.youtube.com",
        "open google": "https://www.google.com",
        "open facebook": "https://www.facebook.com",
        "open linkedin": "https://www.linkedin.com",
        "open whatsapp": "https://www.whatsapp.com",
    };

    for (const key in commands) {
        if (command.includes(key)) {
            stopSong();
            speak(`${key.split(" ")[1]} खोल रहा हूँ...`);
            window.open(commands[key], "_blank");
            return;
        }
    }

    if (command.includes("what is your name")) {
        stopSong();
        speak("मेरा नाम भारत है। मुझे उज्जवल तिवारी ने बनाया है।");
    } else if (command.includes("what is react")) {
        stopSong();
        speak("React JS एक जावास्क्रिप्ट लाइब्रेरी है जो यूजर इंटरफेस बनाने में उपयोग होती है");
    } else if (command.includes("who is director of iit patna")) {  
        stopSong();
        speak("Doctor T.N. सिंह, डायरेक्टर of iit patna");
    } else if (command.includes("what is blockchain")) {
        stopSong();
        speak("Blockchain एक decentralized डिजिटल लेज़र है जो डेटा को सुरक्षित और पारदर्शी तरीके से स्टोर करता है।Blockchain is a decentralized digital ledger that securely records transactions across a network of computers. It ensures transparency, security, and immutability, meaning once data is recorded, it cannot be altered or deleted.");
    } else if (command.includes("how to work blockchain")) {
        stopSong();
        speak("Blockchain works by maintaining a distributed digital ledger that records data in blocks connected in a chain. Each block stores transaction data, a timestamp, and a unique cryptographic hash. The system ensures security, transparency, and immutability without relying on a central authority.");
    } else if (command.includes("what is cryptography")) {
        stopSong();
        speak("Cryptography is the science of securing information by transforming it into an unreadable format to protect it from unauthorized access. It ensures that sensitive data like passwords, messages, and transactions can only be read by the intended recipient.");
    } else if (command.includes("pawan singh lollipop song")) {
        stopSong();
        // speak("सतुआ जवन खियवले रहला, भूल गइनी ए राजा। गोर गाल के लाली देख के, फिसल गइनी ए राजा।");
        playSong("audio/lalipop.mp3"); // यहाँ पर अपने गाने का path दें।
    } else {
        stopSong();
        speak("मैं गूगल पर खोज रहा हूँ।");
        window.open(`https://www.google.com/search?q=${encodeURIComponent(command)}`, "_blank");
    }
}

btn.addEventListener("click", function () {
    if (isListening) return;
    speak("नमस्ते, मैं भारत आपकी कैसे मदद कर सकता हूँ?");
    isListening = true;
    setTimeout(() => {
        btn.innerHTML = "सुन रहा हूँ...👂";
        btn.classList.add("listening");
        recognition.start();
    }, 1000);
});

recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase().trim();
    handleCommand(command);
};

recognition.onend = () => {
    btn.innerHTML = "🎤 शुरू करें";
    btn.classList.remove("listening");
    isListening = false;
};

recognition.onerror = (event) => {
    console.error("त्रुटि हुई:", event.error);
    isListening = false;
    btn.innerHTML = "🎤 शुरू करें";
    btn.classList.remove("listening");
};
