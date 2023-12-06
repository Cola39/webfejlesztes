$(document).ready(function () {
    $("#urlap").validate({
        rules: {
            nev: "required",
            email: {
                required: true,
                email: true
            },
            telefon: {
                required: true,
                minlength: 12
            },
            elfogad: {
                required: true,
            },
            velemeny: {
                required: true,
            },
        },
        messages: {
            nev: " Kérjük, írja be a teljes nevét!",
            email: " Kérjük, valós email-címet adjon meg!",
            telefon: {
                required: " Kérjük, valós telefonszámot adjon meg!",
                minlength: " A telefonszámnak 12 karakter hosszú kell, hogy legyen!"
            },
            elfogad: " Kérjük fogadja el a feltételeinket!",
            velemeny: " Kérjük töltse ki ezt a mezőt!",
        },
    });
});

document.getElementById("elkuld").addEventListener("click", kviz);
function kviz() {
    let pont = 0;

    const a = document.getElementById("liszt_szuletes").value;
    if (a == "1811-10-22") { pont = pont + 1 }

    const b = document.getElementById("varazsfuvola").value;
    if (b == "A varázsfuvola") { pont = pont + 1 }

    const c = document.getElementById("beethoven").checked;
    const d = document.getElementById("vivaldi").checked;
    const e = document.getElementById("mozart").checked;
    const f = document.getElementById("liszt").checked;
    const g = document.getElementById("bach").checked;
    const h = document.getElementById("schumann").checked;
    const i = document.getElementById("haydn").checked;
    const j = document.getElementById("chopin").checked;
    if (c == 1 && d == 0 && e == 1 && f == 0 && g == 0 && h == 0 && i == 1 && j == 0) { pont = pont + 1; };

    const k = document.getElementById("evszak").checked;
    if (k == 1) { pont = pont + 1; };

    const l = document.getElementById("lengyel").selectedIndex;
    if (l == 0) { pont = pont + 1; };

    if (pont == 5) {
        alert("Gratulálunk, hibátlanra töltötte ki a tesztet!");
    }
    else {
        alert(`Összesen ${pont} pontot sikerült elérnie az 5-ből!`)
    }
}