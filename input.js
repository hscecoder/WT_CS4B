const r1=require("readline")
const prompt=r1.createInterface({
    input:process.stdin,
    output:process.stdout
})
prompt.question("Enter Your Name",(name)=>{
    console.log("Your Name is "+name)
    prompt.close()
})

