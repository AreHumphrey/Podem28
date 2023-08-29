import React from 'react';
import ButtonAppBar from "../../../../Components/Header/Header"
import "../../../Pages.css"
import Basement from "../../../../Components/Basement/Basement";
import Gap from "../../../../Components/Gap/Gap";
import img_3 from "../../../../Components/Img/img_reduktory_ballonnye_2.1.png"

const Reduktory_ballonnye_2_1 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>РЕДУКТОР ПРОПАНОВЫЙ БПО-5-4 (РЕДИУС)</h2>
                <p>Регулятор давления (редуктор) баллонный пропановый одноступенчатый БПО-5-4 предназначен для понижения и регулирования давления газа - пропана, поступающего из баллона, и автоматического поддержания постоянным заданного рабочего давления газа.</p>
                <div className="container_foto">
                    <img src={img_3}></img>
                    <table cellPadding="0" cellSpacing="0" width="509" border="1">
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
			5
		</p>
		</span>
                            </td>
                        </tr>
                        <tr>
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
                        <tr className="odd">
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
                        <tr>
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
			118х165х122
		</p>
		</span>
                            </td>
                        </tr>
                        <tr className="odd">
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
			0,75
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
			2,5&nbsp;
		</p>
		</span>
                            </td>
                        </tr>
                        <tr className="odd">
                            <td valign="top" width="424">
 <span className="spaced_span">
		<p>
			 Наиб. дав. рабочее, МПа
		</p>
 </span>
                            </td>
                            <td className="value_td" valign="top" width="85">
 <span className="spaced_span">
		<p>
			0,3&nbsp;
		</p>
		</span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    Особенности конструкции<br/>
                    Отдельный редуцирующий узел с фильтрующим элементом<br/>
                    Диаметр чувствительного элемента (мембраны) 46 мм<br/>
                    Комплектация<br/>
                    Редуктор в собранном виде - 1 шт.<br/>
                    Ниппель под рукав резиновый диаметром 9 мм по ГОСТ 9356-75 - 1 шт.<br/>
                    Гайка накидная 19 (левая) - 1 шт.
                </p>


            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Reduktory_ballonnye_2_1;