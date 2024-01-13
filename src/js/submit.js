const btnSubmit = document.querySelector(".btn-submit");
const inputList = document.querySelectorAll(".input-contact.required");
const form = document.querySelector(".form-contact");

const textAlert = document.querySelectorAll(
  ".input-contact.required + .text-alert"
);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btnSubmit.onclick = function (e) {
  e.preventDefault();
  e.preventDefault();

  let allFieldsFilled = true;

  inputList.forEach((item, index) => {
    // Kiểm tra nếu trường có type là "email" và giá trị không đúng định dạng email
    if (item.type === "email" && !emailRegex.test(item.value)) {
      textAlert[index].classList.add("color-error");
      allFieldsFilled = false;
      textAlert[index].innerHTML = 'Email must be in correct format'
    } else if (item.value === "") {
      textAlert[index].classList.add("color-error");
      allFieldsFilled = false;
    } else {
      textAlert[index].classList.remove("color-error");
    }
  });

  if (allFieldsFilled) {
    form.submit();
  }
};
