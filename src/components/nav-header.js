import React from 'react';

const NavHeader = () => {
    return (
        <div className="nav-header">
            <div className="content-max">
                <div><img src="%PUBLIC_URL%/logo-saws.png"/></div>
                <div className="title">My Commercial Account</div>
                <div className="need-help flex-css">Need Help?</div>
            </div>
        </div>
    );
};

export default NavHeader;