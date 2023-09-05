import React from 'react';
import ButtonAppBar from "../../../Components/Header/Header"
import '../../Pages.css'
import Basement from "../../../Components/Basement/Basement";
import Gap from "../../../Components/Gap/Gap";
import img_3 from "../../../Components/Img/img_stelazhi_3.png"
import img_3_1 from "../../../Components/Img/img_stelazhi_3_1.png"
import img_3_2 from "../../../Components/Img/img_stelazhi_3_2.png"
import img_3_3 from "../../../Components/Img/img_stelazhi_3_3.png"
import img_3_4 from "../../../Components/Img/img_stelazhi_3_4.png"
import img_3_5 from "../../../Components/Img/img_stelazhi_3_5.png"
import img_3_6 from "../../../Components/Img/img_stelazhi_3_6.png"
import img_3_7 from "../../../Components/Img/img_stelazhi_3_7.png"
import img_3_8 from "../../../Components/Img/img_stelazhi_3_8.png"
import img_3_9 from "../../../Components/Img/img_stelazhi_3_9.png"
import img_3_10 from "../../../Components/Img/img_stelazhi_3_10.png"
import img_3_11 from "../../../Components/Img/img_stelazhi_3_11.png"
import img_3_12 from "../../../Components/Img/img_stelazhi_3_12.png"
import img_3_13 from "../../../Components/Img/img_stelazhi_3_13.png"
import img_3_14 from "../../../Components/Img/img_stelazhi_3_14.png"
import img_3_15 from "../../../Components/Img/img_stelazhi_3_15.png"
import img_3_16 from "../../../Components/Img/img_stelazhi_3_16.png"
import img_3_17 from "../../../Components/Img/img_stelazhi_3_17.png"

