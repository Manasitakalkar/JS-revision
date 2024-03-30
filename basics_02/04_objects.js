const tinderUser = new Object();  // singleton object0
// const tinderUser = {} // non singleton object
tinderUser.id = "123"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "someone@gmail.com",
    name: {
        fullName: {
            firstName: "manasi",
            lastName: "takalkar"
        }
    }
}

// console.log(regularUser);
// console.log(regularUser.name.fullName.lastName);

const obj1 = {1: "a", 2:"b"};
const obj2 = {3: "c", 4:"d"};

// const obj3 = { obj1, obj2 }
const obj3 = Object.assign({},obj1, obj2)    //Object.assign(target, source)
//const obj3 = Object.assign(obj1, obj2)
//console.log(obj3);
//console.log(obj1);
const obj4 = {...obj1, ...obj2}
//console.log(obj4);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  //array
// console.log(Object.values(tinderUser)); //array
// console.log(Object.entries(tinderUser)); //array inside array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName : "JS advance masterclass",
    fees: "999",
    courseInstructor: "hitesh"
}
console.log(course.courseInstructor);
// const {fees} = course;
// console.log(fees);
const {fees : f} = course;
console.log(f);
