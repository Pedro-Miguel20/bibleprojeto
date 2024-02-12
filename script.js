var book;
var chapter;
var number = 1;
async function search(book, chapter) {
  book = document.getElementById('livro').value;
  chapter = document.getElementById('chapter').value;
  const response = await fetch(`https://www.abibliadigital.com.br/api/verses/nvi/${book}/${chapter}
`);
  const texto = await response.json();
console.log(texto);
 document.getElementById('chapter').innerHTML = texto.reference;
  var fordown = texto.reference;
  var s = texto.chapter.verses;
  
    for(var i = 0; s>=i; i){
      var para = document.createElement("p");     document.querySelector("#leitura").appendChild(para);
      para.textContent = texto.verses[i]["number"]+". ";
  
   var para2 = document.createElement("span");
document.querySelector("#leitura").appendChild(para2);      para2.textContent = texto.verses[i]["text"];
    i++;
    var para3 = document.createElement("br");
document.querySelector("#leitura").appendChild(para3);} 
}

var response2;
var livro;
var response3;
var chapter;
async function getChapter(toFind, response3, chapter, para4, d){
  response3 = await fetch(`https://www.abibliadigital.com.br/api/books/${toFind}`);
  chapter = await response3.json();
  console.log(chapter);
  
  var numberOf = chapter.chapters;
  console.log(numberOf);
  for(var h = 1; numberOf>=h; h++){
    var para5 = document.createElement("button");
document.querySelector("#chapteres").appendChild(para5);
    para5.setAttribute('value', h);
    para5.setAttribute('id', "chapter");
    para5.textContent = h;
  document.querySelectorAll("#chapter")[h].addEventListener("click", function(){
    para5 = event.target.value;
    document.getElementById("chapter").value = para5;
    const myNode = document.getElementById("chapteres");
  myNode.innerHTML = '';
    search();
  });
}}

var toFind

async function myFunction(response2, livros, toFind){
  response2 = await fetch(`https://www.abibliadigital.com.br/api/books
`);
  livros = await response2.json();
  console.log(livros);


for(var d = 0; 66>=d; d++){
    var para4 = document.createElement("button");
document.querySelector("#leitura").appendChild(para4);
  para4.textContent = livros[d].name;
  para4.setAttribute('value', livros[d].abbrev["pt"]);
  para4.setAttribute('id', "book");
  document.querySelectorAll("button")[d].addEventListener("click", function(){
    para4 = event.target.value;
    document.getElementById("livro").value = para4;
    var toFind = para4;
    console.log(toFind);
    getChapter(toFind);
  });
  
  }
}
myFunction();
