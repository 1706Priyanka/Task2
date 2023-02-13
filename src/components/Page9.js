import React from "react";

function Page9() {
  return (
    <>
      <h3 className="main1">TOPIC OF THE MONTH</h3>
      <h2>LANCHESTER'S LAWS</h2>
      <div>
        <h4 className="main2">THE MATH BEHIND WAR STRATEGIES</h4>
        <img src="Images\formula.png" alt="formula" className="formula" />
        <p className="formula1">
          The Lanchester equations are differential equations describing the
          time dependence of two armies' strengths A and B as a function of
          time, with the function depending only on A and B
        </p>
      </div>
      <div className="formula1">
        The solution to these equations shows that:
        <ul>
          <li>
            If α=β, i.e. the two sides have equal firepower, the side with more
            soldiers at the beginning of the battle will win;
          </li>
          <li>
            If A=B, i.e. the two sides have equal numbers of soldiers, the side
            with greater firepower will win;
          </li>
          <li>
            If AB and αβ, then Red will win, while if AB and αβ, Blue will win;
          </li>
          <li>
            If A B but α β, or AB but α β, the winning side will depend on
            whether the ratio of β/α is greater or less than the square of the
            ratio of A/B. Thus, if numbers and firepower are unequal in opposite
            directions, a superiority in firepower equal to the square of the
            inferiority in numbers is required for victory; or, to put it
            another way, the effectiveness of the army rises proportionate to
            the square of the number of people in it, but only linearly with
            their fighting ability.
          </li>
        </ul>
        The first three of these conclusions are obvious. The final one is the
        origin of the name "square law".
      </div>
    </>
  );
}

export default Page9;
