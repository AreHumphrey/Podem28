import React from 'react';
import ButtonAppBar from "../Components/Header/Header"
import '../Pages/Pages.css'
import Basement from "../Components/Basement/Basement";
import Gap from "../Components/Gap/Gap";

const Services = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>

            <div className="pages_text">
                <h2>Раздел в разработке</h2>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Services;