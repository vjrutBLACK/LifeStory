export const DEFAULT_MESSAGE = 'Có lỗi xảy ra';
const ERRORS: any = {
  AUTH_EMAIL_ALREADY_CONFIRMED: 'Email đã được xác thực',
  AUTH_EMAIL_OTP_INVALID: 'OTP không chính xác',
  AUTH_LOGIN_METHOD_NOT_AVAILABLE: 'Phương thức đăng nhập không được hỗ trợ',
  AUTH_NOT_AUTHORIZED: 'Không có quyền truy cập',
  AUTH_USER_LOGIN_NOT_SUCCESS: 'Đăng nhập không thành công',
  AUTH_USER_NOT_ACTIVE: 'Tài khoản chưa được kích hoạt',
  AUTH_USER_NOT_EXIST: 'Tài khoản không tồn tại',
  AUTH_USER_REFRESH_TOKEN_INVALID: 'Đăng nhập không thành công',
};

export class DropDownHolder {
  static dropDown: any;
  static setDropDown(dropDown: any) {
    this.dropDown = dropDown;
  }
  static getDropDown() {
    return this.dropDown;
  }
}

export const showGlobalMessage = (code: string, type: 'error' | 'success', title = null, defaultMessage = null) => {
  const mess = ERRORS[code] || defaultMessage || DEFAULT_MESSAGE;
  DropDownHolder.dropDown.alertWithType(type, title || 'Zoominton', mess);
};

export const showMessage = (type: 'error' | 'success' | 'warn', message: any, title: any = null) => {
  DropDownHolder.dropDown.alertWithType(type, title || 'Zoominton', message);
};
