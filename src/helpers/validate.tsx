import _ from 'lodash';
export const CODE_VALIDATE = {
  EMPTY: 'EMPTY',
  WRONG_FORMAT: 'WRONG_FORMAT',
  SUCCESS: 'SUCCESS',
};
export const validateBlank = (value: String) => {
  if (!value || _.isEmpty(value.trim())) {
    return {
      error: true,
      message: CODE_VALIDATE.EMPTY,
    };
  } else {
    return {
      error: false,
      message: CODE_VALIDATE.SUCCESS,
    };
  }
};
export const validatePhoneNumber = (value: String) => {
  const isBlank = validateBlank(value).error;
  if (isBlank) {
    return {
      error: true,
      message: validateBlank(value).message,
    };
  }

  const pattern = /[0-9]{10}/;
  if (pattern.test(String(value).toLowerCase())) {
    return {
      error: false,
      message: CODE_VALIDATE.SUCCESS,
    };
  } else {
    return {
      error: true,
      message: CODE_VALIDATE.WRONG_FORMAT,
    };
  }
};
export const validateEmail = (value: String) => {
  const isBlank = validateBlank(value).error;
  if (isBlank) {
    return {
      error: true,
      message: validateBlank(value).message,
    };
  }

  const pattern = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
  if (pattern.test(String(value).toLowerCase())) {
    return {
      error: false,
      message: CODE_VALIDATE.SUCCESS,
    };
  } else {
    return {
      error: true,
      message: CODE_VALIDATE.WRONG_FORMAT,
    };
  }
};

export const validatePassword = (value: string) => {
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{6,}$/g;
  return passRegex.test(value);
};
