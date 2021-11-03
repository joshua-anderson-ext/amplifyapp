function FilterBar(){
    return (
        <div className="filterTools w-100 d-flex flex-row flex-wrap justify-content-center">
            <form className="d-flex flex-row flex-wrap">
                <input type="text" className="mx-1" placeholder="Begin Date"/>
                <input type="text" className="mx-1" placeholder="End Date"/>
            </form>
            <div className="w-100 d-flex flex-row flex-wrap pt-4 justify-content-center">
                <div className="dropdown mx-1">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Tire Location
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Yard 1</a>
                        <a className="dropdown-item" href="#">Yard 2</a>
                        <a className="dropdown-item" href="#">Yard 3</a>
                        <a className="dropdown-item" href="#">Offsite</a>
                        <a className="dropdown-item" href="#">At Retreader</a>
                    </div>
                </div>
                <div className="dropdown mx-1">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Inventory Status
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Yard Stock</a>
                        <a className="dropdown-item" href="#">Rolling</a>
                        <a className="dropdown-item" href="#">Waiting for Retread</a>
                        <a className="dropdown-item" href="#">At Retreader</a>
                    </div>
                </div>
                <div className="dropdown mx-1">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Tire Condition
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">New</a>
                        <a className="dropdown-item" href="#">Retread</a>
                        <a className="dropdown-item" href="#">Scrap</a>
                    </div>
                </div>
                <div className="dropdown mx-1">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Mounting Status
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Mounted</a>
                        <a className="dropdown-item" href="#">Unmounted</a>
                        <a className="dropdown-item" href="#">Stock</a>
                    </div>
                </div>
            </div>                            
        </div>
    );
};

export default FilterBar;