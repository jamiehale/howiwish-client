import { fork } from 'redux-saga/effects';
import sessionSaga from './session/sagas';
import myListSaga from './my-list/sagas';
import myGroupsSaga from './my-groups/sagas';
import registrationSaga from './registration/sagas';
import invitationSaga from './invitation/sagas';

function* rootSaga() {
  yield fork(sessionSaga);
  yield fork(myListSaga);
  yield fork(myGroupsSaga);
  yield fork(registrationSaga);
  yield fork(invitationSaga);
}

export default rootSaga;
