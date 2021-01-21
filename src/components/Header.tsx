import React from 'react';
import SearchBar from './SearchBar';

type Props = {    
    setResultSearch: React.Dispatch<React.SetStateAction<string>>
}

const Header:React.FC<Props> = ({setResultSearch}) => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-xl-9 mx-auto">
                    <h1 className="mb-5">WEATHER APP</h1>
                    <h4 className="mb-5">SEARCH FOR CURRENT WEATHER DATA</h4>
                </div>
                <SearchBar setStateSearch={setResultSearch}/>
            </div>
        </div>
    );
};

export default Header;
