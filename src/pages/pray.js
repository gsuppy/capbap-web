import {firebaseApp} from "./pages/authentication";

const db = firebaseApp.firestore();

const prayers = db.collection("/prayers");
prayers.on("value", (snapshot) =>{
  const data = snapshot.val();
  console.log(data);
});

const addPrayer = () => {
  db.collection("prayers").add({
    first: "Alan",
    middle: "Mathison",
    last: "Turing",
    born: 1912
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
};

function Pray() {
  return ( 
  <div>
    <div className="banner">
    <img src={process.env.PUBLIC_URL + 'chbc.jpg'} alt=''></img>
    </div>
    <div className="body-text">
      <h2>Pray</h2>
    </div>
  </div>
);
}

export default Pray;