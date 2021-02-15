import React from 'react';
import '../style/Header.scss';
import SearchBar from './SearchBar';

type Props = {    
    setResultSearch: React.Dispatch<React.SetStateAction<string>>
}

const Header:React.FC<Props> = ({setResultSearch}) => {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-xl-9 mx-auto white-text">
                    <h1>WEATHER APP</h1>
                    <h4>SEARCH FOR CURRENT WEATHER DATA</h4>
                </div>
                <SearchBar setStateSearch={setResultSearch}/>
            </div>
        </div>
    );
};

export default Header;
