import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_reduktory_ballonnye_1.1.png"

const Reduktory_ballonnye_1_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РЕДУКТОР КИСЛОРОДНЫЙ БКО-50-4 (РЕДИУС)</h2>
                <p>Регулятор давления (редуктор) баллонный кислородный одноступенчатый БКО-50-4 предназначен для
                    понижения и регулирования давления газа - кислорода, поступающего из баллона, и автоматического
                    поддержания постоянным заданного рабочего давления газа.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                </div>

                <div className="table-container">
                    <table className="table" border="1">
                        <p><b>Технические характеристики:</b></p>
                        <tbody>
                        <tr className="odd">
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Мак. проп. способность, м3/ч
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 50
		</p>
 </span>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Наиб. давление рабочее, МПа
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 1,25
		</p>
 </span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Коэффициент неравномерности рабочего давления, i, не более
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 0,3
		</p>
 </span>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Коэффициент перепада рабочего давления, R, не более
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 0,3
		</p>
 </span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Габариты, мм
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 135х141х133
		</p>
 </span>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Масса комплекта, кг
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 1,53
		</p>
 </span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Наибольшее давление срабатывания предохранительного клапана, МПа
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 2,5
		</p>
 </span>
                            </td>
                        </tr>
                        <tr>
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Наиб. дав. вход, МПа
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			 20
		</p>
 </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
            <Gap/>
            <Basement/>

        </div>
);
}

export default Reduktory_ballonnye_1_1;