const Stelazhi_3 = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>
            <div className="pages_text">
                <h2>ПАЛЛЕТНЫЕ ФРОНТАЛЬНЫЕ СТЕЛЛАЖИ</h2>

                <div className="container_foto">
                    <img width="250" src={img_3}></img>

                    <p>Мы предлагаем вам купить паллетные стеллажи. Данный вид стеллажных конструкций подразделяется на:
                        Паллетные фронтальные стеллажи на зацепах
                        Паллетные фронтальные на болтах
                        Паллетные фронтальные на наклонных зацепах<br/></p>

                </div>
                <h2>СПаллетные набивные стеллажи</h2>
                <p>Фронтальные стеллажи — многоярусная конструкция выполненная из металла, паллеты с грузами загружаются
                    с фронтальной стороны (либо с двух сторон), набивные стеллажи имеют сквозную загрузку поддонов в
                    ряд.<br/></p>
                <h2>Пример комплектации стеллажа</h2>
                <img width="250"  src={img_3_1}></img>

                <div className="table-container">
                    <table className="table" border="1">
                        <tbody>
                        <tr>
                            <td colSpan="2">
                                <p align="center">
                                    Технические характеристики стеллажей
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p>
                                    Профиль и материал изготовления стоек
                                </p>
                            </td>
                            <td>
                                <p>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Прокатная
                                    сталь Ст3пс
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Ширина стойки (ширина профиля)
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    70, 90, 110, 130 мм
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Покрытие рамы
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Оцинкованное
                                </p>
                                <p align="center">
                                    Полимерное
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Шаг перфорации стойки (шаг перестановки балок по высоте)
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    50 мм
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Глубина рамы в мм
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    800; 1000; 1100 мм
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Высота (от, до ), м
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    от 2,2 до 14 м;
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Варианты крепление балки к раме
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    Зацепное
                                </p>
                                <p align="center">
                                    безметизное
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Предельно допустимые нагрузки на одну секцию стеллажа
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    от 4000 до 25000 кг (в зависимости от длины, вида профиля балок, количества ярусов
                                    хранения)
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <p align="center">
                                    Длина балок стеллажа
                                </p>
                            </td>
                            <td>
                                <p align="center">
                                    1000, 1200, 1800, 2250, 2700, 3000, 3300, 3600 мм
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Преимущества использования паллетных стеллажей:</h2>
                <p>-максимально быстрый и простой доступ к каждому виду груза;<br/>

                    -максимально оперативная обработка груза;<br/>
                    -простое визуальное представление, а также удобный учет товаров, при использовании маркировок мест
                    хранения;<br/>
                    -удобство в переоборудовании и перепланировки складов;<br/>
                    -универсальность для хранения, как для небольшого склада, так и для логистического комплекса.<br/>
                </p>
                <h2>Элементы стеллажа</h2>
                <p>Стойка паллетного стеллажа представляет собой гнутый металлический перфорированный профиль. Шаг
                    перфорации 50 мм </p>
                <img width="250"  src={img_3_2}></img>
                <p>Грузовые балки - горизонтальные, жесткие элементы стеллажей для поддонов, на которых размещается
                    груз. Балки устанавливаются в перфорационные отверстия стойки, обеспечивают жесткость конструкции
                    фронтального стеллажа.<br/></p>
                <h2>90x50</h2>
                <img width="250" src={img_3_3}></img>
                <h2>110x50</h2>
                <img width="250"  src={img_3_4}></img>
                <h2>130x50</h2>
                <img width="250"  src={img_3_5}></img>
                <h2>160x50</h2>
                <img width="250"  src={img_3_6}></img>
                <h2>Аксессуары для паллетных стеллажей</h2>
                <p>1. Соединители рядов применяются для соединения стеллажных рядов в единый блок, и для соединения
                    разрывов в стеллажном ряду при обходе колонн.<br/></p>
                <img width="250"  src={img_3_7}></img>
                <p>2. Устройства защиты применяются для защиты несущих элементов паллетного стеллажа от легких ударов,
                    грузоподъемной техники.<br/>
                    2.1. Угловая защита устанавливаются на стойки торцевых рам стеллажей для поддонов, для исключения на
                    них механических воздействий от грузоподъемной техники. Высота угловой защиты 420 мм. Защита
                    окрашена в сигнальный цвет RAL 2009 (оранжевый).</p>
                <img align="center" src={img_3_8}></img>
                <p>2.2. Защита ряда представляет собой две угловых защиты соединенные между собой двумя
                    профилями-балками ограждения. Устанавливается в торцевых частях фронтальных стеллажей и в местах
                    проезда грузоподъемной техники. Обеспечивает большую степень защиты, чем угловая защита за счет
                    большей жесткости и увеличения количества мест крепления к полу. Все элементы защиты ряда окрашены в
                    сигнальный цвет RAL 2009 (оранжевый).<br/>
                    Предлагаются защиты на одиночный и на двойной ряд. <br/></p>
                <h2>Защита одиночного ряда</h2>
                <img width="250"  src={img_3_9}></img>
                <h2>Защита двойного ряда</h2>
                <img width="250"  src={img_3_10}></img>
                <p>2.3. Защита стойки применяется для защиты стоек рам с фронтальной и боковых сторон. Устанавливается
                    на полу возле рам в стеллажных проходах. Может быть использована в составе других устройств
                    защиты.</p>
                <img align="center" src={img_3_11}></img>
                <p>Высота защиты стойки 420 мм.<br/>

                    Все элементы окрашены в сигнальный цвет RAL 2009 (оранжевый).<br/>

                    2.4. Протектор стойки применяется для защиты стоек рам на определенной высоте или когда невозможно
                    установить другие виды защиты.<br/></p>

                <img align="center" src={img_3_12}></img>
                <p>Высота протектора стойки определяется используемой погрузочной техникой:<br/>

                    350 мм при использовании рич-траков<br/>

                    850 мм при использовании вилочных погрузчиков.<br/>

                    Все элементы протектора стойки окрашены в сигнальный цвет RAL 2009 (оранжевый).<br/>

                    3. Поперечные балки используются в конструкции фронтального грузового стеллажа для усиления настила
                    из ДСП, а также когда длина грузовой балки превышает 2700 мм.<br/>
                    <br/></p>
                <img align="center" src={img_3_13}></img>
                <img align="center" src={img_3_14}></img>
                <p>4. Настил - применяются в системах фронтальных стеллажей для организации полочного хранения. Типы
                    настилов:<br/>

                    - на основе стальных полок<br/>

                    - на основе полок ДСП<br/>

                    - сетчатый настил.<br/>

                    4.1. Сетчатый настил<br/>

                    Сетчатый настил представляет собой полку (панель), сваренную из толстой (6 мм) проволоки и усиленную
                    дополнительными рёбрами жёсткости.<br/></p>
                <img width="250"  src={img_3_15}></img>
                <p>Назначение сетчатого настила – применение в качестве полки в паллетном фронтальном стеллаже, что
                    необходимо для работы с ярусами подборки товара, либо хранения лёгких грузов на нестандартных
                    паллетах и в специальной таре.<br/>

                    Сетчатый настил может быть использован при хранении непалетированных грузов в таких сегментах
                    дистрибьюции, как:<br/>

                    - Строительные материалы<br/>

                    - Автозапчасти<br/>

                    - Промышленная и бытовая химия<br/>

                    - Электротовары<br/>

                    - Продукты питания<br/>

                    - Метизная продукция и др.<br/>

                    Также сетчатый настил применяется как элемент безопасности в арочных проездах (предотвращает
                    выпадение штучного груза в межбалочном пространстве ярусов, расположенных в опасной зоне над
                    арочными проездами).<br/>

                    Преимущества сетчатого настила полки:<br/>

                    - Отвечает нормам пожарной безопасности благодаря хорошей проливаемости полок системой
                    пожаротушения;<br/>

                    - Высокая светопроницаемость настила, что упрощает работу персонала склада и увеличивает
                    безопасность работы;<br/>

                    - Высокая воздухопроницаемость обеспечивает хорошую вентиляцию грузов, что актуально для некоторых
                    категорий товаров;<br/>

                    - Легко устанавливается и снимается без применения специальных инструментов;<br/>

                    - Покрыт антикоррозийной полимерной краской;<br/>

                    - Гигиеничен: благодаря конструкции сетчатый настил не накапливает пыль и грязь, имеет эстетичный
                    внешний вид;<br/>

                    - Универсален: позволяет хранить широкий ассортимент товаров без использования паллет.<br/>

                    5. Делитель ряда применяются при необходимости вертикального хранения длинномерных грузов различной
                    номенклатуры. Делители устанавливаются на грузовые балки для разделения и организации пространства в
                    секциях стеллажа.<br/></p>
                <img align="center" src={img_3_16}></img>
                <img align="center" src={img_3_17}></img>


            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default Stelazhi_3;