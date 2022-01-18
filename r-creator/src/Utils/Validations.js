const signup_form_validation = {
  name_Required: "Name is required",
  Maxlentgth: "Maxlength exceeded",
  email_Required: "Email is required",
  email_Invalid: "Email is not valid",
  password_Required: "Password is required",
  cpassword_Required: "Confirm Password is required",
  password_match: "Password did not match",
  password_Minlength: "Password has at least 8 characters",
};

const bookorder_validation = {
  frontImage_require: "Front image is require.",
  backImage_require: "Back image is require.",
};

const Regex = {
  validEmailRegex: RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  ),
};

export const signup_validation = (name, value, password) => {
  let error = {};
  switch (name) {
    case "name":
      if (!value || value === "") {
        error.name = signup_form_validation.name_Required;
      } else if (value.length > 50) {
        error.name = signup_form_validation.Maxlentgth;
      }
      break;
    case "email":
      if (!value || value === "") {
        error.email = signup_form_validation.email_Required;
      } else if (!Regex.validEmailRegex.test(value)) {
        error.email = signup_form_validation.email_Invalid;
      }
      break;
    case "password":
      if (!value || value === "") {
        error.password = signup_form_validation.password_Required;
      } else if (value.length < 8) {
        error.password = signup_form_validation.password_Minlength;
      }
      break;
    case "cpassword":
      if (!value || value === "") {
        error.cpassword = signup_form_validation.cpassword_Required;
      } else if (value != password) {
        error.cpassword = signup_form_validation.password_match;
      }
      break;
    default:
      break;
  }

  return error;
};

export function validationsubmit(userdata) {
  let error = {};
  if (!userdata.name || userdata.name === "") {
    error.name = signup_form_validation.name_Required;
  } else if (userdata.name.length > 30) {
    error.name = signup_form_validation.Maxlentgth;
  }

  if (!userdata.email || userdata.email === "") {
    error.email = signup_form_validation.email_Required;
  } else if (!Regex.validEmailRegex.test(userdata.email)) {
    error.email = signup_form_validation.email_Invalid;
  }

  if (!userdata.password || userdata.password === "") {
    error.password = signup_form_validation.password_Required;
  } else if (userdata.password.length < 8) {
    error.password = signup_form_validation.password_Minlength;
  }

  if (!userdata.cpassword || userdata.cpassword === "") {
    error.cpassword = signup_form_validation.cpassword_Required;
  } else if (userdata.password != userdata.cpassword) {
    error.cpassword = signup_form_validation.password_match;
  }
  return error;
}

export const login_validate = (name, value) => {
  let error = {};
  switch (name) {
    case "email":
      if (!value || value === "") {
        error.email = signup_form_validation.email_Required;
      }
      break;
    case "password":
      if (!value || value === "") {
        error.password = signup_form_validation.password_Required;
      }
      break;

    default:
      break;
  }

  return error;
};

export function login_validate_onsubmit(userdata) {
  let error = {};
  if (!userdata.email || userdata.email === "") {
    error.email = signup_form_validation.email_Required;
  }
  if (!userdata.password || userdata.password === "") {
    error.password = signup_form_validation.password_Required;
  }
  return error;
}

export function bookorder_onsubmit(data) {
  let error = {};
  if (!data.frontImage || data.frontImage === "") {
    error.frontImage = bookorder_validation.frontImage_require;
  }
  if (!data.backImage || data.backImage === "") {
    error.backImage = bookorder_validation.backImage_require;
  }
  return error;
}
