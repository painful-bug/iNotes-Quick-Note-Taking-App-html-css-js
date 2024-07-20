const toggleSearch = () => {
  const searchForm = document.querySelector(".search-form");
  const searchButton = document.querySelector(".search-button");
  const searchInput = document.querySelector(".search-input");

  searchButton.addEventListener("click", () => {
    searchForm.classList.toggle("active-search");
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchInput.value = "";
      searchForm.classList.remove("active-search");
    }
  });
};

function toggleBlur() {
  const main = document.querySelector(".bg-wrap");
  main.classList.toggle("active-blur");
  const modal = document.querySelector(".modal");
  modal.classList.toggle("active-modal");
}

function addNote(){
  toggleBlur();
  const note = document.querySelector(".note-modal");
  const noteInput = document.querySelector(".note-input");
  const noteText = noteInput.value;
  note.innerHTML = noteText;
  noteInput.value = "";
}

toggleSearch();

toggleBlur();
