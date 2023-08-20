import React from 'react';
import ButtonAppBar from "../Components/Header/Header"
import '../Pages/Pages.css'
import Basement from "../Components/Basement/Basement";
import Gap from "../Components/Gap/Gap";

const UseFulPage = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>

            <div className="pages_text">
                <h2>Техническая документация</h2>
                <a href="tekh-pasport-na-blok-montazhnyy-hqg-l-k1">Тех. паспорт на блок монтажный HQG (L)K1</a>
                <br/>
                <a href="pasport-na-lebyedku-ruchnuyu-barabannuyu-kanatnuyu-jhw-1t-2t-3t">Паспорт на лебёдку ручную барабанную канатную JHW 1т; 2т; 3т.</a>
                <br/>
                <a href="pasport-i-instruktsiya-po-ekspluatatsii-lebyedok-ruchnykh-barabannykh-modeley-hwv">Паспорт и инструкция по эксплуатации лебёдок ручных барабанных моделей HWV
                </a>
                <br/>
                <a href="pasport-i-instruktsiya-po-ekspluatatsii-lebyedok-ruchnykh-modeley-hwg">Паспорт и инструкция по эксплуатации лебёдок ручных моделей HWG</a>
                <br/>
                <a href="pasport-i-rukovodstvo-po-ekspluatatsii-lebedka-rychazhnaya-mtm-0-8t-1-6t-3-2t-5-4t">Паспорт и руководство по эксплуатации Лебедка рычажная МТМ 0,8т. / 1,6т. / 3,2т. / 5,4т.</a>
                <br/>
            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default UseFulPage;