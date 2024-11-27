const storedData = sessionStorage.getItem('abcde');
var abcde = storedData ? JSON.parse(storedData) : {
    "soal 1": null,
    "soal 2": null,
    "soal 3": null,
    "soal 4": null,
    "soal 5": null,
    "soal 6": null,
    "soal 7": null,
    "soal 8": null,
    "soal 9": null,
    "soal 10": null,
    "soal 11": null,
    "soal 12": null,
    "soal 13": null,
    "soal 14": null,
    "soal 15": null,
    "soal 16": null,
    "soal 17": null,
    "soal 18": null,
    "soal 19": null,
    "soal 20": null,
};

const storedDataBenar = sessionStorage.getItem('abcdeBenar');
var abcdeBenar = storedData ? JSON.parse(storedData) : {
    "soal 1": "pilihan-a",
    "soal 2": "pilihan-b",
    "soal 3": "pilihan-b",
    "soal 4": "pilihan-a",
    "soal 5": "pilihan-c",
    "soal 6": "pilihan-b",
    "soal 7": "pilihan-b",
    "soal 8": "pilihan-a",
    "soal 9": "pilihan-a",
    "soal 10": "pilihan-a",
    "soal 11": "pilihan-a",
    "soal 12": "pilihan-a",
    "soal 13": "pilihan-c",
    "soal 14": "pilihan-a",
    "soal 15": "pilihan-b",
    "soal 16": "pilihan-c",
    "soal 17": "pilihan-e",
    "soal 18": "pilihan-a",
    "soal 19": "pilihan-c",
    "soal 20": "pilihan-e",
}

function saveData() {
    sessionStorage.setItem('abcde', JSON.stringify(abcde));
}

function saveDataHasil() {
    sessionStorage.setItem('abcdeBenar', JSON.stringify(abcdeBenar));
}

window.onload = function() {
    let hasil = abcde[`${nomorSoal}`]
    if(hasil !== null){
        document.getElementById(`${hasil}`).checked = true;
    }
};

function masukanBenar(){
    const selected = document.querySelector('input[name="pilihan"]:checked');
    if (selected) {
        abcde[`${nomorSoal}`] = selected.id;
        saveData();
    }
}

function Benar(){
    console.log(abcde);
}


function yakin(){
    let allNotNull = true;
    for (var key in abcde) {
        if (abcde[key] == null) {
            allNotNull = false;
        }
    }
    if(allNotNull){
        saveDataHasil();
        window.location.href = `Hasil.html`;
        return;
    }

    for (var key in abcde){
        console.log(key);
        if(abcde[key] == null){
            window.location.href = `${key}.html`;
            return;
        }
    }
}

function benarDanSalah(){
    for (var key in abcde){
        if(abcde[key] == abcdeBenar[key]){
            console.log(`.${key.replace(" ","-")} #${abcde[key]}`)
            let soalButton = document.querySelector(`.${key.replace(" ","-")} #${abcde[key]}`);
            // soalButton.style.color = 'green';
            console.log(soalButton)
        }
        else{
            // console.log(`${abcde[key]} != ${abcdeBenar[key]}`)
        }
    }
}