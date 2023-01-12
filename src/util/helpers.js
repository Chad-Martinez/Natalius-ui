export const validateEmailHelper = (email) => {
  let isValidEmail = false;
  if (
    email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    isValidEmail = true;
  }
  return isValidEmail;
};

export const validatePasswordHelper = (password) => {
  let isValidPassword = false;
  if (
    password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    )
  ) {
    isValidPassword = true;
  }
  return isValidPassword;
};
