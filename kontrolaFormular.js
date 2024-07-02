let jmeno, prijmeni, mail, rostlina, popis;
let prazdny;
let pristupProUlozeni = [1];

function posliDotaz() {
  zjistiVstupy();
  kontrolaPrazdnostiVstupu();
  if (!prazdny) {
    kontrolaJednotlivych(0);
    if(pristupProUlozeni[0] == true){
      odeslatDotaz();
    }
  }
}

function vynulujVstupy() {
  document.getElementById("jmeno").value = "";
  document.getElementById("prijmeni").value = "";
  document.getElementById("email").value = "";
  document.getElementById("rostlina").value = "";
  document.getElementById("popis").value = "";
}

function zjistiVstupy() {
  jmeno = document.getElementById("jmeno");
  prijmeni = document.getElementById("prijmeni");
  mail = document.getElementById("email");
  rostlina = document.getElementById("rostlina");
  popis = document.getElementById("popis");
}

function kontrolaPrazdnostiVstupu() {
  let pocetChyb = 0;
  prazdny = false;

  let hodnotyListu = [jmeno, prijmeni, mail, rostlina, popis];
  for (let i = 0; i < hodnotyListu.length; i++) {
    if (hodnotyListu[i].value == "") {
      hodnotyListu[i].style.backgroundColor = '#ff4d4d';
      pocetChyb++;
    } else {
      hodnotyListu[i].style.backgroundColor = "white";
    }
  }

  if (pocetChyb == 5) {
    alert("Formulář nelze odeslat prázdný!");
    prazdny = true;
  }
}

function kontrolaJednotlivych(index) {
  //email
  switch(index){
    case 0:
                 //Mail
                let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!mail.value.match(mailformat)) {
                    alert("Neplatná emailová adresa!");
                    mail.style.backgroundColor = '#ff4d4d';
                  pristupProUlozeni[0] = false;  
    
                }
                else {
                  pristupProUlozeni[0] = true;  
                    return;
                }
    
    break;
              }
}

function odeslatDotaz() {
    alert("Rezervace byla úspěšná!");
    pristupProUlozeni = [false]; // Resetovat hodnoty pristupProUlozeni
    //zjistiVstupy(); // Ponechání hodnot ve vstupech
    let dotaz = new Dotaz(jmeno.value, prijmeni.value, null, null, mail.value, null);
    vynulujVstupy();

  }

class Dotaz {
  constructor(firstName, lastName, date, count, email, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.date = date;
    this.count = count;
    this.email = email;
    this.phone = phone;
  }
}