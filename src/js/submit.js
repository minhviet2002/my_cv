const btnSubmit = document.querySelector(".btn-submit");
const inputList = document.querySelectorAll(".input-contact.required");
const form = document.querySelector(".form-contact");
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputPhone = document.querySelector("#input-phone");
const inputSubject = document.querySelector("#input-subject");
const inputMessage = document.querySelector("#input-message");

function sendEmail() {
  const bodyMessage = `Full Name: ${inputName.value} <br>
                      Email: ${inputEmail.value} <br>
                      Phone: ${inputPhone.value} <br>
                      Subject: ${inputSubject.value} <br>
                      Message: ${inputMessage.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "vietminh794@gmail.com",
    Password: "F3C690182B2C86CCAF95CB1E73433964C8D7",
    To: "vietminh794@gmail.com",
    From: "vietminh794@gmail.com",
    Subject: `LE MINH VIET CV - ${inputSubject.value}`,
    Body: bodyMessage,
  }).then((message) => {
    Snackbar.show({
      text: "Submitted successfully.",
      actionText: " Thank you <3!",
      pos: "top-right",
      actionTextColor: "#ff0000",
    });
  });
}
const textAlert = document.querySelectorAll(
  ".input-contact.required + .text-alert"
);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

btnSubmit.onclick = function (e) {
  e.preventDefault();

  let allFieldsFilled = true;
  inputList.forEach((item, index) => {
    // Kiểm tra nếu trường có type là "email" và giá trị không đúng định dạng email
    if (item.type === "email" && !emailRegex.test(item.value)) {
      textAlert[index].classList.add("color-error");
      allFieldsFilled = false;
      textAlert[index].innerHTML = "Email must be in correct format";
    } else if (item.value === "") {
      textAlert[index].classList.add("color-error");
      allFieldsFilled = false;
    } else {
      textAlert[index].classList.remove("color-error");
    }
  });

  if (allFieldsFilled) {
    sendEmail();
    form.reset();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Submitted successfully.",
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
