const btn_addNotes = document.querySelector("#btn-new-note");
const notesContainer = document.querySelector(".notes-container");
const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", filterNotes);

function filterNotes() {
    const inputValue = searchInput.value.toLowerCase().trim();
    if(inputValue.length == 0) {
        for(const note of notesContainer.children) {
            note.style.display = "inline-block"; } }
            
    for(const note of notesContainer.children) {
        const noteText = note.querySelector("textarea").value.toLowerCase();
        if(inputValue != noteText.slice(0,inputValue.length)) {
            note.style.display = "none"; }
        else {
            note.style.display = "inline-block"; } }
}

btn_addNotes.addEventListener('click', createNotes);

function createNotes() {
    const note = document.createElement("div");
    note.classList.add("note-content");

    const textarea = document.createElement("textarea");
    textarea.placeholder="Digite sua tarefa";
    textarea.focus();
 
    const pinIcon = document.createElement("i");
    pinIcon.classList.add("bi");
    pinIcon.classList.add("bi-pin");
    pinIcon.addEventListener("click", ()=>{
        note.classList.toggle("fixed");
    });

    const xIcon = document.createElement("i");
    xIcon.classList.add("bi");
    xIcon.classList.add("bi-x-lg");
    xIcon.addEventListener("click", ()=>{note.remove()})

    const fileIcon = document.createElement("i");
    fileIcon.classList.add("bi");
    fileIcon.classList.add("bi-file-earmark-plus");

    const checkIcon = document.createElement("i")
    checkIcon.classList.add("bi");
    checkIcon.classList.add("bi-check2-square")
    checkIcon.addEventListener("click", () => {})

    note.appendChild(textarea);
    note.appendChild(pinIcon);
    note.appendChild(xIcon);
    note.appendChild(fileIcon);
    note.appendChild(checkIcon);
    notesContainer.appendChild(note);

}

