const ratingCard = document.querySelector(".rating-card");
const thankYou = document.querySelector(".thank-you");
const rates = document.querySelectorAll(".rating-card .rate");
const submit = document.querySelector(".submit");
const selectedDiv = document.querySelector(".thank-you .selected-div");
let selectedRate = null;

rates.forEach((rate) =>
    rate.addEventListener("click", () => {
        rates.forEach((rate) => {
            rate.classList.remove("selected");
        });
        rate.classList.add("selected");
        selectedRate = rate.innerHTML;
    })
);

submit.addEventListener("click", () => {
    if (selectedRate !== null) {
        ratingCard.style.display = "none";
        thankYou.style.display = "flex";
        selectedDiv.innerHTML = `you selected ${selectedRate} out of 5`;
    } else {
        alert("you must be select rating")
    }
});
