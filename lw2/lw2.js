var authUserData = null;
var userDatabase = [];

function emailCorrect(email) {
  if (email.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i) != null) {
    return true;
  }
  return false;
}

function passwordCorrect(password) {
  if (password.length === 6 && password[0] === password[0].toUpperCase() && /[0-9]/g.test(password) === true) {
    return true;
  }
  return false;
}


function resetPassword(email, oldPassword, newPassword) {
  for (let i = 0; i < userDatabase.length; i++) {
    if (userDatabase[i].email === email && oldPassword != newPassword && passwordCorrect(newPassword) === true) {
      userDatabase[i].password = newPassword;
    }
  }
  return false;
}

function register(email, password) {
  let check = null;
  if (emailCorrect(email) === true && passwordCorrect(password) === true) {
    check = userDatabase.findIndex((user) => user.email === email && user.password === password);
    if (check === -1) {
      userDatabase.push({ email: email, password: password });
      return true;
    }
  }
  return false;
}

function signIn(email, password) {
  let check = null;
  if (emailCorrect(email) === true && passwordCorrect(password) === true) {
    check = userDatabase.findIndex((user) => user.email === email && user.password === password);
    if (check === 1) {
      authUserData = true;
      return true;
    }
  }
  return false;
}

function signOut() {
  authUserData = null;
}


function isAuth() {
  if (authUserData === true) {
    return true;
  }
  return false;
}

function validator(value) {
  return result = {
    object: value,
    isValid: true,
    validate: function() {
      return this.isValid;
    },

    max(number) {
      if (this.isValid && this.object <= number) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return false;
    },

    min(number) {
      if (this.isValid && this.object > number) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return false;
    },

    maxLenght(array) {
      if (this.isValid && this.object.lenght <= array.lenght) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return false;
    },

    minLenght(array) {
      if (this.isValid && this.object.lenght > array.lenght) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return false;
    },

    isEmail() {
      if (this.isValid && this.object.match(/^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i) != null) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return this;
    },

    isString() {
      if (this.isValid && this.object instanceof String) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return false;
    },

    equal(check) {
      if (this.isValid && check.toString() === this.object.toString()) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return this;
    },

    isArray() {
      if (this.isValid && this.object instanceof Array) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return this;
    },

    isNumber() {
      if (this.isValid && this.object instanceof Number) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return this;
    },

    isFloat() {
      if (this.isValid && !isNaN(this.object) && this.object.toString().indexOf('.') != -1) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return this;
    },

    isDate() {
      if (this.isValid === true && this.object.match(/^\d{1,2}\.\d{1,2}\.\d{4}$/) != null) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return this;
    },

    isRussianPhone() {
      if (this.isValid && this.object.match(/^[+]*[(]{0,1}[7-8]{1,3}[)]{0,1}[-\s\./0-9]*$/g) !== null) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return this;
    },

    isFullName() {
      if (this.isValid === true && this.object.match(/^[А-ЯЁ][а-яё]*(\s[А-ЯЁ][а-яё]*){2}$/)) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return this;
    }
  }
}

console.log(validator("Иванов Иван").isFullName().validate());
