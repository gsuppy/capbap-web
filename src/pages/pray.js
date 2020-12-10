import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import {firebaseApp} from "./authentication";

const db = firebaseApp.firestore();
const prayers = db.collection("prayers");

// Dynamic prayer bulletin board that is populated - anyone can input their prayer request and their username will be automatically taken from Firebase
class Pray extends React.Component {
  // Connecting to Firestore to store prayer request data
  
  state = {
    prayerData: [],
    userName: "Anonymous",
    prayerRequest: "",
    date: new Date(),
    db: {},
    prayerTable: [],
  };
  
  componentDidMount() {
    // Make sure it populated with the initial prayer request data on the screen 
    this.updatePrayerData();

    // Collects names automatically for request based on Firebase
    const user = firebaseApp.auth().currentUser;
    if (user !== null) {
      this.setState({userName: user.displayName})
    }

  };

  updatePrayerData = async () => {
    const prayerRequests = await prayers.get();
    const prayerData = [];

    prayerRequests.docs.map((doc) => {
      prayerData.push(doc.data());
    });
    console.log(prayerData)
    this.setState({prayerData: prayerData});
  };

  handleChange = (e) => {
    this.setState({ prayerRequest: e.target.value });
  };

  // Function to add a new prayer to the table and Firestore database
  addPrayer = (e) => {
    e.preventDefault();
    this.setState({ date: Date.now()})
    const prayerRequest = this.state.prayerRequest;
    this.setState({prayerRequests: ""});
    
    console.log(this.state.date)
    prayers.add({
      name: this.state.userName,
      request: prayerRequest,
      date: this.state.date,
    })
    .then((docRef) => {
      // Rerenders prayer requests on updating DB onto the screen and resets state
        this.updatePrayerData();

        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  };

  // Renders these onto the screen in table format
  renderPrayers = () => {
    let prayerHTML = [];
    this.state.prayerData.forEach((request) => {
      console.log(request)
      if (request.date !== undefined) {
        const dateArray = request.date.toDate().toString().split(" ");
        const dateString = `${dateArray[0]} ${dateArray[1]} ${dateArray[2]} ${dateArray[3]}`;
        prayerHTML.push(
          <TableRow>
            <TableCell>{request.name}</TableCell>
            <TableCell>{request.request}</TableCell>
            <TableCell>{dateString}</TableCell>
          </TableRow>)
      };
    });
    return prayerHTML
  };

  render() {
    return ( 
      <div>
        <div className="banner">
        <img src={process.env.PUBLIC_URL + "chbc.jpg"} alt=""></img>
        </div>
        <div className="main-area">
          <h2>Pray</h2>
        <div className="pray-table">
          <TableContainer component={Paper}>
          <Table className="prayer-requests">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Requests</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.renderPrayers()}
            </TableBody>
          </Table>
          </TableContainer>
        </div>
        <div className="bottom-prayer">
          <TextField id="prayer-text" label="Prayer Request here" variant="filled" onChange={this.handleChange} value={this.state.prayerRequest}/>
          <Button variant="contained" color="primary" onClick={this.addPrayer} type="submit">
            Add Prayer
          </Button>
        </div>
        </div>
      </div>
    )
  };
};

export default Pray;