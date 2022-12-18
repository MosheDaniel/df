import { FunctionComponent } from "react";

interface MessageProps {
    isAdmin:boolean
}
 
const Message: FunctionComponent<MessageProps> = ({isAdmin}) => {
     
        if (isAdmin) {
            return (<div><p>Welcome Back Admin</p></div>);
        } return (
        <div><p>Welcome Back User</p></div>
        );
}
 
export default Message;