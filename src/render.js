const titleElement = document.getElementById("title");

titleElement.innerText = api.title;

const noteElement = document.getElementById("note");
const noteContent = document.getElementById("content");
const btn = document.getElementById("submit");

btn.addEventListener("click", async () => {
  const title = noteElement.value;
  const content = noteContent.value;
  const res = await api.createNotes({
    title,
    content,
  });

  noteContent.value = "";
  noteElement.value = "";
});
