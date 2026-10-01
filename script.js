/* =========================
   PAGE NAVIGATION
========================= */

function goTo(page) {
    window.location.href = page;
}


/* =========================
   CONFETTI
========================= */

function makeConfetti(count = 90) {

    const box =
        document.getElementById("confetti");

    if (!box) {
        return;
    }

    for (let i = 0; i < count; i++) {

        const c =
            document.createElement("span");

        c.className =
            "confetti-piece";

        c.textContent =
            Math.random() > 0.5 ? "•" : "";

        c.style.left =
            Math.random() * 100 + "vw";

        c.style.animationDelay =
            Math.random() * 1.2 + "s";

        c.style.animationDuration =
            (2.2 + Math.random() * 2) + "s";

        c.style.background =
            `hsl(${Math.random() * 360}, 85%, 65%)`;

        c.style.transform =
            `rotate(${Math.random() * 360}deg)`;

        box.appendChild(c);

        setTimeout(() => {
            c.remove();
        }, 4500);
    }
}


/* =========================
   BLOW CANDLES
========================= */

function blowCandles() {

    const flames =
        document.getElementById("flames");

    const message =
        document.getElementById("candleMessage");

    const button =
        document.getElementById("blowBtn");

    if (!flames) {
        return;
    }

    if (flames.classList.contains("off")) {
        return;
    }

    flames.classList.add("off");

    message.textContent =
        "Wish made! ✨ May it come true! 💖";

    button.textContent =
        "Continue to Cake Cutting →";

    button.onclick = function () {
        goTo("page4.html");
    };

    makeConfetti(70);
}


/* =========================
   CUT CAKE
========================= */

function cutCake() {

    const cake =
        document.getElementById("cutCake");

    const message =
        document.getElementById("cutMessage");

    const button =
        document.getElementById("cutBtn");

    if (!cake) {
        return;
    }

    if (cake.classList.contains("cut")) {
        return;
    }

    cake.classList.add("cutting");

    setTimeout(() => {

        cake.classList.add("cut");

        message.textContent =
            "Yay! The cake is cut! 🎉 Time for the biggest birthday wish! ❤️";

        button.textContent =
            "See Your Birthday Wish 💖";

        button.onclick = function () {
            goTo("page5.html");
        };

        makeConfetti(120);

    }, 850);
}


/* =========================
   FINAL PAGE CONFETTI
========================= */

if (
    location.pathname.endsWith("page5.html")
) {

    setTimeout(() => {

        makeConfetti(130);

    }, 500);

}