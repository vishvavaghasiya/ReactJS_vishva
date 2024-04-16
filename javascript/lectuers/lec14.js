// javascript array and it's method

{
 let array = [10,50,89,101,452]
 
 array[0] = 30

 console.log(array);

 let Newarray = new array (10 , 50 , 89 , 101 , 452)

 console.log(array);

 console.log(Newarray);

 console.log(array.length);

 console.log(Newarray.length);

 console.log(typeof array);

 console.log(typeof Newarray);
}
{
    let array = [10]
    let Newarray = new array(10)
    console.log(array);
    console.log(Newarray);
    console.log(array.length);
    console.log(Newarray.length);
}

{
    let array = ["javascript",46,false,undefined,null]

    console.log(array);

    console.log(array.length);

    console.log(array);

    // array push method

    array.push("html")
    array.push("css")

    console.log(array);

    // array unshift method

    array.unshift("sass")
    array.unshift("tailwindcss")

    console.log(array);

    // array pop method

    array.pop()
    array.pop()

    console.log(array);

    // array shift method

    array.shift()
    array.shift()

    console.log(array);

    // array tostring method

    let string = array.toString()

    console.log(string);

    // array reverce method

    let reverce = array.reverse()
    console.log(reverce);

    // array foreach method

    array.forEach((item) => console.log(item))

    // array concat method

    { 
      let arry1 = [12,45,787] 
      let arry2 = [true , false] 
      let arry3 = ["reactjs" , "nodejs"] 

      let Newarray = arry1.concat(arry2,arry3)

      console.log(Newarray);
    }

}