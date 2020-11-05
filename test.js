isFullName() {
      if (this.isValid === true && this.object.match(/^[А-ЯЁ][а-яё]*(\s[А-ЯЁ][а-яё]*){2}$/)) {
        this.isValid = true;
        return this;
      }
      this.isValid = false;
      return this;
