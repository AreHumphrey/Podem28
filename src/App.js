import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Main from "../src/Pages/Main";
import ContactPage from "../src/Pages/Contacts"
import UseFulPage from "../src/Pages/Useful"
import UseFulPage1 from "./Pages/Useful1";
import UseFulPage2 from "./Pages/Useful2";
import UseFulPage3 from "./Pages/Useful3";
import UseFulPage4 from "./Pages/Useful4";
import UseFulPage5 from "./Pages/Useful5";
import Services from "./Pages/Services";
import Bloki from "./Pages/Bloki";
function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' Component={Main}></Route>
                <Route path='/contacts' Component={ContactPage}></Route>
                <Route path='/services' Component={Services}></Route>
                <Route path='/useful' Component={UseFulPage}></Route>
                <Route path="/bloki" Component={Bloki}></Route>
                <Route path='/tekh-pasport-na-blok-montazhnyy-hqg-l-k1' Component={UseFulPage1}></Route>
                <Route path='/pasport-na-lebyedku-ruchnuyu-barabannuyu-kanatnuyu-jhw-1t-2t-3t' Component={UseFulPage2}></Route>
                <Route path='/pasport-i-instruktsiya-po-ekspluatatsii-lebyedok-ruchnykh-barabannykh-modeley-hwv' Component={UseFulPage3}></Route>
                <Route path='/pasport-i-instruktsiya-po-ekspluatatsii-lebyedok-ruchnykh-modeley-hwg' Component={UseFulPage4}></Route>
                <Route path='/pasport-i-rukovodstvo-po-ekspluatatsii-lebedka-rychazhnaya-mtm-0-8t-1-6t-3-2t-5-4t' Component={UseFulPage5}></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default App;