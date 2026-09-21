// =========================
// BASIC SCREEN SETUP
// =========================

// 0 = intro
// 1-10 = the 10 months
// 11 = final screen

let currentScreen = 0;

const popupContent = document.getElementById("popupContent");


// =========================
// HELPER FUNCTION
// =========================

// Turns the layout values below into CSS.
// Numbers automatically become px.
//
// Example:
// left: 60
// becomes:
// left: 60px

function makeStyle(object) {

    const unitlessProperties = [
        "lineHeight",
        "fontWeight",
        "opacity",
        "zIndex",
        "flex",
        "flexGrow",
        "flexShrink",
        "order"
    ];

    return Object.entries(object)
        .map(([property, value]) => {

            const cssProperty = property.replace(
                /[A-Z]/g,
                letter => `-${letter.toLowerCase()}`
            );

            let cssValue;

            if (
                typeof value === "number" &&
                !unitlessProperties.includes(property)
            ) {
                cssValue = `${value}px`;
            }
            else {
                cssValue = value;
            }

            return `${cssProperty}:${cssValue};`;
        })
        .join(" ");
}


// =========================
// MONTH DATA
// =========================
//
// THIS is the main thing you'll edit.
//
// Every month can have completely different:
// - media position
// - media width / height
// - text position
// - text width
// - text size
// - navigation position
// - button size
//
// type can be:
// "image"
// "video"
//

