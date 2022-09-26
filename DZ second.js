// task 1
// let i = 3;
// while (i) {
//  alert(i--);
// }
// Значення з якого стартує цикл=3. Тому як минус в постафиксном форматі то спершу значення 
//буде повертатися сама трійка, а потім спадати на один і так до 1. У кінці 1, а цикл по дефолту проходить до 0.


//task 2
// let A=+prompt('');
// let B=+prompt('');
// let C=+prompt('');
// while(A,B,C){
//     if(A<B&&A<C&&B<C){
//         alert(A*2);
//         alert(B*2);
//         alert(C*2);
//         break
//     }else{
//         alert(-A);
//         alert(-B);
//         alert(-C);
//         break
//     }
// }

//task 3
// let A=+prompt('');
// let B=+prompt('');
// let C=+prompt('');
// while(A,B,C){
//     if(A<B&&A<C&&B<C){
//         alert(A*2);
//         alert(B*2);
//         alert(C*2);
//         break
//     }else if(A>B&&A>C&&B>C){
//         alert(A*2);
//         alert(B*2);
//         alert(C*2);
//         break
//     }else{
//         alert(-A);
//         alert(-B);
//         alert(-C);
//         break
//     }
// }


// task 4
// let A=+prompt('Координати точки?');
// let B=+prompt('Координати точки?');
// let C=+prompt('Координати точки?');
// while(B,C){
//     if(A-B<A-C){
//         alert(B);
//         break
//     }else{
//         alert(C);
//         break
//     }
// }


// task 5
// let x=+prompt('Точка x?');
// let y=+prompt('Точка y?');
// while(Number.isInteger(y, x)){
//     if(x==0&&y==0){
//         alert(0);
//         break
//     }else if((y==0)&&x>0){
//         alert(1);
//         break
//     }else if((x==0)&&y>0){
//         alert(2);
//         break
//     }else{
//         alert(3);
//         break
//     }
// }while(!(Number.isInteger(y, x))){
//     alert(false);
//     break
// }

// task6
// let x=+prompt('Точка x?');
// let y=+prompt('Точка y?');
// while(x,y){
//     if(x>0&&y>0){
//         alert('Координати належать першій чверті');
//           break
//     }if(x<0&&y>0){
//         alert('Координати належать другій чверті');
//         break
//     }if(x<0&&y<0){
//         alert('Координати належать третій чверті');
//         break
//     }if(x>0&&y<0){
//         alert('Координати належать четвертій чверті');
//         break
//     }
// }

// task7
// let xFour;
// let yFour;
// let num={
//     xOne:+prompt('x1?'),
//     yOne:+prompt('y1?'),
//     xTwo:+prompt('x2?'),
//     yTwo:+prompt('y2?'),
//     xThree:+prompt('x3?'),
//     yThree:+prompt('y3?'),
// }
// resultOne="X=" + num.xThree;
// resultTwo="Y=" + num.yOne;
// alert(resultOne);
// alert(resultTwo);

// task8
// let year=+prompt('Whats the year now?');
// let days;
// while(Number.isInteger(year)&&year>0){
//         if(year%4==0){
//                 days=366;
//                 break
//       }else if((year%100==0)&&(year%400!=0)) {
//         days=365;
//     }else{
//         days=365;
//         break
//       }
// }while(!(Number.isInteger(year))||year<0){
//     days=false;
//     break
// }
// alert(days);

// task 9
// let num=+prompt('');
// let bur=num;
// let resultOne;
// let resultTwo;
// while(num){
//     if(num==0){
//         resultOne='Нульове';
//         break
//     } if(num>0){
//         resultOne='Додатнє';
//         break 
//     }if (num<0){
//         resultOne="Від'ємне";
//         break
//     }
// }while(bur){
//     if(bur%2==0){
//         resultTwo='парне число';
//         break
//     }else{
//         resultTwo='непарне число';
//         break
//     }
// }
// let resultThree=resultOne+" "+resultTwo;
// alert(resultThree);

// task10
// let num=+prompt('');
// let buf=num;
// let resultOne;
// let resultTwo;
// while(Number.isInteger(num)&&num>=1&&num<1000){
//     if(num%2==0){
//         resultOne= 'Парне';
//         break
//     }else{
//         resultOne='Непарне';
//         break
//     }
// }    
// while(Number.isInteger(buf)&&buf>=1&&buf<1000){
//     if(num>=100){
//         resultTwo='Тризначне';
//         break
//     }if(num>=10&&num<100){
//         resultTwo='Двозначне';
//         break
//     }if(num>=1&&num<10) {
//         resultTwo='Однозначне';
//         break
//     }
// }while(!(Number.isInteger(num))&&num<1&&Num>=1000){
//     resultOne='Поза';
//     resultTwo='діапазоном';
//     break
// }
// resultThree=resultOne+" "+resultTwo;
// alert(resultThree);


// task11
//   let i = 0;
//   while (++i < 5) alert(i);
// let i = 0;
//  while (i++ < 5) alert(i);
// У першому випадку цикл перебере усі значення до 5 не включно, а в другому випадку включно
//Префіксна форма не повертає минуле значення, а постафіксна повертає


