class Osoba{
  ime;
  prezime;
  godiste;
  constructor(ime,prezime,godiste)
  {
    this.ime=ime;
    this.prezime=prezime;
    this.godiste=godiste;
  }
pozdrav(){
  console.log(`Zdravo ja sam ${this.ime} imam ${2022-this.godiste} godina`)
}

}
let ja=new Osoba('Milan','Vujic', 2004);
ja.pozdrav();

class Nastavnik{
  ime;
  prezime;
  godiste;
  predmet;
  constructor(ime,prezime,godiste,predmet)
  {
    this.ime=ime;
    this.prezime=prezime;
    this.godiste=godiste;
    this.predmet=predmet;
  }


  pozdrav()
  {
    console.log(`Zdravo ja sam ${this.ime} imam ${2022-this.godiste} godina i predajem ${this.predmet}`)
  }
  dajOcenu()
  {
    console.log(Math.round(Math.random() *5));
  }
}
let profesor=new Nastavnik('Milan' , 'Vukadin' , 1987 , 'programiranje');
profesor.pozdrav();
profesor.dajOcenu();
