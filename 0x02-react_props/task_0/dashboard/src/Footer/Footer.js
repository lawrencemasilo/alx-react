import { getFullYear, getFooterCopy } from "../utils/utils";
import './Footer.css';

function Footer() {
    <div className='App-footer'>
        <p>{getFooterCopy(true)}</p>
        <p>{getFullYear()}</p>
    </div>
}


export default Footer;