import BagSummary from "../components/BagSummary";

function Bag(){
return(
    <>
   
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
        </div>
        <div className="bag-summary">
            <BagSummary/>
        </div>
      </div>
    </main>
 
    </>
)
}

export default Bag;