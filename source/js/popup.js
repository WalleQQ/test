const popup = document.querySelector(".modal");
const popupSuccessfully = document.querySelector(".modal-successfully");
const modalButton = document.querySelector(".modal__button");
const pageBody = document.querySelector(".page-body");
const openPopupButton = document.querySelector(".button-open");
const closePopupButton = popup.querySelector(".modal__button-close");
const form = document.querySelector(".modal__login-form");

openPopupButton.addEventListener("click", function () {
  popup.classList.add("modal--show");
  pageBody.classList.add("page-body__no-scroll");
});

closePopupButton.addEventListener("click", function () {
  popup.classList.remove("modal--show");
  pageBody.classList.remove("page-body__no-scroll");
});

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    popup.classList.remove("modal--show");
    pageBody.classList.remove("page-body__no-scroll");
  }
});

const loadData = async () => {
  let result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  let isAsyncFunction;
  if ((isAsyncFunction = (value) => value instanceof loadData)) {
    popupSuccessfully.classList.add("modal-successfully__show");
    popup.classList.remove("modal--show");
    pageBody.classList.remove("page-body__no-scroll");
  }
};

pageBody.addEventListener("click", function () {
  popupSuccessfully.classList.remove("modal-successfully__show");
});

modalButton.addEventListener("click", loadData);
