//returns value

var arr=["apple","mango","grapes"];
for(each of arr)
{
    console.log(each);
}  

names=["ram","sam","jack","john"];

for(index of names)
{
    console.log(index);         //here index represents the actual value
} 
for(index of names)
{
    console.log("Names are:" +names);
} 

// Object
const person={name: "Rishi",age: 22,city: "Chennai"};

for(let eachkey of Object.keys(person)) 
{
  console.log(eachkey);
}
for(let eachvalue of Object.values(person)) 
{
  console.log(eachvalue);
}
for(let items of Object.entries(person)) 
{
  console.log(items);
}
for(let [key,value] of Object.entries(person)) 
{
  console.log(key,value);
}




