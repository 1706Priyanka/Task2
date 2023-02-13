import React from "react";
import "./style.css";

function Page() {
  return (
    <div>
      <h1 className="heading">PARAM SCIENCE NEWSLETTER</h1>
      <img src="Images\mainpage.jpg" alt="mainimage" className="main-image" />
      <p className="quote">
        The supreme art of war is to subdue the enemy without fighting.
      </p>
      <img src="Images\apj.png" alt="apj" className="apj" />
      <div className="dec">
        <p className="pollution">
          DEC 2022 SCIENCE DAYS World AIDS Day: 1st Dec World Computer Literacy
          Day: 2nd Dec National Pollution Prevention Day: 2nd Dec National
          Energy Conservation Day: 14th Dec National Mathematics Day:22nd Dec
          International Bio Diversity Day: 29th Dec
        </p>
        <p className="birthday">
          <ul>
            Did you know people with more birthdays live longer!
            <li>Werner Karl Heisenberg: 5th Dec 1901</li>
            <li>Carl Gustav Jacob Jacobi :10th Dec 1804</li>
            <li>Alfred Werner: 12th Dec 1866</li>
            <li>Srinivasa Ramanujan: 22nd Dec 1887</li>
            <li>Isaac Newton :25th Dec 1642</li>
          </ul>
        </p>
      </div>

      <p className="war-tool">WAR TOOL & STRATEGY</p>
      <p className="letter">
        Our first newsletter we choose to look at the science behind war. It
        pertains to the military, diplomatic, philosophical, social, political,
        psychological or economic dimensions of warin the context of science and
        technology.
      </p>
    </div>
  );
}

export default Page;
