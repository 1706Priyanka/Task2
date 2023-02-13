import React from "react";

function Page10() {
  return (
    <>
      <h3 className="main1">MONTHLY CHALLENGES</h3>
      <h2>WARGAMES</h2>
      <div>
        <h4 className="main2">A FEW WAR THEMED PUZZLES AND CHALLENGES</h4>
        <div>
          <img src="Images\tree.png" alt="tree" className="formula" />
          <p className="formula1">
            Puzzle 1 : Secret Tents Every tree has one tent either above, below,
            or beside it. No tent can be in a square touching another tent (even
            diagonally). The numbers beside each row and column tell you how
            many tents are in that row or column. Can you find thelocations of
            all tents?
          </p>
        </div>
        <p className="formula1">
          Puzzle 2 : Missiles 3 cities care having a three way war. The winner
          is the city which survives after the destruction of the other 2
          cities. City A has nuclear bombs and never fails to destroy the
          targeted city. City B has Medium grade missiles and has a 50% chance
          of destroying the targeted city. City C being the weakest has only 1
          in 3 chances of destroying it’s target. C has one chance to attack,
          followed by B and finally A after which we return to city C. This
          continues in the same order till only one city is left. Assume that
          everyone adopts the best strategy. Who should City C target first to
          have best chance of survival?
        </p>
      </div>
    </>
  );
}

export default Page10;
