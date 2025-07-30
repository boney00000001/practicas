function factorial(num) {
    num = parseInt(num); // Convertir a entero
    if (isNaN(num) || num < 0) return "Error"; // Factorial no definido para negativos o no numéricos
    if (num === 0 || num === 1) return 1;
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            try {
                let expression = display.value.replace("^", "**");
                display.value = eval(expression);
            } catch (e) {
                display.value = "Syntax error";
            }
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id === "de") {
            display.value = display.value.slice(0, -1);
        } else if (btn.id === "cos") {
            display.value = Math.cos(toRadians(display.value));
        } else if (btn.id === "sin") {
            display.value = Math.sin(toRadians(display.value));
        } else if (btn.id === "tan") {
            display.value = Math.tan(toRadians(display.value));
        } else if (btn.id === "sqrt") {
            display.value = Math.sqrt(display.value);
        } else if (btn.id === "log") {
            display.value = Math.log10(display.value);
        } else if (btn.id === "!") {
            display.value = factorial(display.value);
        } else {
            display.value += btn.id;
        }
    });
});