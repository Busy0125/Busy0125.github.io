const firstItembtn = document.querySelector(".first-item");
const secondItembtn = document.querySelector(".second-item")
const thirdItembtn = document.querySelector(".third-item")

const firstMarket = document.querySelector(".first-market");
const secondMarket = document.querySelector(".second-market");
const thirdMarket = document.querySelector(".third-market");

let hideAllMarket = () => {
    console.log("Start Hiding");
    firstMarket.style.display = "none";
    secondMarket.style.display = "none";
    thirdMarket.style.display = "none";

    firstItembtn.style.color = "#FDDBE1";
    secondItembtn.style.color = "#FDDBE1";
    thirdItembtn.style.color = "#FDDBE1";
}

firstItembtn.addEventListener("click", () => {
    console.log("This is the first market.");
    hideAllMarket();
    firstMarket.style.display = "block";
    firstMarket.style.display = "flex";
    firstItembtn.style.color = "#FB6A7A";
})

secondItembtn.addEventListener("click", () => {
    console.log("This is the second market.");
    hideAllMarket();
    secondMarket.style.display = "block";
    secondItembtn.style.color = "#FB6A7A";
})

thirdItembtn.addEventListener("click", () => {
    console.log("This is the third market.");
    hideAllMarket();
    thirdMarket.style.display = "block";
    thirdItembtn.style.color = "#FB6A7A";
})