//task 12
//  for (let i = 0; i < 5; i++) alert(i);
// for (let i = 0; i < 5; ++i) alert(i);
//У даному прикладі вивід буде однаковий,на відміну від попереднього де змінні створені поза циклом, то тут змінні покладені у цикл і 
//відлік розпочинається зі значення змінної.

// task13
// for(let i=2; i<=10; i++){
//     if(i%2==0){
//         alert(i);
//     }
// }
 

// task14
// let i=0;
// while(i<3){
//     alert( `number ${i}!` );
//     i++;
// }


// task15
// let num;
// do{
//     num= prompt("Ввести число більше 100" ,0);
// }while(num<=100&&num);

// task 16

// let n = 20;

// for (let i = 2; i <= n; i++) {
//     let flag = 1;
//     if (i > 2 && i % 2 != 0)
//     {
//         for (let j = 3; j*j <= i ; j=j+2)
//         {
//             if (i%j==0)
//             {
//                 flag=0;
//                 break;
//             }
//         }
//     }
//     else if (i != 2) flag = 0;
//     if (flag==1) {console.log(i);}
// }

// task 17
// let num=+prompt('');
// let buf=+prompt('');
// let result=num+buf;
// while(result){
//     alert(result/2);
//     break
// }

// task18
// let num=+prompt('');
// while(num){
//     alert(num**2);
//     break
// }

// task 19
// let num=+prompt('');
// let buf=+prompt('');
// let hut=+prompt('');
// let resultOne=Math.min(num,buf,hut);
// let resultTwo=Math.max(num,buf,hut);
// alert(resultTwo-resultOne);

// task20
// let num=+prompt('');
// let result=num/2;
// while(result){
//     if(Number.isInteger(result)){
//         alert('Парне');
//         break
//     }else{
//         alert('Непарне');
//         break
//     }
// }

// task21
// let num=+prompt('');
// while(num>0&&num<100){
//         if(num>=10&&num<100){
//             alert('Дві цифри');
//             alert( eval(num.toString().split('').join('+')) );
//             break
//         }else{
//             alert('Одна цифра');
//             alert(num);
//             break
//         }
//     }

// task22
// let santim=+prompt('Сантиметри?');
// let duym=+prompt('Дюйми?');
// while(santim){
//     alert(santim*(0.254));
//     break
// }while(duym){
//     alert(duym*(2.54));
//     break
// }

// task23
// let answerOne=prompt("Коли з'явилася мова Javascript?");
// while(answerOne){
//      if(answerOne=="1995"){
//         alert('Так точно');
//         break
//      }if(answerOne===null||answerOne===""){
//         alert('Скасовано');
//      }else{
//         alert('Неправильно');
//         break
//      }
// }
// let answerTwo=prompt("Коли виникла компанія Apple?");
// while(answerTwo){
//     if(answerTwo=="1976"){
//         alert('Так точно');
//         break
//      }if(answerTwo===null||answerTwo===""){
//         alert('Скасовано');
//      }else{
//         alert('Неправильно');
//         break
//      }
// }
// let answerThree=prompt("Хто засновник компанії Apple");
// while(answerThree){
//     if(answerThree=="Стів Джобс"){
//         alert('Так точно');
//         break
//      }if(answerThree===null||answerThree===""){
//         answerThree=prompt("Хто засновник компанії Apple");
//      }else{
//         alert('Неправильно');
//         break
//      }
// }
//Хотів би тут спросити, в мене не вийшло при відміні чи пустоті строки наново задати питання, 
//я і в цикл додавав ще цикл але вийшло зовсім інше, а так не працює, і хотів би спитати як краще було зробити

// task24
// let num=+prompt('');
// let result=num/2;
// while(num>=100&&num<1000){
//     if(Number.isInteger(result)){
//         alert( eval(num.toString().split('').join('+')) );
//         break;
//     }
//     if(!(Number.isInteger(result))){
//         alert( eval(num.toString().split('').join('*')) );
//         break;
//     }else{
//     alert(False);}
// }

// task25
// let first=prompt('');
// let second=prompt('');
// let third=prompt('');
// let result=first+second;

// while(first,second,third){
//     if(result>third){
//         alert("Трикутник може існувати");
//         break
//     }
//     else{
//         alert("Трикутник не може існувати");
//         break
//     }
// }

// task26
// let x=4;
// let y=9;
// let R=10;
// let result=(x**2)+(y**2);
// while(result,R){
//     if(result<(R**2)){
//         alert("Точка належить колу");
//         break
//     }else{
//         alert("Точка не належить колу");
//         break
//     }
// }

// task27
// let user={

// }
// user.name="John";
// user.surname="Smith";
// user.name="Pete";
// delete user.name;

// task28
// console.log("Так, тому що змінюємо значення в самому об'єкті, а не об'єкт");

// task29
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//     }
// let resultOne=salaries.John;
// let resultTwo=salaries.Ann;
// let resultThree=salaries.Pete;
// let sum=resultOne+resultTwo+resultThree;
// alert(sum);

// task30
// let tree = {
//     width: 200,
//     height: 300,
//     title: "Tree"
//   };

//   function multiplyNumeric(obj) {
//     for (let key in obj) {
//       if (typeof obj[key] == 'number') {
//         obj[key] *= 2;
//       }
//     }
//   }    