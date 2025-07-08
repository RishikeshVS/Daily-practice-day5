// returns index

var arr=["apple","mango","grapes"];
for(items in arr)
{
    console.log(items);
}  

console.log(names);

for(index in names)
{
   console.log("Indices are:" +index);
} 
for(index in names)
{
   console.log(index, names[index]);
}
for(index in names)
{
   console.log("Names are:" +names);
} 

const person={name: "Rishi",age: 22,city: "Chennai"};

for(key in person) 
{
  console.log(key,person[key]);
}



