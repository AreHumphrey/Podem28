import React from 'react';
import ButtonAppBar from "../Components/Header/Header"
import '../Pages/Pages.css'
import Basement from "../Components/Basement/Basement";
import Gap from "../Components/Gap/Gap";
import icon from "../../src/Components/Img/programming_preferences_options_gear_coding_icon_228957.svg"

const Services = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>

            <div className="services_all">
                <img src={icon} className="App-logo" style={{ fill: 'red' }} />
                <h2 className="services_h2">Раздел в разработке</h2>

            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Services;