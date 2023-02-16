let btn = document.getElementById("btn");
let textArea = document.getElementById("text-area");
btn.onclick = function () {
  let syntax = textArea.value;
  let space = 0;
  for (let i = 0; i < syntax.length; i++) {
    if (syntax[i] == " ") {
      space++;
    }
  }
  if (space != syntax.length) {
    document.querySelector(".message-area").innerHTML += `
        <div class="message-ls">${textArea.value}</div>
         `;
    textArea.value = "";
  }
};
