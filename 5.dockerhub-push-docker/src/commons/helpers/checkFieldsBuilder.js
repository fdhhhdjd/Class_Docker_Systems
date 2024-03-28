//* LIB
const validator = require("validator");

//* IMPORT
const {
  BadRequestRequestError,
  UnauthorizedError,
} = require("../../cores/error.response");
const { formatPhone } = require("../utils/convert");

class CheckFieldsBuilder {
  constructor() {
    this.fields = {};
  }

  setUsername(username) {
    if (validator.isEmpty(username)) {
      throw new BadRequestRequestError("Username is required");
    }
    this.fields.username = username;
    return this;
  }

  setEmail(email) {
    if (validator.isEmpty(email)) {
      throw new BadRequestRequestError("Email is required");
    }
    this.fields.email = email;
    return this;
  }

  setPassword(password) {
    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minSymbols: 1,
      })
    ) {
      throw new UnauthorizedError("Password is not strong enough");
    }
    this.fields.password = password;
    return this;
  }

  setPhone(phone) {
    if (validator.isEmpty(phone)) {
      throw new BadRequestRequestError("Phone number is required");
    }
    if (!validator.isNumeric(phone)) {
      throw new BadRequestRequestError("Phone number must be numeric");
    }
    if (!validator.isLength(phone, { min: 10, max: 11 })) {
      throw new BadRequestRequestError(
        "Phone number must be between 10 and 11 digits"
      );
    }
    if (!/^(0\d{9}|84\d{9})$/.test(phone)) {
      throw new BadRequestRequestError("Phone number must be Vietnamese");
    }
    const formattedPhone = formatPhone(phone);
    this.fields.phone = formattedPhone;
    return this;
  }

  setAccessToken(accessToken) {
    if (!accessToken || validator.isEmpty(accessToken)) {
      throw new BadRequestRequestError("AccessToken is required");
    }
    this.fields.accessToken = accessToken;
    return this;
  }
  setRefetchToken(refetchToken) {
    if (!refetchToken || validator.isEmpty(refetchToken)) {
      throw new BadRequestRequestError("RefetchToken is required");
    }
    this.fields.refetchToken = refetchToken;
    return this;
  }

  setGeneralRandomString(string) {
    if (!string || validator.isEmpty(string)) {
      throw new BadRequestRequestError();
    }
    this.fields.string = string;
    return this;
  }
  setId(id) {
    if (!id || validator.isEmpty(id)) {
      throw new BadRequestRequestError(`Id is required`);
    }
    this.fields.id = id;
    return this;
  }

  build() {
    return this.fields;
  }
}

module.exports = CheckFieldsBuilder;
