const anteriorOperationsText = document.querySelector("operacao-anterior")
const atualOperationsText = document.querySelector("operacao-atual")
const buttons = document.querySelectorAll("#butao-container button")


class Calculator {}

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;

        console.log(value);

    });
});