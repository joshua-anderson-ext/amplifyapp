import Sidebar from './sidebar.js';
import ContentCont from './contentCont.js';
import DataTable from './dataTable.js';
import Summary from './summary.js';
import VehicleSummary from './vehicleSummary.js';
import TireSummary from './tireSummary';
import {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";  



function Dashboard(){
    
    return (
        <Router>
            <div className="container">
                <div className="row">
                    <Sidebar />
                    <div className="contentCont py-5 d-flex flex-row flex-wrap justify-content-center col-12 col-sm-8 col-lg-9">
                        <Switch>
                            <Route path="/data-summary">
                                <Summary />
                            </Route>
                            <Route path="/data-table">
                                <DataTable />
                            </Route>
                            <Route path="/vehicle-summary">
                                <VehicleSummary />
                            </Route>
                            <Route path="/tire-summary">
                                <TireSummary />
                            </Route>
                        </Switch>
                    </div>                    
                </div>
            </div>
        </Router>        
    );
};

export default Dashboard;