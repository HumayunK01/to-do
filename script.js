let input = document.querySelector("#userInput");
let btn = document.querySelector("#btn");
let tasks = document.querySelector(".tasks");

btn.addEventListener("click", () => {
  let para = document.createElement("p");
  let line = document.createElement("hr");
  para.classList.add("para");

  para.innerText = input.value;

  tasks.append(para);
  para.append(line);
  input.value = "";

  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    para.style.textDecorationColor = "#f44336";
  });

  para.addEventListener("dblclick", () => {
    para.remove();
  });
});
