const passwordValidator = (password) => {
  let strength = 0;
  let veryWeak = 0,
    weak = 1,
    strong = 2,
    veryStrong = 3;

  if (password.match(/^[A-Za-z]+$/) !== null) strength = veryWeak; //check if the password contains only string
  if (password.match(/^[0-9]+$/) !== null) strength = weak; //check if the password contains string and number
  if (password.match(/\d+/g) !== null && password.match(/[a-zA-Z]/) !== null)
    strength = strong; //check if the password contains string and number
  if (
    password.match(/\d+/g) !== null &&
    password.match(/[a-zA-Z]/) !== null &&
    password.match(/^(?!-)(?!.*-)[A-Za-z0-9-]+(?<!-)$/) === null
  )
    //check if the password contains string, number and special character
    strength = veryStrong;
  return strength;
};
