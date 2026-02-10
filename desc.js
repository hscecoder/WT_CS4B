const Student={
    name:"Himanshu Soni",
    age:33,
    address:{
        city:"Delhi",
        country:"India"
    }
}

// const {name:HiName,age,address:{city,country}}=Student;
// console.log(HiName,age,city,country);

const display=()=>{
    console.log(Student.name,Student.age,Student.address.city,Student.address.country);
}


display();

