import { Colors } from "@/types/colors";

export const LoginMessage = (props: LoginMessageProps) =>{
    return <p className={props.color}>{props.message}</p>;
}

type LoginMessageProps = {
    message: string;
    color: Colors
}

