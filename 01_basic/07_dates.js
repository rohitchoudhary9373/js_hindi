// // dates
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof(myDate));  //important


// let mycreatedDate = new Date(2025,5, 25)
// let mycreatedDate =new Date(2025,0,3,5,5,)
// let mycreatedDate =new Date("2005-01-03")
let mycreatedDate = new Date("03-04-2006")
// console.log(mycreatedDate.toLocaleDateString());


// // time stamp
// let mytimestamp = Date.now()
// // console.log(mytimestamp);
// // console.log(mycreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));   //important

let newdate=new Date
// console.log(newdate.getDate());//yha h newdate. lgate hi date ke alll function samne aajaate h
// console.log(newdate.getDay());
// console.log(newdate.getFullYear());
// console.log(newdate.getMonth());

newdate.toLocaleString('default',{
    weekday: "long"
})






