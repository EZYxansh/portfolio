/* ================= NAVIGATION ================= */

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");

const navbar =
    document.getElementById("navbar");


/* MOBILE MENU */

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


/* CLOSE AFTER CLICK */

document
    .querySelectorAll(".mobile-menu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("open");

        });

    });


/* CLOSE WHEN CLICKING OUTSIDE */

document.addEventListener("click", event => {

    if (!navbar.contains(event.target)) {

        mobileMenu.classList.remove("open");

    }

});


/* ================= NUMBER GAME ================= */

const guessForm =
    document.getElementById("guessForm");

const numberInput =
    document.getElementById("numberInput");

const guessBtn =
    document.getElementById("guessBtn");

const inputError =
    document.getElementById("inputError");

const loadingArea =
    document.getElementById("loadingArea");

const loadingLog =
    document.getElementById("loadingLog");

const fakeProgressFill =
    document.getElementById("fakeProgressFill");

const guessResult =
    document.getElementById("guessResult");

const resultNumber =
    document.getElementById("resultNumber");

const againBtn =
    document.getElementById("againBtn");


/*
    These are deliberately fake messages.
    The joke is that the program already knows
    the number the visitor entered.
*/

const fakeMessages = [

    "Initializing prediction engine...",

    "Neural network initialized.",

    "Connecting to Tesla servers...",

    "Tesla connection established.",

    "Contacting Elon Musk for confirmation...",

    "Elon Musk has been notified.",

    "Asking PM Modi for additional verification...",

    "PM Modi has confirmed the calculation.",

    "Waiting for Rahul Gandhi to confirm...",

    "Rahul Gandhi has confirmed.",

    "Cross-checking international databases...",

    "7,382 databases checked.",

    "Running quantum calculations...",

    "Consulting highly suspicious AI algorithms...",

    "Prediction finalized."

];


function sleep(ms) {

    return new Promise(resolve => {

        setTimeout(resolve, ms);

    });

}


async function startGuess() {

    const value =
        Number(numberInput.value);


    /* INPUT VALIDATION */

    if (
        !Number.isInteger(value) ||
        value < 1 ||
        value > 100
    ) {

        inputError.textContent =
            "Enter a whole number between 1 and 100.";

        numberInput.focus();

        return;
    }


    inputError.textContent = "";


    /* HIDE INPUT */

    guessForm.style.display = "none";

    loadingArea.style.display = "block";

    guessResult.style.display = "none";


    loadingLog.innerHTML = "";

    fakeProgressFill.style.width = "0%";


    /* FAKE LOADING */

    for (
        let i = 0;
        i < fakeMessages.length;
        i++
    ) {

        const line =
            document.createElement("div");


        line.className =
            "loading-line";


        const message =
            fakeMessages[i];


        const confirmation =
            message.includes("established") ||
            message.includes("notified") ||
            message.includes("confirmed") ||
            message.includes("checked") ||
            message.includes("finalized");


        if (confirmation) {

            line.innerHTML =
                `> ${message}
                 <span class="ok">✓</span>`;

        } else {

            line.textContent =
                `> ${message}`;

        }


        loadingLog.appendChild(line);


        const progress =
            Math.round(
                ((i + 1) /
                fakeMessages.length) * 100
            );


        fakeProgressFill.style.width =
            `${progress}%`;


        await sleep(
            450 +
            Math.random() * 500
        );

    }


    await sleep(500);


    /* THE "MAGIC" */

    loadingArea.style.display =
        "none";


    /*
        We simply display the number
        the user originally entered.
    */

    resultNumber.textContent =
        value;


    guessResult.style.display =
        "block";

}


/* BUTTON */

guessBtn.addEventListener(
    "click",
    startGuess
);


/* ENTER KEY */

numberInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            startGuess();

        }

    }
);


/* TRY AGAIN */

againBtn.addEventListener(
    "click",
    () => {

        guessResult.style.display =
            "none";

        guessForm.style.display =
            "block";

        numberInput.value = "";

        numberInput.focus();

    }
);


/* ================= GAMING ================= */

const gameTiles =
    document.querySelectorAll(
        ".game-tile"
    );


gameTiles.forEach(tile => {

    const button =
        tile.querySelector(
            ".game-toggle"
        );


    button.addEventListener(
        "click",
        () => {

            const wasOpen =
                tile.classList.contains(
                    "open"
                );


            /*
                Close every other game
            */

            gameTiles.forEach(
                otherTile => {

                    otherTile.classList.remove(
                        "open"
                    );

                }
            );


            /*
                Re-open the clicked one
                if it wasn't already open
            */

            if (!wasOpen) {

                tile.classList.add(
                    "open"
                );

            }

        }
    );

});