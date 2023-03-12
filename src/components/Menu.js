import React from "react"
import "./Menu.css"
import logo from "../images/logo.png"
import home from "../images/home.png"
import messages from "../images/messages.png"
import orderhistory from "../images/orderhistory.png"
import settings from "../images/settings.png"
import statistics from "../images/statistics.png"
import products from "../images/products.png"



function Menu(){
    return(

        <div className="menubar">
            <img className="main-logo" src={logo} />
            
            <div className="menu-list">
                <div className="home">
                    <img src={home} />
                    <p>HOME</p>
                </div>

                <div className="orderhistory">
                    <img src={orderhistory} />
                    <p>ORDERHISTORY</p>
                </div>

                <div className="messages">
                    <img src={messages} />
                    <p>MESSAGES</p>
                </div>

                <div className="statistics">
                    <img src={statistics} />
                    <p>STATISTICS</p>
                </div>

                <div className="products">
                    <img src={products} />
                    <p>PRODUCTS</p>
                </div>

                <div className="settings">
                    <img src={settings} />
                    <p>SETTINGS</p>
                </div>

            </div>
        
        </div>


    )
}

export default Menu;