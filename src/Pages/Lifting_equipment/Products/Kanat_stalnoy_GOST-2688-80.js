import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_kanaty_i_verevki_2.png"

const Kanaty_i_verevki_2 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>КАНАТ СТАЛЬНОЙ ГОСТ 2688-80</h2>
                <div className="container_foto_1">
                    <img src={img_3}></img>

                </div>
                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td><strong>Диаметр, мм </strong></td>
                            <td><strong>Вес 1000 м (кг)</strong></td>
                        </tr>

                        <tr>
                            <td>3,8</td>
                            <td>55,17</td>
                        </tr>

                        <tr>
                            <td>4,0</td>
                            <td>64,10</td>
                        </tr>

                        <tr>
                            <td>4,5</td>
                            <td>73,90</td>
                        </tr>

                        <tr>
                            <td>4,8</td>
                            <td>84,40</td>
                        </tr>

                        <tr>
                            <td>5,1</td>
                            <td>95,50</td>
                        </tr>

                        <tr>
                            <td>5,6</td>
                            <td>116,50</td>
                        </tr>

                        <tr>
                            <td>6,2</td>
                            <td>141,60</td>
                        </tr>

                        <tr>
                            <td>6,9</td>
                            <td>176,60</td>
                        </tr>

                        <tr>
                            <td>7,6</td>
                            <td>211,00</td>
                        </tr>

                        <tr>
                            <td>8,3</td>
                            <td>256,00</td>
                        </tr>

                        <tr>
                            <td>9,1</td>
                            <td>305,00</td>
                        </tr>

                        <tr>
                            <td>9,6</td>
                            <td>358,60</td>
                        </tr>

                        <tr>
                            <td>11</td>
                            <td>461,60</td>
                        </tr>

                        <tr>
                            <td>12</td>
                            <td>527,00</td>
                        </tr>

                        <tr>
                            <td>13</td>
                            <td>599,60</td>
                        </tr>

                        <tr>
                            <td>14</td>
                            <td>728,00</td>
                        </tr>

                        <tr>
                            <td>15</td>
                            <td>844,00</td>
                        </tr>

                        <tr>
                            <td>16,5</td>
                            <td>1025,00</td>
                        </tr>

                        <tr>
                            <td>18</td>
                            <td>1220,00</td>
                        </tr>

                        <tr>
                            <td>19,5</td>
                            <td>1405,00</td>
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

export default Kanaty_i_verevki_2;