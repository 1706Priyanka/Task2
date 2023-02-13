import React from "react";

function Page7() {
  return (
    <>
      <h3 className="main1">EXHIBIT OF THE MONTH</h3>
      <h1>CHAKRAVYUHA</h1>
      <div>
        <h2 className="main2">A DYNAMICALLY CHANGING MAZE</h2>
        <div>
          <img src="Images\circles.png" alt="circle" className="circle" />
          <p className="circle2">
            A dynamic maze exhibit which shall showcase the confusion and
            ingenuity of the Chakravyuha. The exhibit shall involve revolving
            partitons to simulate the true workings of the Chakravyuha. We are
            currently exploring the possibility of enhancing this with an AR
            experience.
          </p>
        </div>
        <p className="circle3">
          HOW IT WORKS CHAKRAVYUHA EXHIBIT OF THE MONTH Soldier at the blue dot
          is responsible to start the outward oscillatory motion by taking a
          step to the left. This triggers a chain reaction where each soldiers
          in the same ring will take a step to the left to take up the position
          emptied by the front soldier. The soldier in the next ring will take a
          step in the opposite direction (right) to trigger the chain reaction
          where every soldiers moves to the right to fill up the space emptied
          by the front soldier. So, there are seven circles of alternate
          clockwise and anticlockwise rotating soldiers that moves so fast that
          the enemy is completely lost and totally deceived into thinking that
          the formation is in few numbers as the actual strength of the inner
          rings cannot be estimated from outside the formation.
        </p>
      </div>
    </>
  );
}

export default Page7;