const months = [

    // =====================
    // MONTH 1
    // =====================

    {
        number: "month 1",

        type: "video",
        media: "assets/month1.mov",

        text:
            "sometimes when i drive here, the air still smells like that day. i remember driving back with such a giddy smile from kissing u :)",

        layout: {

            media: {
                left: 83,
                top: 145,
                width: 190,
                height: "auto",
                objectFit: "cover"
            },

            text: {
                right: 60,
                top: 145,
                width: 400,
                minHeight: 180,
                fontSize: 25,
                lineHeight: 1.45
            },

            navigation: {
                right: 28,
                bottom: 25,
                gap: 15,
                buttonWidth: 220
            }
        }
    },


    // =====================
    // MONTH 2
    // =====================

    {
        number: "month 2",

        type: "video",
        media: "assets/month2.mov",

        text:
            "molester molestee hehe i miss fete, was so awesome that day ;) <br> my first december with you, feels like a taylor swift song<3",

        layout: {

            media: {
                left: 53,
                top: 195,
                width: 380,
                height: 210,
                objectFit: "cover"
            },

            text: {
                right: 40,
                top: 145,
                width: 360,
                minHeight: 200,
                fontSize: 25,
                lineHeight: 1.5
            },

            navigation: {
                right: 20,
                bottom: 20,
                gap: 10,
                buttonWidth: 200
            }
        }
    },


    // =====================
    // MONTH 3
    // =====================

    {
        number: "month 3",

        type: "video",
        media: "assets/month3.mov",

        text:
            "BABYAMUU BDAYY <br> haha i yap soo muchh and u laugh so beautifully :) <br> THIS YEAR BABYAMUU TURNS 18 YAYAYYA :)",

        layout: {

            media: {
                left: 40,
                top: 190,
                width: 380,
                height: "auto",
                objectFit: "cover"
            },

            text: {
                right: 55,
                top: 145,
                width: 370,
                minHeight: 220,
                fontSize: 26,
                lineHeight: 1.4
            },

            navigation: {
                right: 35,
                bottom: 30,
                gap: 20,
                buttonWidth: 210
            }
        }
    },


    // =====================
    // MONTH 4
    // =====================

    {
        number: "month 4",

        type: "image",
        media: "assets/month4.jpeg",

        text:
            "EMPERORR hahaha <br> u made me a cake this month amaa and made me the jee main 99.9 percentile thing :) <br> i love u soo much",

        layout: {

            media: {
                left: 80,
                top: 135,
                width: 200,
                height: 370,
                objectFit: "cover"
            },

            text: {
                right: 65,
                top: 145,
                width: 350,
                minHeight: 180,
                fontSize: 25,
                lineHeight: 1.45
            },

            navigation: {
                right: 28,
                bottom: 25,
                gap: 15,
                buttonWidth: 220
            }
        }
    },


    // =====================
    // MONTH 5
    // =====================

    {
        number: "month 5",

        type: "video",
        media: "assets/month5.mov",

        text:
            "i am so smooth with the lines ;) <br> GIRL i swear this day i recognised u in the mall by ur ass (juicy af) <br> muehehe",

        layout: {

            media: {
                left: 65,
                top: 195,
                width: 340,
                height: "auto",
                objectFit: "cover"
            },

            text: {
                right: 45,
                top: 145,
                width: 390,
                minHeight: 200,
                fontSize: 25,
                lineHeight: 1.5
            },

            navigation: {
                right: 30,
                bottom: 25,
                gap: 15,
                buttonWidth: 220
            }
        }
    },


    // =====================
    // MONTH 6
    // =====================

    {
        number: "month 6",

        type: "image",
        media: "assets/month6.jpeg",

        text:
            "AWW this was when i see my baby hehe <br> u saw mere jaise kutta idhar, but i cuter than him :)",

        layout: {

            media: {
                left: 60,
                top: 180,
                width: 350,
                height: "auto",
                objectFit: "cover"
            },

            text: {
                right: 55,
                top: 165,
                width: 360,
                minHeight: 220,
                fontSize: 25,
                lineHeight: 1.45
            },

            navigation: {
                right: 25,
                bottom: 20,
                gap: 15,
                buttonWidth: 220
            }
        }
    },


    // =====================
    // MONTH 7
    // =====================

    {
        number: "month 7",

        type: "video",
        media: "assets/month7.mov",

        text:
            "u came to visit me hehehe :) <br> this month was so good with top gun, screaming in car singing songs, ah i love u",

        layout: {

            media: {
                left: 55,
                top: 190,
                width: 360,
                height: "auto",
                objectFit: "cover"
            },

            text: {
                right: 60,
                top: 140,
                width: 380,
                minHeight: 190,
                fontSize: 25,
                lineHeight: 1.5
            },

            navigation: {
                right: 30,
                bottom: 25,
                gap: 15,
                buttonWidth: 220
            }
        }
    },


    // =====================
    // MONTH 8
    // =====================

    {
        number: "month 8",

        type: "video",
        media: "assets/month8.mov",

        text:
            "u tortured me itna iss din :( <br> THIS WAS MY BDAY MONTH and u made it my best bday ever :)",

        layout: {

            media: {
                left: 60,
                top: 195,
                width: 340,
                height: "auto",
                objectFit: "cover"
            },

            text: {
                right: 50,
                top: 155,
                width: 370,
                minHeight: 190,
                fontSize: 25,
                lineHeight: 1.45
            },

            navigation: {
                right: 25,
                bottom: 25,
                gap: 15,
                buttonWidth: 220
            }
        }
    },


    // =====================
    // MONTH 9
    // =====================

    {
        number: "month 9",

        type: "video",
        media: "assets/month9.mov",

        text:
            "ODYSSEYYY <br> u got me flowersss hehe <br> it broke my heart sm to leave iss din, i love u amuu",

        layout: {

            media: {
                left: 70,
                top: 190,
                width: 310,
                height: 210,
                objectFit: "cover"
            },

            text: {
                right: 55,
                top: 180,
                width: 380,
                minHeight: 210,
                fontSize: 25,
                lineHeight: 1.5
            },

            navigation: {
                right: 25,
                bottom: 25,
                gap: 15,
                buttonWidth: 220
            }
        }
    },


    // =====================
    // MONTH 10
    // =====================

    {
        number: "month 10",

        type: "image",
        media: "assets/month10.HEIC",

        text:
            "when we come to visit each other hehe <br> all throughout these four years, i just wanna keep coming home to u always",

        layout: {

            media: {
                left: 70,
                top: 200,
                width: 320,
                height: "auto",
                objectFit: "cover"
            },

            text: {
                right: 45,
                top: 145,
                width: 390,
                minHeight: 200,
                fontSize: 26,
                lineHeight: 1.45
            },

            navigation: {
                right: 25,
                bottom: 20,
                gap: 15,
                buttonWidth: 220
            }
        }
    }
];


// =========================
// LOAD THE CORRECT SCREEN
// =========================

function loadScreen() {

    if (currentScreen === 0) {
        loadIntro();
    }

    else if (currentScreen >= 1 && currentScreen <= 10) {
        loadMonth(currentScreen - 1);
    }

    else if (currentScreen === 11) {
        loadFinal();
    }
}


