import {take} from 'redux-saga/effects';
import {SnackbarService} from '@helpers/snackbar';

export function* checkErrorAsync() {
  while (true) {
    const action: any = yield take((action: any) => /.+_ERROR/.test(action.type));
    console.log('action', action);
    if (action?.type) {
      SnackbarService.displayErrorMessage(action?.error?.error_description);
    }
    // SnackbarService.displayWarningMessage(action.payload.message || 'Có lỗi xảy ra vui lòng thử lại sau');
  }
}

export function* checkUpdateSuccessAsync() {
  while (true) {
    const action: any = yield take((action: any) => /.+_UPDATED_SUCCESS/.test(action.type));
    SnackbarService.displaySuccessMessage(action.payload.message || 'Cập nhật thành công');
  }
}
