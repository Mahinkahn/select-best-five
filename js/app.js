let cart = [];
function addToList(element) {
    const playerName = element.parentNode.children[0].innerText;
    const player = {
        playerName: playerName,
    }
    if (cart.length < 5) {
        cart.push(player);
        element.disabled = true;
    }
    else {
        alert('Can not add more');
    }
    displayPlayer();
}

function displayPlayer() {
    const cartContainer = document.getElementById("cartList");
    cartContainer.textContent = '';
    for (let i = 0; i < cart.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `
            ${cart[i].playerName}
        `;
        cartContainer.appendChild(li);
    }
}

function getValue(param) {
    let valueFromInput = document.getElementById(param).value || 0;
    valueFromInput = parseInt(valueFromInput);
    if (isNaN(valueFromInput)) {
        alert('Emter valid amount');
        document.getElementById(param).value = '';
        return valueFromInput = 0;
    }
    else {
        return valueFromInput;
    }
}

function budget() {
    let pricePerPlayer = getValue("budget");
    console.log(pricePerPlayer);
    let totalBudget = cart.length * pricePerPlayer;
    document.getElementById('total-budget').innerText = totalBudget;
    return totalBudget;
}

function finalAmount() {
    let priceForManager = getValue("manager");
    let PriceForCoach = getValue("coach");
    let final_amount = budget() + priceForManager + PriceForCoach;
    document.getElementById('final-amount').innerText = final_amount;
}
