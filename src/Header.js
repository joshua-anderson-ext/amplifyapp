const { AmplifySignOut } = require("@aws-amplify/ui-react");

function Header() {
  return (
    <header className="p-3 d-flex flex-row flex-wrap justify-content-start shadow-md">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-4 col-lg-3 col-xl-2">
                    <img src="/images/logo2-60ae4878d3cdbd1fba6693ba6d41c7ea.png" alt="Michelin Logo"/>
                </div>
                <div className="d-flex flex-row justify-content-end align-items-center col-12 col-sm-8 col-lg-9 col-xl-10">
                    <div className="welcomeCont text-white p-3 col-12 col-lg-7 col-xl-6">
                        <h3 className="text-center mb-3">Welcome to MICHELIN Fleet Tracker</h3>
                        <div className="w-100 d-flex flex-row justify-content-center align-items-center">
                            <div className="initialsCont d-flex flex-row justify-content-center align-items-center text-center rounded-circle mr-2 text-body">
                                <div style={{height: '23px'}}>
                                    <p>JR</p>
                                </div>                                        
                            </div>
                            <div className="infoCont text-white mr-4">
                                <p className="infoName mb-0">Juan-Pablo Rios</p>
                                <p className="infoEmail">pablo.rios@michelin.com</p>
                            </div>
                            <div className="helpButton d-flex flex-row justify-content-center align-items-center text-center rounded-circle">
                                <div style={{height: '22px'}}>
                                    <a href="/help">?</a>
                                </div>
                            </div>
                            <div>
                                <AmplifySignOut/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>            
    </header>
  );
}

export default Header;