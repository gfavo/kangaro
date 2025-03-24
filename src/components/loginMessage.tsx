import { Colors } from "@/models/colors";

export const LoginMessage = (props: LoginMessageProps) =>{
    return <p className={props.color}>{props.message}</p>;
}

type LoginMessageProps = {
    message: string;
    color: Colors
}

