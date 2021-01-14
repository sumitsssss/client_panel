import { firestore } from "../../firebase";
import { ADD_CLIENTS, FETCH_CLIENTS } from "../actionTypes";


// TODO :: Make Firebase RealTime.
export const fetchClients = () => async (dispatch) => {
  
  const snapShot = await firestore.collection("clients").get();
  const clients = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //   console.log(clients)  ;
  dispatch({
    type: FETCH_CLIENTS,
    payload: clients,
  });
};

export const collectIdsAndData = (doc) => ({ id: doc.id, ...doc.data() });

export const addClinets = (clientData) => async (dispatch) => {
  const docRef = await firestore.collection("clients").add(clientData);
  const doc = await docRef.get();
  const newClient = collectIdsAndData(doc);
  dispatch({
    type: ADD_CLIENTS,
    payload: newClient,
  });
};

export const deleteClients = (id)=> async (dispatch)=>{

}


