import React from 'react';

const Search:React.FC = () => {
    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div>
    );
};

export default Search;
