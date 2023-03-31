import React, { useState } from "react";
import StaffRow from "../components/StaffRow.js"   

function StaffPage() {

  const [results, setData] = useState([]);
  const getData = () => {
    fetch("https://randomuser.me/api/?results")
    .then((dataCollected) => dataCollected.json())
    .then((dataCollected) => {
      setData(dataCollected.results);
    })
    
    .catch(() => {
      alert("Sorry, there was a problem. Looks like something went wrong! But don't worry - it can happen to the best of us. Please try again.")
    });
  };

  return (

    <>
      <h2>Meet Our Team</h2>

      <article className="teamMembersArticle">

        <p>Below I communicate with randomuser.me a website that provides open-source API for generating random user data. The data below is pulled via API call.</p>

        <p>The data below is pulled via API call.</p>


        <label className="buttonLabel" for="getTeamMemberInfoFromTheServer">Make a call to the</label>&nbsp;&nbsp;
        <button className="button" onClick={getData}
        name="getTeamMemberInfoFromTheServer" 
        value="Pull Team Member Info from the server"
        id="getTeamMemberInfoFromTheServer">API</button>
        
        <table className="teamMembersTable">
            <caption>Randomly Generated Users</caption>

            <thead>
                <tr>
                    <th>Portrait</th>
                    <th>Name &amp; Email</th>
                    <th>Phone</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </thead>

            <tbody className="staff-nav" id="getOneRandomTeamMember">
                {
                results.map((teamMember, position) => 
                <StaffRow teamMember={teamMember} key={position} />)
                }
            </tbody>
        </table>

      </article>
    </>
  );
}

export default StaffPage;