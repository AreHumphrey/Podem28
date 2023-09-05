import React from 'react';
import ButtonAppBar from "../Components/Header/Header";
import {Carousel} from "../Components/Carousel/Carousel";
import Info from "../Components/Info/Info";
import Basement from "../Components/Basement/Basement";
import '../App.css';
import Catalog_list from "../Components/Catalog_list/Catalog_list";
import Gap from "../Components/Gap/Gap"

function Main() {
    return (
        <div className="root">
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
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Main;
