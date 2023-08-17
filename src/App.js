import React from 'react';
import ButtonAppBar from "../src/Components/Header/Header";
import {Carousel} from "./Components/Carousel/Carousel";
import Info from "../src/Components/Info/Info";
import Basement from "./Components/Basement/Basement";
import './App.css';
import Catalog_list from "./Components/Catalog_list/Catalog_list";

function Main() {
    return (
        <div>
            <ButtonAppBar/>
            <div className="content">
                <Carousel>
                    <div className="item-1"></div>
                    <div className="item-2"></div>
                    <div className="item-3"></div>
                    <div className="item-4"></div>
                    <div className="item-5"></div>
                    <div className="item-6"></div>
                    <div className="item-7"></div>
                    <div className="item-8"></div>
                </Carousel>
            </div>
            <Info/>
            <Catalog_list/>
            <Basement/>

        </div>
    );
}

export default Main;
