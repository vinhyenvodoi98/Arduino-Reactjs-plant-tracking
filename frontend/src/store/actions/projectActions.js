import firebase from '../../config';

export const GET_DATA = 'GET_DATA';
export const GET_REALTIME = 'GET_REALTIME';

export const createProject = project => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_PROJECT', project });
  };
};

export const getData = () => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  await firestore
    .collection('sensor')
    .doc('8-12')
    .get()
    .then(async doc => {
      var data = doc.data();
      console.log(data);
      dispatch({
        type: GET_DATA,
        data
      });
    });

  const wordRef = await firebase.database().ref('sensor');
  wordRef.on('value', snapshot => {
    let realtime = snapshot.val();
    dispatch({
      type: GET_REALTIME,
      realtime
    });
  });
};
