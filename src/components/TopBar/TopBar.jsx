import React from 'react';
import './TopBar.css'
import {NotificationsNone,Language,Settings} from '@mui/icons-material';
import img from "../../images/_MG_3023.jpg"
const TopBar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">TanjilAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <img src={img} alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
};

export default TopBar;