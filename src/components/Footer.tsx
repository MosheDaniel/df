import { FunctionComponent } from "react";

interface FooterProps {
    myName: string;
    year: number;
}
 
const Footer: FunctionComponent<FooterProps> = ({myName, year}) => {
    return ( 
        <>
        <div>{myName} {year} - all rights reserved</div>
        <i className="fa-brands fa-instagram"></i><i className="fa-brands fa-github"></i><i className="fa-brands fa-facebook"></i>
        </>

     );
}
 
export default Footer;