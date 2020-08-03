quotes = [
    '"Without big data, you are blind and deaf and in the middle of a freeway." - Geoffrey Moore"',
    '"In God we trust, all others bring data." - W Edwards Deming',
    '"Data is the new oil." - Clive Humby"',
    '"No great marketing decisions have ever been made on qualitative data." - John Sculley',
    '"Torture the data, and it will confess to anything." - Ronald Coase',
    '"With data collection, \'the sooner the better\' is always the best answer." - Marissa Mayer',
    '"Big data isn\'t about bits, it\'s about talent." - Douglas Merrill',
    '"It is a capital mistake to theorize before one has data." - Sherlock Holmes',
    '"Without a systematic way to start and keep data clean, bad data will happen." - Donato Diorio',
    '"You can have data without information, but you cannot have information without data." - Daniel Keys Moran',
    '"The goal is to turn data into information and information into insight." - Carly Fiorina',
];

function typewriter(textIndex) {
    let target = document.getElementById("welcomeText");
    const welcomeText = "Data Science UToledo";
    let speed = 60 + 2 * (Math.random() - 0.5);

    if (welcomeText.charAt(textIndex) === "S") {
        speed = 300;
    }
    if (textIndex > welcomeText.length) {
        target.innerHTML += "<span class='blinking'> |</span>";
    } else {
        target.innerHTML += welcomeText.charAt(textIndex);
        setTimeout(function() {
            typewriter(textIndex + 1);
        }, speed)
    }
}

function generateQuote() {
    let target = document.getElementById("quotes");
    target.innerHTML = quotes[Math.floor(Math.random() * 10)]
}

typewriter(0);
generateQuote();