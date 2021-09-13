import React from 'react'
import Inputs from './Inputs'

function Container() {
    return (
        <div style={{ height: "85vh", overflow: "scroll", background: "#f4f4f4" }}>
            <div style={{
                fontSize: "25px",
                fontWeight: "bold",
                padding: "5px 11px"
            }}>Chats</div>
            <Inputs type="text" label="search"/>
            <div style={{
                padding: "5px 11px"
            }}>
                <div style={{display: "flex"}}>
                    <div style={{width: "60px"}}>
                        <img src="https://i.etsystatic.com/9193132/r/il/93fcac/1374669102/il_794xN.1374669102_kk7g.jpg" style={{width: "100%"}}/>
                    </div>
                    <div style={{display: "flex", flex: 1, flexDirection: "column", justifyContent: "center", padding: "01px 10px"}}>
                        <div style={{fontWeight: "bold"}}>Ashwin Rao K</div>
                        <div style={{color: "grey", fontSize: "14px"}}>She will reply to you tomorrow</div>
                    </div>
                    <div style={{display: "flex", alignItems: "center"}}>
                        Yesterday
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Container
