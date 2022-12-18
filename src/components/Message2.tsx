import { FunctionComponent } from "react";

interface Message2Props {
    isAdmin: boolean
}
 
const Message2: FunctionComponent<Message2Props> = ({isAdmin}) => {
// דרך שנייה
    return (<>
    {isAdmin && (<div><p>Welcome back admin</p></div>)}
        {!isAdmin && (<div><p>Welcome back user</p></div>)}</>);
}
 
export default Message2;