function Footer() {
  return (
    <footer className="d-flex flex-row flex-wrap justify-content-center w-100">
        <div className="container py-4">
            <div className="row">                  
                <div className="col-md-6 col-lg-3 px-4 footerBlock block1">
                    <h3>Michelin USA</h3>
                    <ul className="px-0" style={{listStyle: 'none'}}>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Sustainable Development</a></li>
                    </ul>
                    <div className="socialIconCont d-flex flex-row flex-wrap justify-content-start">
                        <div className="pr-1">
                            <a href=""><img src="./images/twitter.png"/></a>                        
                        </div>
                        <div className="pr-1">
                            <a href=""><img src="./images/facebook.png"/></a>                        
                        </div>
                        <div className="pr-1">
                            <a href=""><img src="./images/youtube.png"/></a>                        
                        </div>
                        <div className="pr-1">
                            <a href=""><img src="./images/instagram.png"/></a>                        
                        </div>                    
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 px-4 footerBlock block2">
                    <h3>Michelin's Sites</h3>
                    <ul className="px-0" style={{listStyle: 'none'}}>
                        <li><a href="/">Automotive Tires</a></li>
                        <li><a href="/">Truck Tires</a></li>
                        <li><a href="/">Michelin Global</a></li>
                    </ul>                 
                </div>
                <div className="col-md-6 col-lg-3 px-4 footerBlock"> 
                    <h3>Michelin's Services</h3> 
                    <ul className="px-0" style={{listStyle: 'none'}}>
                        <li><a href="/">Aerodynamic Solutions</a></li>
                        <li><a href="/">Advantage Program</a></li>
                        <li><a href="/">ONCall 2.0</a></li>
                        <li><a href="/">Tire Care</a></li>
                        <li><a href="/">Auto Inflate</a></li>
                        <li><a href="/">Fleet Solutions</a></li>
                    </ul>                
                </div>
                <div className="col-md-6 col-lg-3 px-4 footerBlock">
                    <h3>Tire Safety</h3>                
                    <ul className="px-0" style={{listStyle: 'none'}}>
                        <li><a href="/">Truck Tire Basics & Safety</a></li>
                        <li><a href="/">Automotive Tire Basics & Safety</a></li>
                    </ul>                
                </div>
            </div>
        </div>      
        <div className="w-100 copyrightCont py-3 text-center text-white">
            <p className="mb-0">© 2021 Michelin. All rights reserved. | <a className="text-white" href="">Privacy Policy</a></p>
        </div>
    </footer>
  );
}

export default Footer;