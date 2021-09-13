import { all, call } from 'redux-saga/effects';
import fileSaga from '@/reducers/file/saga';
export default function* () {
  yield all([
    call(fileSaga),
  ]);
}
