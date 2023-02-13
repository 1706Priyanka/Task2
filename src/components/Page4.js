import React from "react";

function Page4() {
  return (
    <>
      <h3 className="main1">STORY OF THE MONTH</h3>
      <h1>SURVIVORSHIP BIAS</h1>
      <h2 className="main2">A WORLD WAR II - WARPLANES STORY</h2>

      <div>
        <img src="Images\plane.png" alt="plane" className="plane" />
        <div className="plane-content">
          During World War II a few warplanes had returned after missions. It
          was decided to strengthen the planes by adding armour on them. After
          measuring the bullet holes on the warplanes it was found that the
          fuselage had the highest bullets per unit area followed by the wings
          and finally the tail. While common sense seems to dictate that we
          reinforce the fuselage the most, the statistician Abraham Wald steps
          in to save the day. He suggested that the areas with least damage be
          reinforced. This is because we are looking at planes that actually
          made it back after missions. Thus areas with damage symbolised areas
          that the plan can get hit and still fly back to base. So the areas
          with minimal damage and are critical to the plane and actually need to
          be reinforced. This oversight is commonly known as Survivorship Bias.
        </div>
      </div>
    </>
  );
}

export default Page4;
