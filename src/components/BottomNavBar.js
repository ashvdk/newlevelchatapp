import React from 'react'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import PermIdentityRoundedIcon from '@material-ui/icons/PermIdentityRounded';

function BottomNavBar() {
    return (
        <div style={{display: "flex", justifyContent: "space-around", position: "fixed", width: "100%",bottom: "0px", paddingBottom: "10px", background: "white"}}>
            <div>
                <div style={{textAlign: "center"}}><ChatOutlinedIcon /></div>
                <div>Chats</div>
            </div>
            <div>
                <div style={{textAlign: "center"}}><SearchRoundedIcon /></div>
                <div>Search</div>
            </div>
            <div>
                <div style={{textAlign: "center"}}><PermIdentityRoundedIcon /></div>
                <div>Profile</div>
            </div>
        </div>
    )
}

export default BottomNavBar
