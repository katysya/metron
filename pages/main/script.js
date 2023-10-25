// Slider Project (Swiper)

const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Slider Catalog

const btnPrevCatalog = document.querySelector(".catalog__button.prev");
const btnNextCatalog = document.querySelector(".catalog__button.next");
const catalogItems = document.querySelectorAll(".catalog__list-item");
const currentStepDOM = document.querySelector(".catalog__currentStep");
const totalStepDOM = document.querySelector(".catalog__totalStep");
let stepCatalog = 314;
let positionCatalog = 0;

btnPrevCatalog.addEventListener("click", btnCatalogPrev);
btnNextCatalog.addEventListener("click", btnCatalogNext);

const isDisabledBtnPrev = () => !positionCatalog;
const isDisabledBtnNext = () =>
  !(Math.abs(positionCatalog) !== stepCatalog * (catalogItems.length - 1));

const setStylesForCatalogItem = () =>
  catalogItems.forEach(
    (item) => (item.style = `transform: translateX(${positionCatalog}px)`)
  );

const setDefaultProperties = () => {
  btnPrevCatalog.classList.add("disabled");
  currentStepDOM.innerHTML = 1;
  totalStepDOM.innerHTML = catalogItems.length;
};

const calcStep = () => {
  const step = positionCatalog
    ? Math.abs(positionCatalog) / stepCatalog + 1
    : 1;
  currentStepDOM.innerHTML = step;
};

setDefaultProperties();

function btnCatalogPrev() {
  if (!isDisabledBtnPrev()) {
    btnPrevCatalog.classList.remove("disabled");
    btnNextCatalog.classList.remove("disabled");

    positionCatalog += stepCatalog;
    calcStep();
    setStylesForCatalogItem();
  }

  if (isDisabledBtnPrev()) {
    btnPrevCatalog.classList.add("disabled");
  }
}

function btnCatalogNext() {
  if (!isDisabledBtnNext()) {
    btnNextCatalog.classList.remove("disabled");
    btnPrevCatalog.classList.remove("disabled");

    positionCatalog -= stepCatalog;
    calcStep();
    setStylesForCatalogItem();
  }

  if (isDisabledBtnNext()) {
    btnNextCatalog.classList.add("disabled");
  }
}

// Slider Project

// const btnPrevProject = document.querySelector(".project__button.prev");
// const btnNextProject = document.querySelector(".project__button.next");
// const projectItems = document.querySelectorAll(".project__list-item");
// const projectParent = document.querySelector(".project__list");
// const projectPaginationParent = document.querySelector(".project__pagination");
// const showItems = 1;
// const width =
//   showItems === 1
//     ? getWidthParent()
//     : getWidthParent() / showItems -
//       (28 * (showItems - 1)) / showItems -
//       ((getWidthParent() / showItems - (28 * (showItems - 1)) / showItems) *
//         0.2) /
//         showItems;
// const stepProject = showItems === 1 ? width : width + 28;
// let positionProject = 0;
// let activeSlide = 1;

// function setPagination() {
//   projectItems.forEach(() => {
//     projectPaginationParent.innerHTML += `<li class="project__pagination-item"></li>
// `;
//   });
// }

// function getWidthParent() {
//   return +window.getComputedStyle(projectParent).width.slice(0, -2);
// }

// const setWidth = () => {
//   projectItems.forEach((item, idx) => {
//     item.style = `min-width: ${width}px`;

//     if (idx === activeSlide) {
//       item.style = `min-width: ${width * 1.2}px;`;
//       item.querySelector(".project__list-text").style = `opacity: 1`;

//       if (showItems === 1) {
//         item.style = `min-width: ${width}px;`;
//       }
//     }
//   });
// };

// setWidth();
// setPagination();

// btnNextProject.addEventListener("click", setNextProject);
// btnPrevProject.addEventListener("click", setPrevProject);

// const setPosition = () => {
//   projectItems.forEach((item, idx) => {
//     if (!activeSlide) {
//       if (idx === activeSlide) {
//         item.style = `min-width: ${width * 1.2}px;`;
//         item.querySelector(".project__list-text").style = `opacity: 1`;

//         if (showItems === 1) {
//           item.style = `min-width: ${width}px;`;
//         }
//       } else {
//         item.style = `min-width: ${width}px`;
//         item.querySelector(".project__list-text").style = `opacity: 0`;

//         if (showItems === 1) {
//           item.style = `min-width: ${width}px;`;
//         }
//       }
//       return;
//     }

//     if (activeSlide === projectItems.length - 1) {
//       if (idx === activeSlide) {
//         item.style = `transform: translateX(${
//           positionProject + stepProject
//         }px); min-width: ${width * 1.2}px;`;
//         item.querySelector(".project__list-text").style = `opacity: 1`;

//         if (showItems === 2) {
//           item.style = `transform: translateX(${positionProject}px); min-width: ${
//             width * 1.2
//           }px;`;
//         }

