import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useHistory } from "react-router-dom";



import { useState } from 'react';

import { useDispatch, useSelector } from "react-redux";

import './Appbar.css';

import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
import { Badge, BadgeContainer } from '@progress/kendo-react-indicators';

import  Search  from '../mainsearch/Search';

import  LoginModal  from '../login/LoginModal';

import { Button } from '@progress/kendo-react-buttons';

let kendokaAvatar = 'https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png';

const handleDomEvent =(event)=>  {
    console.log("xxx");
}



const loginOpen =(event)=>  {
    console.log("xxx");
}



const Appbar = () => {
    const history = useHistory();
    const { user: currentUser } = useSelector((state) => state.auth);
const [isOpen, setIsOpen] = useState(false);


const onMenuButtonClick = () => {
    if (!currentUser) {
    let path = 'loginmodal'; 
    history.push(path);
    return;  
  }  
    setIsOpen(!isOpen);
  };
    
    
    return (
        <React.Fragment>
            <AppBar className="appbar">
                <AppBarSection>
                    <button className="k-button k-button-clear">
                        <span className="k-icon k-i-menu" />
                    </button>
                </AppBarSection>

                <AppBarSpacer style={{ width: 4 }} />

                <AppBarSection>
                    <h1 className="title">Mobilni oglasi</h1>
                </AppBarSection>

                <AppBarSpacer style={{ width: 50 }} />

                <AppBarSection>
                    <Search />
                </AppBarSection>

                <AppBarSpacer style={{ width: 32 }} />

                

                <AppBarSpacer />

                <AppBarSection className="actions">
                    <button className="k-button k-button-clear" onClick={onMenuButtonClick}>
                        <BadgeContainer> 
                            <span className="k-icon k-i-login" />
                            
                        </BadgeContainer>
                    </button>
                </AppBarSection>

                
                <AppBarSection>
                    <Button icon="add" onClick={handleDomEvent} className="k-button" >Dodaj oglas</Button>
                </AppBarSection>
                

                <AppBarSection>
                    <Avatar shape="circle" type="image">
                        <img src={kendokaAvatar} />
                    </Avatar>
                </AppBarSection>
            </AppBar>
            <style>{`
                body {
                    background: #dfdfdf;
                    
                }
                .title {
                    font-size: 18px;
                    margin: 0;
                    
                }
               
               
                
                
                
            `}</style>
        </React.Fragment >
    );
};

export default Appbar;