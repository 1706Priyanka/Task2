import React from "react";

function Page5() {
  return (
    <>
      <h3 className="main1">NEWS & LATEST RESEARCH</h3>
      <h1>WAR & TECH</h1>
      <h2 className="main2">SNAPSHOTS OF LATEST WAR AND DEFENCE TECHNOLOGY</h2>
      <img src="Images\startUs.png" alt="startUs" className="start" />
      <div className="drdo">
        <p className="agni">
          INDIA SUCCESSFULLY TEST FIRES AGNI PRIME BALLISTIC MISSILE. DRDO is
          the R&D wing of Ministry of Defence, with a vision to empower India
          with cutting-edge defence technologies.
        </p>
        <img src="Images\rocket.png" alt="rocket" className="rocket" />
      </div>
      <div className="drdo">
        <img src="Images\missle.png" alt="missle" className="rocket" />
        <p className="civil">
          Currently, wars can't be done right with robots as they might find it
          difficult to discriminate between targets. They might even harm
          innocent civilians in certain cases. There is also an additional risk
          of hacking but all this will change soon..
        </p>
      </div>
    </>
  );
}

export default Page5;
