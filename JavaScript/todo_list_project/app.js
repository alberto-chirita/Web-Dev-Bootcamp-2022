const todoList = ["Buy New Turtle", "Collet Eggs"];

let input = prompt("What would you like to do?");

while (input.toLowerCase() !== "quit" && input.toLowerCase() !== "q") {
  switch (input.toLowerCase()) {
    case "new":
      input = prompt("Enter new todo:");
      todoList.push(input);
      console.log(`${input} added to the list.`);
      break;
    case "list":
      console.log("**********");
      for (let todoItem in todoList) {
        console.log(`${todoItem}: ${todoList[todoItem]}`);
      }
      console.log("**********");
      break;
    case "delete":
      input = prompt("Enter the index of the todo you want to delete:");
      if (!parseInt(input) || parseInt(input) >= todoList.length) {
        console.log("Invalid index.");
      } else {
        todoList.splice(input, 1);
        console.log("Todo Removed");
      }
      break;
    default:
      break;
  }
  input = prompt("What would you like to do?");
}

console.log("OK, YOU QUIT THE APP");
