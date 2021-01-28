import React, { useState } from 'react';

type Props ={
    setStateSearch: React.Dispatch<React.SetStateAction<string>>
}

const SearchBar:React.FC<Props> = ({setStateSearch}) => {

    const [term, setTerm] = useState<string>('');
    const onInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setTerm(event.target.value);
    };
    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
       event.preventDefault();
       setStateSearch(term);
    };

    return (
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form onSubmit={onFormSubmit}>
                <div className="form-row">
                    <div className="input-group mb-3">
                        <input 
                            type="text" 
                            className="form-control" 
                            value={term}
                            onChange={onInputChange}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="submit">Button</button>
                        </div>
                    </div>                
                </div>
            </form>
        </div>
        
    );
};

export default SearchBar;
