import { FunctionComponent } from "react";

interface Message3Props {
  isAdmin: boolean  
}
 
const Message3: FunctionComponent<Message3Props> = ({isAdmin}) => {
    return <>
    {isAdmin? <p>Welcome back Admin</p> : <p>Welcome back User</p> }
      </>
}
 
export default Message3;