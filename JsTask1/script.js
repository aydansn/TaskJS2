//----------------------------------Task-1-----------------------------------------
const olkeniTesvirEt = (olke, populasiya, paytaxtSeher) => {
    const sentence = `${olke} nin ${populasiya} ehalisi var. ve ${paytaxtSeher} onun paytaxtSeheridir.`;
    console.log(sentence);
   
};
olkeniTesvirEt("Canada" ,38.93000 ,"Ottawa");
olkeniTesvirEt("Azerbaycan" ,10.14 ,"Baki");
olkeniTesvirEt("America" ,333.3 ,"Washington");

//----------------------------------Task-2-----------------------------------------
function dunyaninFaizi1 (populasiya){
    const worldPopulasiya = 7900;
    const worldtotal = (populasiya / worldPopulasiya ) *100;
   return `Cinin  ${populasiya} milyon ehalisi var dunyanin ${worldtotal}% - ini teshkil edir`;
}
console.log(dunyaninFaizi1(7541));
console.log(dunyaninFaizi1(3565));
console.log(dunyaninFaizi1(481));

function dunyaninFaizi2 (populasiya) {
    const worldPopulasiya = 9800;
    const worldtotal = (populasiya / worldPopulasiya ) *100;
   return `Americanin  ${populasiya} milyon ehalisi var dunyanin ${worldtotal}% - ini teshkil edir`;
};
console.log(dunyaninFaizi2(34030));
console.log(dunyaninFaizi2(4365));
console.log(dunyaninFaizi2(981));

//----------------------------------Task-3-----------------------------------------

const dunyaninFaizi3 = (populasiya) => {
    const worldPopulasiya = 3200;
    const worldtotal = (populasiya / worldPopulasiya ) *100;
   return `Canadanin  ${populasiya} milyon ehalisi var dunyanin ${worldtotal}% - ini teshkil edir`;
};
console.log(dunyaninFaizi3(5030));
console.log(dunyaninFaizi3(7565));
console.log(dunyaninFaizi3(67481));

//----------------------------------Task-4-----------------------------------------
const populasiyaniGoster = (olke,populasiya) => {
    const worldPopulasiya = 3200;
    const worldtotal = (populasiya / worldPopulasiya ) *100;
   return `  ${olke} nin  ${worldPopulasiya} milyon ehalisi var dunyanin ${worldtotal}% - ini teshkil edir`;
   
};
console.log(populasiyaniGoster("Japon", 5454));
console.log(populasiyaniGoster("NewYork", 954));
console.log(populasiyaniGoster("Berlin", 2154));

//-----------------------------------Challange-1-------------------------------------------
// const ortalamaHesabla = (Delfin,Koala) => {
//     const delfinOrtalama = console.log( (44+23+71)/3);
//     const koalaOrtalama = console.log( (44+23+71)/3);
//     const ortalama = `${delfinOrtalama} ${koalaOrtalama}`;
//     console.log(Delfin,Koala);
// };
// ortalamaHesabla(delfinOrtalama);

//----------------------------------Task-1.1-----------------------------------------
function hesabla (number){
    return number*5;
}
const beshevur = hesabla(10);
console.log(beshevur);


//----------------------------------Task-2.1------------
function argumentWas(parameter) {
    return "Argument was: " + parameter;
}
const sentence = argumentWas("Hello");
console.log(sentence); 

//----------------------------------Task-3.1-----------

function hesabla(number1, number2) {
    return  (number1+number2)/2;
}
const edediOrta = hesabla(5,10);
console.log(edediOrta);


//----------------------------------Task-4.1-----------

function next(number0) {
    return  number0**2;
}
const ededinKvadrati = next(12);
console.log(ededinKvadrati);

const some = (num)=>{
    return  num**2;
};
const kvadrati = some(5);
console.log(kvadrati);


//----------------------------------Task-5.1----------
const eded = (say)=>{
    return Math.sqrt(say);
};
const netice = eded(16);
console.log((netice));

//----------------------------------Task-6.1----------
const yoxla = (argument)=>{
   if(typeof argument === "number"){
    return argument*2;
   }
   else if( typeof argument === "string"){
    return argument.length;
   }
   else{
    return "argument teyin olunmayib";
   }

};
const nextNetice = yoxla(3);
console.log((nextNetice));
const otherresult = yoxla("Aydan");
console.log(otherresult); 

//----------------------------------Task-7.1----------

function checkAge(dogumIli){
    const currentYear = new Date().getFullYear();
    console.log(currentYear-dogumIli);
    return currentYear-dogumIli;
}
 checkAge(1978);
 checkAge(1974);
 checkAge(2003);
 checkAge(2004);
 checkAge(2009);

 const info =  (job,dogumIli) => {
    const cumle = `${job} ishidir, ${dogumIli} yashiniz `;
    console.log(cumle);
 }
 info("Drector", 1978);
 info ("Developer", 2004);
 info("Psychology", 2003);
 info("Student", 2009);
 