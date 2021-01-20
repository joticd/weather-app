import React from 'react';
import SearchBar from './SearchBar';

const Header:React.FC = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-xl-9 mx-auto">
                    <h1 className="mb-5">WEATHER APP</h1>
                    <h4 className="mb-5">SEARCH FOR CURRENT WEATHER DATA</h4>
                </div>
                <SearchBar />
            </div>
        </div>
    );
};

export default Header;
