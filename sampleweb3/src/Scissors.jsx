import React, {useState} from 'react';

const Scissors = () => {
    const[cutting, changeCutting] = useState("NoCutting");
    return(
        <div>
            <h1>{cutting}</h1>
            <button onClick={() => changeCutting("YesCutting!")}>change</button>
        </div>
    )
}
export default Scissors