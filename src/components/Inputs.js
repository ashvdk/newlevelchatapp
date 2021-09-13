import React from 'react'

function Inputs({type, label}) {
    return (
        <div style={{padding: "0px 10px"}}>
                <div style={{ border: "1px solid lightgray", borderRadius: "5px", background: "white",padding: "2px 8px"}}>
                    <div style={{fontSize: "10px", color: "grey", marginBottom: "1px"}}>{label}</div>
                    <input type={type} style={{width: "100%", border: "none", outline: "none", fontSize: "15px"}}/>
                </div>
            </div>
    )
}

export default Inputs
