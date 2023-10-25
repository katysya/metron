// pagination

const items = document.querySelectorAll(".equipment__list-item");
const paginationList = document.querySelector(".equipment__pagination-list");
const maxItemsOnPage = 4;
const paginationPages = Math.ceil(items.length / maxItemsOnPage);
const paginationItems = () =>
  document.querySelectorAll(".equipment__pagination-item");
const btnNextPage = document.querySelector(
  ".equipment__pagination-button.next"
);
const btnPrevPage = document.querySelector(
  ".equipment__pagination-button.prev"
);
let currentPage = 1;

btnPrevPage.addEventListener("click", () => pagination("prev"));
btnNextPage.addEventListener("click", () => pagination("next"));

function defaultState() {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (!(currentPage - 1) && i < maxItemsOnPage) {
      item.classList.add("active");
      continue;
    }

    item.classList.remove("active");
  }
}

function changeCurrentPage(type) {
  if (currentPage - 1 && type === "prev") {
    --currentPage;
  }

  if (!(currentPage === paginationPages) && type === "next") {
    ++currentPage;
  }

  paginationItems().forEach((item) =>
    item.textContent == currentPage
      ? item.classList.add("active")
      : item.classList.remove("active")
  );
}

function setDisableButton() {
  btnPrevPage.classList.remove("disabled");
  btnNextPage.classList.remove("disabled");

  if (!(currentPage - 1)) {
    return btnPrevPage.classList.add("disabled");
  }

  if (currentPage === paginationPages) {
    return btnNextPage.classList.add("disabled");
  }
}

function pagination(type) {
  changeCurrentPage(type);
  setDisableButton();

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (!(currentPage - 1) && i < maxItemsOnPage) {
      item.classList.add("active");
      continue;
    }

    if (
      (currentPage - 1) * maxItemsOnPage + 1 - 1 <= i &&
      (currentPage - 1) * maxItemsOnPage * 2 - 1 >= i
    ) {
      item.classList.add("active");
      continue;
    }

    item.classList.remove("active");
  }
}

const paginationItem = (idx) =>
  `<li class="equipment__pagination-item ${
    !idx ? "active" : ""
  }">${++idx}</li>`;

const setPaginationPages = () => {
  Array(paginationPages)
    .fill()
    .forEach((_, idx) => (paginationList.innerHTML += paginationItem(idx)));
};

setPaginationPages();
defaultState();
