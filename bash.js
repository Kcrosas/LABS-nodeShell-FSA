//When called on later call, passes a string that pushes out to the terminal
const prompt = (data) => {
  process.stdout.write(data);
};

const main = (data) => {
  //takes the input and turns it into a string without extra space/line
  const entry = data.toString().trim();
  //Shorthand taken apart so I can have an easier time working with the user's input
  const entrySplit = entry.split(" ");
  const command = entrySplit[0];
  const arg = entrySplit.slice(1);
  console.log(
    `Here is your command: ${command}\nHere were are your aguments:\n${arg}\n[][][][][][][][][][][][][][][][][]`
  );
  //switch command to handle user input
  switch (command) {
    case "pwd":
      //if pwd is entered, require(pull) module pwd.js
      require("./pwd")(prompt);
      break;
    case "ls":
      require("./ls")(prompt);
      break;
    case "cat":
      for (let i = 0; i < arg.length; i++) {
        let argSplit = arg[i];
        require("./cat")(argSplit, prompt);
      }
      break;
    case "curl":
      require("./curl")(arg, prompt);
      break;
    default:
      //if nothing matches any of the previous cases, it defaults to command not found
      prompt("Command not found.\nEnter another command: ");
  }
};

//This invokes the function prompt to introduce the shell to users
prompt("Welcome to the Node Shell\nEnter your command: ");
//It then waits for the users input which then calls on main to further process the data
process.stdin.on("data", main);
