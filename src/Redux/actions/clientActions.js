import firestore from '../../firebase';

const getClients = async ()=>{
    const snapShot = await firestore.collection('clients').get();
    const clients = snapShot.docs.map(doc=>({id: doc.id, ...doc.data()}));
    return {clients};
}

export const fetchClients = ()=>{
    return dispatch=>{
        dispatch({type: 'FETCH_CLIENTS', payload: getClients()})
        

    }

}