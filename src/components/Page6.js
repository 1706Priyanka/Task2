import React from "react";

function Page6() {
  return (
    <>
      <h3 className="main1">CONTEXT OF BENGALURU</h3>
      <h1>BLR FORT</h1>
      <div className="drdo">
        <img src="Images\fort.png" alt="fort" className="fort" />

        <ul className="bangalore">
          BANGALORE FORT
          <li>
            The Bangalore Fort began in 1537 as a mud fort built by Kempe Gowda
            which is an engineering marvel.
          </li>
          <li>Hyder Ali in 1761 replaced with the fort Stone structure</li>
          <li>
            Tipu Sultan in 18th century renovated structure which stood the test
            of time.
          </li>
        </ul>
      </div>
      <div className="drdo">
        <p
          style={{
            background: "black",
            color: "white",
            fontSize: "large",
            textAlign: "center",
          }}
        >
          The fort at Bangalore has a perimeter of about one mile. With the
          capture of the Bangalore Fort the Army of British East India Company
          replenished supplies and obtained a strategic base from where it could
          attack the Capital of Tippu Sultan i.e. Srirangapatna.
        </p>
        <img src="Images\fort2.png" alt="fort2" className="fort1" />
      </div>
      <div className="drdo">
        <img src="Images\fort3.png" alt="fort3" className="fort1" />
        <p
          style={{
            background: "rgb(255, 221, 0)",
            fontSize: "large",
            textAlign: "center",
          }}
        >
          In November 2012 workers at the neighbouring Bangalore Metro
          construction site unearthed 2 huge iron cannons weighing a ton each
          with cannonballs. Using carbon dating, scientists found that it was
          from the time of Tipu Sultan.
        </p>
      </div>
    </>
  );
}

export default Page6;
