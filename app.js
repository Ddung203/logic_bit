
let id = (id) => document.getElementById(id);
let n1 = id("n1"), n2 = id("n2"), form = id("form"),
    resultOr = id("resultOr"),
    resultAnd = id("resultAnd"),
    resultXor = id("resultXor"),
    keotheo = id("keotheo"),
    tuongduong = id("tuongduong");
let modal = id("modal");
let accept = id("accept");
let close = document.querySelector(".close");
console.log(modal);
accept.onclick = () => {
    modal.classList.add("an")
}
close.onclick = () => {
    modal.classList.add("an")
}
form.addEventListener('submit', (e) => {
    e.preventDefault();
    engineCheckInput(n1, n2);
    engineOr(n1, n2, resultOr);
    engineAnd(n1, n2, resultAnd);
    engineXor(n1, n2, resultXor);
    engineKeoTheo(n1, n2, keotheo);
    engineTuongDuong(n1, n2, tuongduong)
})

let engineCheckInput = (n1, n2) => {
    n1.value = n1.value.trim();
    n2.value = n2.value.trim();

    let num1 = n1.value, num2 = n2.value;
    let myArray1 = num1.split("");
    let myArray2 = num2.split("");
    if (num1 === "" || num1 == null || num2 === "" || num2 == null || (myArray1.length != myArray2.length)) {
        modal.classList.remove("an");
    }
}

let engineOr = (n1, n2, resultOr) => {
    n1.value = n1.value.trim();
    n2.value = n2.value.trim();

    let num1 = n1.value, num2 = n2.value;
    let myArray1 = num1.split("");
    let myArray2 = num2.split("");
    let myArray3 = [];
    if (num1 === "" || num1 == null || num2 === "" || num2 == null || (myArray1.length != myArray2.length)) {

    } else {
        for (let i = 0; i < myArray1.length; i++) {
            if (myArray1[i] == 0 && myArray2[i] == 0) {
                myArray3[i] = 0;
            }
            else {
                myArray3[i] = 1;
            }
        }
        myArray3 = myArray3.toString();
        myArray3 = myArray3.replaceAll(',', '')
        resultOr.innerText = myArray3;
    }
};

let engineAnd = (n1, n2, resultAnd) => {
    n1.value = n1.value.trim();
    n2.value = n2.value.trim();

    let num1 = n1.value, num2 = n2.value;
    let myArray1 = num1.split("");
    let myArray2 = num2.split("");
    let myArray3 = [];
    if (num1 === "" || num1 == null || num2 === "" || num2 == null || (myArray1.length != myArray2.length)) {

    } else {
        for (let i = 0; i < myArray1.length; i++) {
            if (myArray1[i] == 1 && myArray2[i] == 1) {
                myArray3[i] = 1;
            }
            else {
                myArray3[i] = 0;
            }
        }
        myArray3 = myArray3.toString();
        myArray3 = myArray3.replaceAll(',', '')
        resultAnd.innerText = myArray3;
    }
};

let engineXor = (n1, n2, resultXor) => {
    n1.value = n1.value.trim();
    n2.value = n2.value.trim();

    let num1 = n1.value, num2 = n2.value;
    let myArray1 = num1.split("");
    let myArray2 = num2.split("");
    let myArray3 = [];
    if (num1 === "" || num1 == null || num2 === "" || num2 == null || (myArray1.length != myArray2.length)) {
    } else {
        for (let i = 0; i < myArray1.length; i++) {
            if (myArray1[i] !== myArray2[i]) {
                myArray3[i] = 1;
            }
            else {
                myArray3[i] = 0;
            }
        }
        myArray3 = myArray3.toString();
        myArray3 = myArray3.replaceAll(',', '')
        resultXor.innerText = myArray3;
    }
};

let engineKeoTheo = (n1, n2, keotheo) => {
    n1.value = n1.value.trim();
    n2.value = n2.value.trim();

    let num1 = n1.value, num2 = n2.value;
    let myArray1 = num1.split("");
    let myArray2 = num2.split("");
    let myArray3 = [];
    if (num1 === "" || num1 == null || num2 === "" || num2 == null || (myArray1.length != myArray2.length)) {

    } else {
        for (let i = 0; i < myArray1.length; i++) {
            if (myArray1[i] == 1 && myArray2[i] == 0) {
                myArray3[i] = 0;
            }
            else {
                myArray3[i] = 1;
            }
        }
        myArray3 = myArray3.toString();
        myArray3 = myArray3.replaceAll(',', '')
        keotheo.innerText = myArray3;
    }
};

let engineTuongDuong = (n1, n2, tuongduong) => {
    n1.value = n1.value.trim();
    n2.value = n2.value.trim();

    let num1 = n1.value, num2 = n2.value;
    let myArray1 = num1.split("");
    let myArray2 = num2.split("");
    let myArray3 = [];
    if (num1 === "" || num1 == null || num2 === "" || num2 == null || (myArray1.length != myArray2.length)) {

    } else {
        for (let i = 0; i < myArray1.length; i++) {
            if (myArray1[i] == 1 == myArray2[i]) {
                myArray3[i] = 0;
            }
            else {
                myArray3[i] = 1;
            }
        }
        myArray3 = myArray3.toString();
        myArray3 = myArray3.replaceAll(',', '')
        tuongduong.innerText = myArray3;
    }
};