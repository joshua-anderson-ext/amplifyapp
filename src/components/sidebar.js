import { Link } from "react-router-dom";

function Sidebar(props){
    return (
        <div className="sidebarCont py-5 col-12 col-sm-4 col-lg-3">
            <ul style={{listStyle: 'none',paddingLeft:'0'}}>                
                <li>
                    <Link to="/data-summary">
                        <div className="d-flex flex-row justify-content-start">
                            <div className="sidebarIcon">
                                <i class="fas fa-home"></i>
                            </div>
                            <div>
                                <h2>Summary</h2>
                            </div>
                        </div>                 
                    </Link>                                   
                </li>
                <li>
                    <Link to="/data-table">
                        <div className="d-flex flex-row justify-content-start">
                            <div className="sidebarIcon">
                                <i class="fas fa-list"></i>                
                            </div>
                            <div>
                                <h2>Table</h2>
                            </div>
                        </div>             
                    </Link>                                       
                </li>
                <li>
                    <Link to="/vehicle-summary">
                        <div className="d-flex flex-row justify-content-start">
                            <div className="sidebarIcon">
                                <i class="fas fa-truck"></i>                
                            </div>
                            <div>
                                <h2>Vehicles</h2>
                            </div>
                        </div>             
                    </Link>                                       
                </li>
                <li>
                    <Link to="/tire-summary">
                        <div className="d-flex flex-row justify-content-start">
                            <div className="sidebarIcon">
                                <i class="fas fa-dot-circle"></i>                
                            </div>
                            <div>
                                <h2>Tires</h2>
                            </div>
                        </div>             
                    </Link>                                       
                </li>
                <li className="settingsItem">
                    <div className="d-flex flex-row justify-content-start">
                        <div className="sidebarIcon">
                            <i className="fas fa-cog"></i>
                        </div>
                        <div>
                            <h2>Settings</h2>
                        </div>
                    </div>
                </li>
            </ul>                       
        </div>
    );
};

export default Sidebar;