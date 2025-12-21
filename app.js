// import readline from "readline";
// const rl = readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// const todos = [];

// const showMenu =  () =>{
//     console.log("\n1: Add a task");
//     console.log("2: view task");
//     console.log("3: Exit");
//     rl.question("Chose an opaction" ,heandelInput)
// }

// const heandelInput = (option) =>{
//     if(option === "1"){
//         rl.question("Enter the task:", (task) =>{
//             todos.push(task);
//             console.log("Task added:",task);
//             showMenu()
//         })
//     }   else if(option === "2"){
//         console.log("\n Your todo list");
//         todos.forEach((task, index) => {
//             console.log(`${index+1}. ${task}`);

//         })
//         showMenu()
//     } else if(option === "3"){
//         console.log("Good byee");
//         rl.close();
//         return;
//     }else{
//         console.log("Invalid Optaion. Please try ageen ");
//         showMenu();
//     }
// }  
// // showMenu();




import readline from "readline";  // inbuilt nodd modules in node js and jd hfif di

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todos = [];

const showMenu = () => {
  console.log("\n1. Add a task");
  console.log("2. View task");
  console.log("3. Exit");
};

const handleInput = (option) => {

  if (option === "1") {
    rl.question("Enter the task: ", (task) => {
      todos.push(task);
      console.log("Task added:", task);
      showMenu();
      rl.question("Choose an option: ", handleInput);
    });
  }

  else if (option === "2") {
    console.log("\nYour todo list:");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
    showMenu();
    rl.question("Choose an option: ", handleInput);
  }

  else if (option === "3") {
    console.log("Good Bye 👋");
    rl.close();
  }

  else {
    console.log("Invalid option, please try again");
    showMenu();
    rl.question("Choose an option: ", handleInput);
  }
};

showMenu();
rl.question("Choose an option: ", handleInput);