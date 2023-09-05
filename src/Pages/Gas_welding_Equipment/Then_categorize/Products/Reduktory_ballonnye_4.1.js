import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_reduktory_ballonnye_4.1.png"

const Reduktory_ballonnye_4_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РЕДУКТОР УГЛЕКИСЛОТНЫЙ УР-6-6 (РЕДИУС)</h2>
                <p>Редуктор углекислотный УР-6-6 (регулятор расхода газа) предназначен для понижения давления,
                    поступающего из баллона, и автоматического поддержания заданного расхода постоянным.</p>
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
			 Габариты, мм
		</p>
 </span>
                        </td>
                        <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			155х120х155
		</p>
		</span>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Вес, кг
		</p>
 </span>
                        </td>
                        <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			0,72
		</p>
		</span>
                        </td>
                    </tr>
                    <tr className="odd">
                        <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Рабочий газ
		</p>
 </span>
                        </td>
                        <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			углекислый газ
		</p>
		</span>
                        </td>
                    </tr>
                    <tr>
                        <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Наиб. пропуск. способ-сть, м3/ч
		</p>
 </span>
                        </td>
                        <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			6
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

export default Reduktory_ballonnye_4_1;