//         if (showItems === 1) {
//           item.style = `transform: translateX(${positionProject}px); min-width: ${width}px;`;
//         }
//       } else {
//         item.style = `transform: translateX(${
//           positionProject + stepProject
//         }px); min-width: ${width}px`;
//         item.querySelector(".project__list-text").style = `opacity: 0`;

//         if (showItems === 2) {
//           item.style = `transform: translateX(${positionProject}px); min-width: ${width}px;`;
//         }

//         if (showItems === 1) {
//           item.style = `transform: translateX(${positionProject}px); min-width: ${width}px;`;
//         }
//       }

//       return;
//     }

//     item.style = `transform: translateX(${positionProject}px); min-width: ${width}px`;
//     item.querySelector(".project__list-text").style = `opacity: 0`;

//     if (idx === activeSlide) {
//       item.style = `transform: translateX(${positionProject}px); min-width: ${
//         width * 1.2
//       }px;`;
//       item.querySelector(".project__list-text").style = `opacity: 1`;

//       if (showItems === 1) {
//         item.style = `transform: translateX(${positionProject}px); min-width: ${width}px;`;
//       }
//     }
//   });
// };

// function setNextProject() {
//   if (!(activeSlide === projectItems.length - 1)) {
//     positionProject -= stepProject;
//     activeSlide += 1;
//     setPosition();
//   }
// }

// function setPrevProject() {
//   if (activeSlide) {
//     positionProject += stepProject;
//     activeSlide -= 1;
//     setPosition();
//   }
// }

// Modal

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");
const btnSend = document.querySelector(".modal__form-button");
const formFields = document.querySelectorAll(".modal__form-input");
const btnShowModal = document.querySelector(".banner__left-button");
const errors = document.querySelectorAll(".modal__form-error");

btnShowModal.addEventListener("click", showModal);
overlay.addEventListener("click", closeModal);

function showModal() {
  modal.classList.add("active");
  overlay.classList.add("active");
  body.style = "overflow-y: hidden";
}

function closeModal() {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  body.style = "overflow-y: auto";
}

const typesFields = {
  NAME: "name",
  PHONE: "phone",
};

const form = {
  fields: [
    {
      value: "",
      isValid: false,
      type: "name",
      id: 0,
    },
    {
      value: "",
      isValid: false,
      type: "phone",
      id: 1,
    },
  ],
  isAgree: true,
};

formFields.forEach((field) => {
  const type = field.getAttribute("name");
  // new MaskInput(`.${field.classList.value}${type}`, { mask: "#-#" });

  field.addEventListener("input", (event) => validation(type, event));
});

function validation(type, event) {
  const field = form.fields.find((field) => field.type === type);
  field.value = event.target.value;

  setStatusForField(type, field);
  changeErrorStatusForField(field);
}

const setStatusForField = (type, field) => {
  switch (type) {
    case typesFields.NAME:
      if (field.value.length >= 1) {
        return (field.isValid = true);
      }

      return (field.isValid = false);
    case typesFields.PHONE:
      if (field.value.length >= 1) {
        return (field.isValid = true);
      }

      return (field.isValid = false);
  }
};

const changeErrorStatusForField = (field) => {
  if (!field.isValid) {
    const fieldDOM = document.querySelector(`#modal__form-${field.id}`);

    errors[field.id].classList.add("active");
    fieldDOM.classList.add("error");
    return;
  }

  if (field.isValid) {
    const fieldDOM = document.querySelector(`#modal__form-${field.id}`);

    errors[field.id].classList.remove("active");
    fieldDOM.classList.remove("error");
    return;
  }
};

btnSend.addEventListener("click", sendForm);

function sendForm(event) {
  event.preventDefault();

  if (isValidForm()) {
    resetForm();
    return console.log("form sended");
  }

  setErrors();
}

function isValidForm() {
  let result = true;

  for (let i = 0; i < form.fields.length; i++) {
    const field = form.fields[i];

    if (!field.isValid) {
      result = false;
      break;
    }
  }

  if (!form.isAgree) {
    result = false;
  }

  return result;
}

function setErrors() {
  for (let i = 0; i < form.fields.length; i++) {
    const field = form.fields[i];

    if (!field.isValid) {
      formFields.forEach((fieldDOM, idx) => {
        if (fieldDOM.getAttribute("name") === field.type) {
          fieldDOM.classList.add("error");
          errors[idx].classList.add("active");
        }
      });
      continue;
    }

    formFields.forEach((fieldDOM, idx) => {
      if (fieldDOM.getAttribute("name") === field.type) {
        fieldDOM.classList.remove("error");
        errors[idx].classList.remove("active");
      }
    });
  }
}

const resetForm = () => {
  formFields.forEach((field) => (field.value = ""));
  form.fields.forEach((field) => (field.isValid = false));
};
