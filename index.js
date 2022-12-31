const input1 = document.getElementById("input1");
input1.addEventListener("keyup", calculatePrice);

const input2 = document.getElementById("input2");
input2.addEventListener("keyup", calculatePrice);

const total = document.getElementById("total");

function calculatePrice(e) {
    total.innerHTML = input1.value * 3000 + input2.value * 2000;
}
calculatePrice();