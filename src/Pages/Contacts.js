import React from 'react';
import ButtonAppBar from "../Components/Header/Header"
import '../Pages/Pages.css'
import Basement from "../Components/Basement/Basement";
import Gap from "../Components/Gap/Gap";
const ContactPage = () => {
    return (
        <div className="all_frame">
            <ButtonAppBar/>

            <div className="pages_text">
                <h2>Обратитесь к нашим специалистам <br/> </h2>
                <h3>и получите профессиональную консультацию по вопросам покупки оборудования.</h3>
                <h3>Вы можете обратиться к нам по телефону, по электронной почте или договориться о встрече в нашем офисе. Будем рады помочь вам и ответить на все ваши вопросы. <br/></h3>

                <h2>Телефоны: <br/></h2>
                <h2>(4162) 501-933 <br/></h2>

                <h2>Email: <br/></h2>
                <h3>podem-blag@mail.ru — по всем вопросам <br/></h3>

                <h2>Офис в Благовещенске <br/></h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.300356231467!2d127.52565647643567!3d50.28632097156132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5e8940e12a629ecf%3A0xd52aaba7390cc27b!2z0L_QvtC00YrQtdC8!5e0!3m2!1sru!2sru!4v1692441512165!5m2!1sru!2sru"
                    width={800}
                    height={580}
                    style={{ border: "0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>



            </div>
            <Gap/>
            <Basement/>

        </div>
    );
}

export default ContactPage;