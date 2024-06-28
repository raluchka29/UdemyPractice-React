import Button from "../components/button";
import { GoBell, GoCloud, GoDatabase, GoAlert, GoPaperclip} from 'react-icons/go';

function ButtonPage() {
    const handleClick = () => {     
    };
    return <div>
        <div>
            <Button success rounded outline onClick={handleClick} className="mb-5"><GoBell />Click me!</Button>
        </div>
        <div>
            <Button danger outline  onMouseEnter={handleClick} className="mb-5"><GoCloud/>Buy now!</Button>
        </div>
        <div>
            <Button warning  onMouseLeave={handleClick} className="mb-5" ><GoDatabase />See Deal!</Button>
        </div>
        <div>
            <Button secondary outline className="mb-5"><GoPaperclip />Add to wishlist!</Button>
        </div>
        <div>
            <Button primary rounded className="mb-5"><GoAlert />Hide ads!</Button>
        </div>
        </div>
}

export default ButtonPage;