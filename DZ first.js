// // task 1
// let admin;
// let name;
// name = "Illia";
// admin = name;
// alert(admin);

// task 2
// console.log("Ні, ні для age ні для bithday не можна використовувати ці змінні, адже це не ті самі змінні, в першому випадку нижній регістр, в другому верхній, а це різні змінні.")

// task 3
// let name = "Ilya " ;
// alert('hello ${1}');
// alert('hello ${"name"}');
// alert('hello ${name}');//виходячи з запуску коду з'явиться 3 вікна, які будуть вспливати послідовно один за одним

// task 4
// alert(""+1+0)//10
// alert(""-1+0)//-1
// alert(true+false)//1
// alert(6/"3")//2
// alert("2"*"3")//6
// alert(4+5+"px")//9px
// alert("$"+4+5)//$45
// alert("4"-2)//2
// alert("4px"-2)//NaN
// alert(7/0)//Infinity
// alert(" -9 "+5)//-9 5
// alert(" -9 "-5)//-14
// alert(null+1)//1
// alert(undefined+1)//NaN


// task5
// let a=1,b=1;
// let c=++a;//2
// let d=b++;//1

// task6
// let a=2;
// let x=1+(a*=2);//a=4,x=5

// task7
// alert(5>4)//true
// alert("ананас">"яблоко")//false
// alert("2" > "12")//true
// alert(undefined == null)//false
// alert(undefined === null)//false
// alert(null == "\n0\n")//false
// alert(null === +"\n0\n ")//false

// task8
// prompt("Who are you?")

// task9
// if ("0") {
//     alert( ' Привіт');
//     }//yes

// task10
// let name=prompt("Яка офіційна назва Javascript?");
// if (name=="ECMAscript"){ 
//     alert("Правильно!");
// } else{
//     alert("Не знаете? ECMAscript!")
// }

// task11
// let num=+prompt();
// if (num > 0){
//     alert('1');
// } else if (num < 0) {
//     alert('-1');
// } else if (num==0){
//     alert('0')
// }else{
//     alert('Impossible')
// }

// task12
// let result= (a+b<4) ? 'Мало': 'Багато';

//  task13
// let message=(login==' Співробітник') ? 'Привіт':
//             (login== 'Директор') ? 'Добрий день!':
//             (login == '') ? 'Відсутній логін':
//             '';    

// task14
// alert( null || 2 || undefined );//2

// task15
// alert(alert (1) || 2 || alert(3));//1 and 2

// task16
// alert(1 && null && 2);//null

// task17
// alert(alert(1) && alert(2));//1 and undefined

// // task 18
// alert(null || 2 && 3 || 4 );//3

// task19
// let age;
// if (age>=14 && age<=90);
//

// task 20
// let age;
// if (!(age >= 14 && age <= 90));
// let age;
// if (age<14||age>90);

// task 21
// if (-1 || 0) alert( 'first');//-1
// if (-1 && 0) alert( 'second' );//0
// if (null || -1 && 1) alert('third' );//1

// task 22
// let Username=prompt("Who are you?",'');
// if (Username==='Адмін'){
//     let pass=prompt("Password",'');
//     if (pass==='Я головний'){
//         alert('Здравствуйте!');
//     }else if (pass===''||pass===null){
//         alert('Скасовано')
//     }else{
//         alert('Невірний пароль');
//     }
// }else if (Username===''||Username===null){
//         alert('Скасовано')
//     }else{
//         alert('Я Вас не знаю');
//     }

// task23
// if(browser === 'Edge'){
//     alert("You've got the Edge");
// }else if(browser==='Chrome'
//     || browser==='Firefox'
//     || browser==='Opera'
//     || browser==='Safari'
// ){
//   alert('Okay we support these browsers too');   
// }else{
//     alert('We hope that this page looks ok!');
// }

// task 24
// let a = +prompt( 'a?', '');
// switch (a){
//     case 0:
//         alert(0);
//         break;

//     case 1:
//         alert(1);
//         break;
        
//     case 2:
//     case 3:  
//          alert('2,3');
//          break;  
// }

// task25

// let num=+prompt('');
// if (num>0){
//     alert(++num);
// }else{
//     alert(num);
// }

