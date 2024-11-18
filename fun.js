const game = document.querySelector(".game");
const winner = document.querySelector("#winner");
let turn = true;

const arr2 = [[1, 2, 3]];

const child = game.children



game.addEventListener('click', (e) => {

    if (e.target.innerText === "") {
        if (turn) {
            e.target.innerText = "O"
            turn = false
        }
        else {
            e.target.textContent = "X"
            turn = true
        }
    }

    if ((child[0].innerText == "X" && child[1].innerText == "X" && child[2].innerText == "X") || child[0].innerText == "O" && child[1].innerText == "O" && child[2].innerText == "O") {
        winner.innerText = "Winner"
        winner.classList.add('win')



        for (const element of child) {
            // element.innerHTML = ""
            element.style.pointerEvents = "none"
        }
    }
    else if ((child[3].innerText == "X" && child[4].innerText == "X" && child[5].innerText == "X") || child[3].innerText == "O" && child[4].innerText == "O" && child[5].innerText == "O") {
        winner.innerText = "Winner"
        winner.classList.add('win')



        for (const element of child) {
            // element.innerHTML = ""
            element.style.pointerEvents = "none"
        }
    }

    else if ((child[6].innerText == "X" && child[7].innerText == "X" && child[8].innerText == "X") || child[6].innerText == "O" && child[7].innerText == "O" && child[8].innerText == "O") {
        winner.innerText = "Winner"
        winner.classList.add('win')



        for (const element of child) {
            // element.innerHTML = ""
            element.style.pointerEvents = "none"
        }
    }

    else if ((child[0].innerText == "X" && child[3].innerText == "X" && child[6].innerText == "X") || child[0].innerText == "O" && child[3].innerText == "O" && child[6].innerText == "O") {
        winner.innerText = "Winner"
        winner.classList.add('win')



        for (const element of child) {
            // element.innerHTML = ""
            element.style.pointerEvents = "none"
        }
    }
    else if ((child[1].innerText == "X" && child[4].innerText == "X" && child[7].innerText == "X") || child[1].innerText == "O" && child[4].innerText == "O" && child[7].innerText == "O") {
        winner.innerText = "Winner"
        winner.classList.add('win')



        for (const element of child) {
            // element.innerHTML = ""
            element.style.pointerEvents = "none"
        }
    }

    else if ((child[2].innerText == "X" && child[5].innerText == "X" && child[8].innerText == "X") || child[2].innerText == "O" && child[5].innerText == "O" && child[8].innerText == "O") {
        winner.innerText = "Winner"
        winner.classList.add('win')



        for (const element of child) {
            // element.innerHTML = ""
            element.style.pointerEvents = "none"
        }
    }

    else if ((child[0].innerText == "X" && child[4].innerText == "X" && child[8].innerText == "X") || child[0].innerText == "O" && child[4].innerText == "O" && child[8].innerText == "O") {
        winner.innerText = "Winner"
        winner.classList.add('win')



        for (const element of child) {
            // element.innerHTML = ""
            element.style.pointerEvents = "none"
        }
    }

    else if ((child[2].innerText == "X" && child[4].innerText == "X" && child[6].innerText == "X") || child[2].innerText == "O" && child[4].innerText == "O" && child[6].innerText == "O") {
        winner.innerText = "Winner"
        winner.classList.add('win')



        for (const element of child) {
            // element.innerHTML = ""
            element.style.pointerEvents = "none"
        }
    }


})






function resetAll() {
    for (const element of child) {
        element.innerHTML = ""
        element.style.pointerEvents = "auto"
    }

    winner.innerText = "";
    const iswin = winner.classList.contains('win')
    if (iswin) {
        winner.classList.remove('win');
    }
}



