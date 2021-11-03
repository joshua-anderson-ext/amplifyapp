function SidebarLink(props){
    return (
        <li onclick={props.linkFunc()}>
            <div className="d-flex flex-row justify-content-start">
                <div className="sidebarIcon">
                    <img src={props.img} alt={props.altText}/>
                </div>
                <div>
                    <h2>{props.text}</h2>
                </div>
            </div>                                
        </li>
    );
};

export default SidebarLink;