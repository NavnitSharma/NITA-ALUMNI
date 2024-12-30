import React from "react";
import "./about.css";
export default function About() {
  return (
    <div>
      <div className="about-heading">
      <h1 style={{ marginBottom: "20px",color:"#002147"}} className="text-center mt-4">
        STUDENT ALUMNI RELATION CELL (SARC)
      </h1>
      <p
        style={{ textAlign: "center", display: "flex", alignItems: "center" }}
        className="p-1"
      >
        Student Alumni Relation Cell (SARC) is a voluntary cell of NIT AGARTALA
        under the office of Alumni Affairs and External Relations. It is
        operated by the students of NIT AGARTALA under the Guidance of the Dean,
        Alumni Affairs, and External Relations. SARC acts as an engaging and
        mutually beneficial link between NIT AGARTALA and its Alumni community.
        The organization works toward creating a dynamic student alumni
        community with NIT Agartala dedicated to fostering relationships and
        strengthening ties between students and alumni to support NITA's SARC
        mission of offering top-notch education and opportunities while also
        making investments in the institution's future. For achieving our
        well-specified and sophisticated vision, a plethora of activities have
        been undertaken to forge links and strengthen bonds between current
        students and alumni as well as amongst alumni.
      </p>
      </div>
      <div className="sarc-team mt-4 ">
        <h4 className="fs-6"><strong>SARC Team</strong></h4>
        <ol>
          <li>General Secretary (Elected)-  Varun Srivastava</li>
          <li>Associate General Secretary (UG)-Harish Sharan</li>
          <li>Associate General Secretary (PG)-Korlapati Gopi Krishna</li>
          <li>Event coordinators</li>
          <li>web coordinators</li>
          <li>Design coordinator</li>
          <li>Social media coordinatos</li>
        </ol>

        <p>For more Information visit: &nbsp; <a href="./team">All TEAM MEMBERS</a></p>
      </div>
    </div>
  );
}
