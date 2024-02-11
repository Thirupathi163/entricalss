let text="nani"
 let text2="nani,sunny,vanaja"
 console.log(text.length)
console.log(text.slice(1))
console.log(text.slice(2,4))

console.log(text2.slice(4,8))



 let x="hello world"
let w =x.toUpperCase();
let a=x.toLowerCase();
console.log(w)
console.log(a)

task

const text1="helloword"
console.log(text1.toUpperCase())

let sub="maths" ,sub2="computers"
console.log(" first in " + sub + " second in " + sub2)
console.log(sub +" "+ sub2)
console.log(`first in ${sub } and second in ${sub2}`)

let str="nani,sunny,tambi"
console.log(str.substring(5,10))

//difference between         slice                     substrin
        
                   //        negative values            dont have -ve values



 //replace method

 let r="This is ram";
 console.log("after",r.replace("ram","srihitha"))

 let r1="This is ram";
 console.log("before",r1.replace("Ram","srihitha"))

//using flag i

 let g="please visit tirupati!"
 console.log("before",g.replace("Tirupati","mahanandi"))
 let k="please visit tirupati!"
 console.log("after",k.replace(/Tirupati/i,"mahanandi"))

//using flag g
 let l="please visit tirupati!"
 console.log("before",l.replace("Tirupati","mahanandi"))
 let d="please visit tirupati!"
 console.log("after",d.replace(/tirupati/g,"mahanandi"))

 //concat method

 let txt="ammu"
 let txt2="lucky"
 let txt3=txt.concat(" ",txt2," ")
 console.log(txt3)


 //trim method

 let ss="      tambi sunny     "
 console.log(ss)
 let www="    nani sunny    "
 console.log(www.trim());


//padstart method
let mobileno="8897589322"
 let part=mobileno.slice(-4);
 console.log(part.padStart(10,"*"))
                                             
 


//using  concatmethod
 let x1="rak"
 let y="********@gmail.com"
 let k1=x1.concat("",y)
 console.log(k1)

 let t="rak"
 let n="******ar@gmail.com"
 let s=t.concat("",n)
 console.log(s)

 let o="rakeshkumar@gmail.com"
 let v=o.slice(-20)
 console.log()

 let arr=[1,2,3,4]
 console.log(arr)
let arr1=[1,2,3,4,6]
arr1.push(9)
console.log(arr1)


let arr2=[1,2,3,4,6]
arr2.pop()
console.log(arr2)

let arr3=["dad,nani,amma,brother"]
 arr3.unshift("akka")
 console.log(arr3)

 let arr4=["dad,nani,amma,brother"]
 arr4.shift()
 console.log(arr4)

//uasge of split method

const para="This is NANI ,from AP"
const spliptdata=para.split(",")
console.log(spliptdata)

const para1="This is NANI ,from AP"
const splitdata1=para.split(" ")
console.log(splitdata1)


let email="kethinenithirupathirao@gmail.com"
//output="ket*******************@gmail.com"

let splitdata=email.split("@")
console.log("splitdata=",splitdata)

let idpart=splitdata[0]
let domain=splitdata[1]
let firstpart=idpart.slice(0,3)
//console.log(firstpart)
//const firstfinaloutput=firstpart.padEnd(19,"*")
//console.log(firstfinaloutput)

//let finaloutput=firstfinaloutput+"@"+domain
//console.log(firstfinaloutput+"@"+domain)
console.log(firstpart.padEnd(idpart.length,"*")+"@"+domain)


let emailid="kethinenithirupathirao@gmail.com"
 console.log(emailid.split("@"))
let id=splitdata[0]
let name=splitdata[1]
let data=id.slice(0,9)
let data2=data.padEnd(22,"*")
console.log(data2)
//console.log(data2+"@"+name)
console.log(data.padEnd(id.length,"*")+"@"+splitdata[1])

//usgae of join array method

let joins=["nani","amma","dadi"]   
console.log(joins.join(" "))


// let str1=["join","conact","splitdata"]
// let str2=["slice","string"]
// console.log(str1.concat(str2))
// console.log(`${str1} ${str2}`)
// console.log(str1+""+str2)


const newarray=[[1,2],[3,9],[8,5],"nani","rami",[7,8,9]]
console.log(newarray[5][2])


//usage of flat
//turn sub-array elements into single array
const ray=[[1,2],[3,9],[8,5],"nani","rami",[7,8,9]]
console.log("falt",ray.flat())

//but not inside array
const ray1=[[1,2],[3,9],[8,5],"nani","rami",[7,8,9,[1,2,3]]]
console.log("falt",ray1.flat())
//but that also convert using another falt()

console.log(ray1.flat().flat())


//array slice
let nick=["banana","apple","node","link"]
console.log("slice=",nick.slice(-3,-1))
console.log("slice=",nick.slice(1))
console.log("slice=",nick.slice(1,3))

//push=
let code1=["java","html","python","c++"]   // while push then pushed and it return length// output=6
console.log(code1.push("css","c"))

//pop
console.log(code1.pop())                       //while pop then it returned the pop element


//usage of splice method
//no return type
const code=["java","html","python","c++"]
console.log(code.splice(2, 2,"css","c"))   //using splice we can add and remove element at specified position at a time
console.log(code)
console.log(code.splice(2, 1))


