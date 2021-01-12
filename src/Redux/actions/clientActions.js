import { firestore } from "../../firebase";
import { FETCH_CLIENTS } from "../actionTypes";

export const fetchClients = () => async (dispatch) => {
  const snapShot = await firestore.collection("clients").get();
  const clients = snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  //   console.log(clients)  ;
  dispatch({
    type: FETCH_CLIENTS,
    payload: clients,
  });
};