// task26
// let num=+prompt('');
// if (num>0){
//     alert(++num);
// }else{
//     alert(num-2);
// }

// task27
// let num=+prompt('');
// if(num>0){
//     alert(++num);
// }else if(num<0){
//     alert(num-2)
// }else{
//     alert(10);
// }

// task28
// let num=+prompt('');
// let fer=+prompt('');
// let per=+prompt('');
// let sum=0;
// if (num>0){
//     sum=sum+1;
// }if(fer>0){
//     sum=sum+1;
// }if(per>0){
//     sum=sum+1;
// }
// alert(sum);

// task 29
// let num=+prompt();
// let per=+prompt();
// let fer=+prompt();
// let sum=0;
// let min=0;
// if(num>0){
//     sum=sum+1
// }if(per>0){
//     sum=sum+1
// }if(fer>0){
//     sum=sum+1
// }if(num<0){
//     min=min+1
// }if(per<0){
//     min=min+1
// }if(fer<0){
//     min=min+1
// }
// alert( sum);
// alert(min);

// task30
// var first = prompt('Введите первое число');
// var second = prompt('Введите второе число');

// var max = function (){
//   if (first > second){
//     alert(first)
//   } else if (first == second){
//     alert('Числа равны')
//   } else {
//     alert(second);
//   }
// }

// max();

// task31
// var first = prompt('Введите первое число');
// var second = prompt('Введите второе число');

// var min = function (){
//   if (first < second){
//     alert(first)
//   } else if (first == second){
//     alert('Числа равны')
//   } else {
//     alert(second);
//   }
// }

// min();

// task32
// var first=prompt('');
// var second =prompt('');
// let message = (first>second) ? first:
//     (second>first) ? second:
//     'Числа рівні';

// let sms = (first>second) ? second:
//     (second>first) ? first:
//     'Числа рівні';
     
// alert(message);
// alert(sms);    

// task33
// let A=prompt('');
// let B=prompt('');
// let buf;
// if (A>B){
//     buf=B;
//     B=A;
//     A=buf;    
// }
// alert(A);
// alert(B);

// task34
// let A=+prompt('');
// let B=+prompt('');
// if (A<B){
//     A=A+B;
//     B=A;
// }else if(A>B){
//     A=A+B;
//     B=A;
// }else {
//     A=0;
//     B=A;
// }
// alert(A);
// alert(B);


// task 35
// let A=+prompt('');
// let B=+prompt('');
// if (A<B){
//     ++A;
//     ++B;
// }else if(A>B){
//     ++A;
//     ++B;
// }else {
//     A=0;
//     B=A;
// }
// alert(A);
// alert(B);

// task36
// var A=+prompt('');
// var B=+prompt('');
// var C=+prompt('');

//first solution
// var result=Math.min(A,B,C);
// alert(result);

//second solution
// if(A>B>C){
//     alert(C);
// }else if(A<B<C){
//     alert(A);
// }else{
//     alert(B);
// }

// task37
// var A=+prompt('');
// var B=+prompt('');
// var C=+prompt('');
// if(A>B>C){
//     alert(B);
// }else if(A<B<C){
//     alert(B);
// }else if(B>A>C){
//     alert(A);
// }else if(B<A<C){
//     alert(A);
// }else{
//     alert(C);
// }

// task38
// var A=+prompt('');
// var B=+prompt('');
// var C=+prompt('');
// var resultOne=Math.min(A,B,C);
// var resultTwo=Math.max(A,B,C);
// alert(resultOne);
// alert(resultTwo);
//I'm so sorry for using such a method, but i'm too lazy to use "if"


// task39
// var num=+prompt('');
// var fer=+prompt('');
// var per=+prompt('');
// let sum;
// let min;
// if(num<fer){
//     min=num;
// }else {
//     min=fer;
// }if(per<min){
//     min=per;
// }
// sum=num+fer+per-min;
// alert(sum);

// task40
// var n1=+prompt('');
// var n2=+prompt('');
// var n3=+prompt('');

// if(n1==n2){
//     alert(n3);
// }else if(n1==n3){
//     alert(n2);
// }else{
//     alert(n1);
// }