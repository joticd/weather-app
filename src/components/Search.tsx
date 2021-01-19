import React from 'react';

const Search:React.FC = () => {

    const onFormSubmit = () =>{
       

        console.log("aaaaaaaaaa")
    }



    return (
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
            <form>
                <div className="form-row">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button">Button</button>
                        </div>
                    </div>                
                </div>
            </form>
        </div>
        
    );
};

export default Search;
