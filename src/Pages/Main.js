import React from 'react';
import ButtonAppBar from "../Components/Header/Header";
import Info from "../Components/Info/Info";
import Basement from "../Components/Basement/Basement";
import '../App.css';
import Catalog_list from "../Components/Catalog_list/Catalog_list";
import Gap from "../Components/Gap/Gap"
import Slider from "../Components/Carousel/Carousel";

function Main() {
    return (
        <div className="root">
            <ButtonAppBar/>
            <Slider/>


            <Info/>
            <Catalog_list/>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Main;
