const popup = document.querySelector(".modal");
const popupSuccessfully = document.querySelector(".modal-successfully");
const modalButton = document.querySelector(".modal__button");
const pageBody = document.querySelector(".page-body");
const openPopupButton = document.querySelector(".button-open");
const closePopupButton = popup.querySelector(".modal__button-close");
const modalSending = document.querySelector(".modal");

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

// const loadData = async (event) => {
//   event.preventDefault();
//   let result = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let isAsyncFunction;
//   if ((isAsyncFunction = (value) => value instanceof loadData)) {
//     console.log(result);
//     popupSuccessfully.classList.add("modal-successfully__show");
//     popup.classList.remove("modal--show");
//     pageBody.classList.remove("page-body__no-scroll");
//   }
// };

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formsend);

  async function formsend(e) {
    e.preventDefault();

    let error = formValidate(form);

    if (error === 0) {
      modalSending.classList.add("_sending");
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      console.log(response);
      if (response.ok) {
        popupSuccessfully.classList.add("modal-successfully__show");
        popup.classList.remove("modal--show");
        pageBody.classList.remove("page-body__no-scroll");
        form.reset();
        modalSending.classList.remove("_sending");
      } else {
        alert("Error");
      }
    } else {
      alert("Заполните обязательные поля");
      modalSending.classList.remove("_sending");
    }

    function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll("._req");

      for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains("_email")) {
          if (emailTest(input)) {
            formAddError(input);
            error++;
          }
        } else {
          if (input.value === "") {
            formAddError(input);
            error++;
          }
        }
      }
      console.log(error);
      return error;
    }

    function formAddError(input) {
      input.parentElement.classList.add("_error");
      input.classList.add("_error");
    }

    function formRemoveError(input) {
      input.parentElement.classList.remove("_error");
      input.classList.remove("_error");
    }

    function emailTest(input) {
      let re =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return re.test(String(email).toLowerCase());
    }
  }
});

pageBody.addEventListener("click", function () {
  popupSuccessfully.classList.remove("modal-successfully__show");
});
// modalButton.addEventListener("click", loadData);
