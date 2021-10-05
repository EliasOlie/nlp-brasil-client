import ChadButtonStyle from './styles/BtnStyle'

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    type?: 'submit'|'button'|'reset';
    children: React.ReactNode
    onClick?: () => void;
}

const Button: React.FC<IButtonProps> = ({
    type,
    children,
    onClick

}) => {
    return(
        <ChadButtonStyle type={type} onClick={
            onClick
        }>{children}</ChadButtonStyle>
    )
}



export default Button