// =========================
// INTRO
// =========================

function loadIntro() {

    popupContent.innerHTML = `
        <div class="introScreen">

            <div class="introCharacters">
                <img src="assets/amu_idle.gif" class="introAmu" alt="Amu">
                <img src="assets/nalin_happy.gif" class="introNalin" alt="Nalin">
            </div>

            <div class="introMiddle">

                <div class="introText">
                    happy 10 months babyy :)
                </div>

                <button class="startButton" id="startButton">
                    <img src="assets/button_start.png" alt="Start">
                </button>

            </div>

        </div>
    `;

    document.getElementById("startButton").onclick = function() {

        currentScreen = 1;
        loadScreen();

    };
}


// =========================
// MONTH PAGE
// =========================

function loadMonth(index) {

    const month = months[index];

    // =========================
    // BACKGROUND MUSIC VOLUME
    // =========================

    if (month.type === "video") {
        music.volume = 0.15;
    } else {
        music.volume = 1.0;
    }

    const mediaStyle =
        makeStyle(month.layout.media);

    const textStyle =
        makeStyle(month.layout.text);

    const navigationStyle =
        makeStyle({
            right: month.layout.navigation.right,
            bottom: month.layout.navigation.bottom,
            gap: month.layout.navigation.gap,
            "--nav-button-width":
                `${month.layout.navigation.buttonWidth}px`
        });


    // =========================
    // MEDIA
    // =========================

    let mediaHTML;

    if (month.type === "video") {

        mediaHTML = `
            <video
                class="monthMedia"
                style="${mediaStyle}"
                autoplay
                loop
                playsinline
                preload="auto"
            >
                <source src="${month.media}">
                Your browser does not support this video.
            </video>
        `;

    }

    else {

        mediaHTML = `
            <img
                src="${month.media}"
                class="monthMedia"
                style="${mediaStyle}"
                alt="${month.number}"
            >
        `;
    }


    // =========================
    // PAGE HTML
    // =========================

    popupContent.innerHTML = `

        <div class="monthScreen">

            ${mediaHTML}

            <div
                class="monthText"
                style="${textStyle}"
            >
                ${month.text}
            </div>

            <div
                class="navigation"
                style="${navigationStyle}"
            >

                <button
                    class="navButton backButton"
                    id="backButton"
                    aria-label="Previous month"
                >
                    <img
                        src="assets/button_next.png"
                        alt="Back"
                    >
                </button>

                <button
                    class="navButton"
                    id="nextButton"
                    aria-label="Next month"
                >
                    <img
                        src="assets/button_next.png"
                        alt="Next"
                    >
                </button>

            </div>

        </div>

    `;


    // =========================
    // AUTOPLAY VIDEO
    // =========================

    if (month.type === "video") {

        const video =
            document.querySelector(".monthMedia");

        video.play().catch(function() {

            // Muted autoplay should normally work.

        });
    }


    // =========================
    // PREVIOUS
    // =========================

    document
        .getElementById("backButton")
        .onclick = function() {

            if (currentScreen > 1) {

                currentScreen--;

                loadScreen();
            }
        };


    // =========================
    // NEXT
    // =========================

    document
        .getElementById("nextButton")
        .onclick = function() {

            if (currentScreen < 10) {

                currentScreen++;

                loadScreen();

            }

            else {

                currentScreen = 11;

                loadScreen();

            }
        };
}


// =========================
// FINAL SCREEN
// =========================

function loadFinal() {

    popupContent.innerHTML = `
        <div class="yayScreen">

            <div class="characters">

                <img
                    src="assets/amu_idle.gif"
                    class="yayAmu"
                    alt="Amu"
                >

                <img
                    src="assets/nalin_happy.gif"
                    class="yayNalin"
                    alt="Nalin"
                >

            </div>

            <div class="yayText">
                YAYYYYY!!!
            </div>

            <div class="yaySub">
                happy 10 months babyy<br>
                thank you for everythinggg<br>
                i love you soo muchhh :)
            </div>

        </div>
    `;
}


// =========================
// MUSIC
// =========================

const music =
    document.getElementById("bgm");

document.body.addEventListener(
    "click",
    function() {

        music.play().catch(() => {});

    },
    { once: true }
);


// =========================
// START
// =========================

loadScreen();