const svg = document.getElementById("svgClick");
var hiddenText1 = document.getElementById("hidden-text1");
var hiddenText2 = document.getElementById("hidden-text2");
var hiddenText3 = document.getElementById("hidden-text3");

svg.addEventListener("click", () => {
    if (hiddenText1.style.display !== "block") {
        hiddenText1.style.display = "block";
        hiddenText2.style.display = "block";
        hiddenText3.style.display = "block";
    } else {
        hiddenText1.style.display = "none";
        hiddenText2.style.display = "none";
        hiddenText3.style.display = "none";
    }
});

const svgElement = document.getElementById("svgClick");
let isRotated = false;

svgElement.addEventListener("click", () => {
    if (!isRotated) {
        svgElement.style.transform = "rotate(90deg)";
        isRotated = true;
    } else {
        svgElement.style.transform = "rotate(0deg)";
        isRotated = false;
    }
});

const da = document.getElementById("da");
const en = document.getElementById("en");

let langDA = false

if (localStorage.getItem("language") !== null) {
    console.log("Nothing Done")
} else{
    localStorage.setItem("language", "en")
}

if (localStorage.getItem("language") == "da") {
    da.style.fontWeight = "900";
        en.style.fontWeight = "600";

        hiddenText1.textContent = "Hjem";
        hiddenText2.textContent = "CV";
        hiddenText3.textContent = "Kontakt";

        const headerElement = document.getElementById("header");
        headerElement.textContent = "En udvikler med ";
        const newSpan = document.createElement("span");
        newSpan.textContent = "passion";
        headerElement.appendChild(newSpan);
        headerElement.innerHTML += " for sit arbejde";

        document.getElementById("profession").textContent = "Udvikler | Gymnasieelev";
        document.getElementById("cheader1").textContent = "Kundeservice";
        document.getElementById("cheader2").textContent = "Miljøvenlig";
        document.getElementById("cheader3").textContent = "Store & Små Projekter";
    
        document.getElementById("home").textContent = "Hjem";
        document.getElementById("resume").textContent = "CV";
        document.getElementById("contact").textContent = "Kontakt";
        document.getElementById("phone").textContent = "Tlf. Nr.";

        langDA = true
}else{
    da.style.fontWeight = "600";
    en.style.fontWeight = "900";

    hiddenText1.textContent = "Home";
    hiddenText2.textContent = "Resume";
    hiddenText3.textContent = "Contact";

    const headerElement = document.getElementById("header");
    headerElement.textContent = "A developer with ";
    const newSpan = document.createElement("span");
    newSpan.textContent = "passion";
    headerElement.appendChild(newSpan);
    headerElement.innerHTML += " for his work";

    document.getElementById("profession").textContent = "Developer | College Student";
    document.getElementById("cheader1").textContent = "Customer Service";
    document.getElementById("cheader2").textContent = "Environmental Thinking";
    document.getElementById("cheader3").textContent = "High & Low End Projects";

    document.getElementById("home").textContent = "Home";
    document.getElementById("resume").textContent = "Resume";
    document.getElementById("contact").textContent = "Contact";
    document.getElementById("phone").textContent = "Phone:";

    langDA = false
}

da.addEventListener("click", () => {
    console.log("works")
    if (langDA == true) {
        console.log("None")
    } else{
        da.style.fontWeight = "900";
        en.style.fontWeight = "600";

        hiddenText1.textContent = "Hjem";
        hiddenText2.textContent = "CV";
        hiddenText3.textContent = "Kontakt";

        const headerElement = document.getElementById("header");
        headerElement.textContent = "En udvikler med ";
        const newSpan = document.createElement("span");
        newSpan.textContent = "passion";
        headerElement.appendChild(newSpan);
        headerElement.innerHTML += " for sit arbejde";

        document.getElementById("profession").textContent = "Udvikler | Gymnasieelev";
        document.getElementById("cheader1").textContent = "Kundeservice";
        document.getElementById("cheader2").textContent = "Miljøvenlig";
        document.getElementById("cheader3").textContent = "Store & Små Projekter";
    
        document.getElementById("home").textContent = "Hjem";
        document.getElementById("resume").textContent = "CV";
        document.getElementById("contact").textContent = "Kontakt";
        document.getElementById("phone").textContent = "Tlf. Nr.";

        localStorage.removeItem("language")
        localStorage.setItem("language", "da")
        console.log(localStorage.getItem("language"))
        langDA = true
    }
});

en.addEventListener("click", () => {
    if (langDA == false) {
        console.log("None")
    } else{
        da.style.fontWeight = "600";
        en.style.fontWeight = "900";

        hiddenText1.textContent = "Home";
        hiddenText2.textContent = "Resume";
        hiddenText3.textContent = "Contact";

        const headerElement = document.getElementById("header");
        headerElement.textContent = "A developer with ";
        const newSpan = document.createElement("span");
        newSpan.textContent = "passion";
        headerElement.appendChild(newSpan);
        headerElement.innerHTML += " for his work";

        document.getElementById("profession").textContent = "Developer | College Student";
        document.getElementById("cheader1").textContent = "Customer Service";
        document.getElementById("cheader2").textContent = "Environmental Thinking";
        document.getElementById("cheader3").textContent = "High & Low End Projects";
    
        document.getElementById("home").textContent = "Home";
        document.getElementById("resume").textContent = "Resume";
        document.getElementById("contact").textContent = "Contact";
        document.getElementById("phone").textContent = "Phone:";

        localStorage.removeItem("language")
        localStorage.setItem("language", "en")
        console.log(localStorage.getItem("language"))

        langDA = false
    }
});