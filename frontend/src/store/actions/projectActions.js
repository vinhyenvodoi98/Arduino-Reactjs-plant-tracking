import firebase from '../../config';

export const createProject = project => {
  return (dispatch, getState) => {
    // make async call to database
    dispatch({ type: 'CREATE_PROJECT', project });
  };
};

export const GET_DATA = 'GET_DATA';
export const getData = () => async (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();

  await firestore
    .collection('user')
    .doc('JhmdvPQlR2AuUX04gE6t')
    .get()
    .then(async doc => {
      var data = doc.data();
      console.log(data);
      dispatch({
        type: GET_DATA,
        data
      });
    });

  const wordRef = await firebase.database().ref('dht11-5a0f1');
  wordRef.on('value', snapshot => {
    let words = snapshot.val();
    console.log(words);
  });
};
