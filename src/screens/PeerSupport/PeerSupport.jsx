import React from 'react';
import './PeerSupport.css';
const PeerSupport = () => {
    return(
        <div className="main">
            <div className="main-header"><h1 className="h1-main">Peer Support</h1>
                <div className="mainPara"><p>Talking with peers can make all the    difference</p></div>
                <div className="support-groups">
                    <div className="sp-1"><a href='https://www.7cups.com/'>7 Cups</a></div>
                    <div className="sp-2"><a href='https://afsp.org/find-a-support-group'>AFSP Support Groups</a></div>
                    <div className="sp-3"><a href='https://www.mydepressionteam.com/'>MyDepressionTeam</a></div>
                    <div className="sp-4"><a href='https://www.nami.org/Find-Your-Local-NAMI/Affiliate/Programs?classkey=a1x36000003TN9TAAW'>NAMI Connection</a></div>
                    <div className="sp-5"><a href='https://www.nami.org/Find-Your-Local-NAMI/Affiliate/Programs?classkey=a1x36000003TN9LAAW'>NAMI Family Support Group</a></div>
                    <div className="sp-6"><a href='https://anad.org/get-help/about-our-support-groups/'></a></div>
                </div>
            </div>
        </div>
    );
};

export default PeerSupport;