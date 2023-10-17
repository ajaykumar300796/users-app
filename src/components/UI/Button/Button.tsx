import ButtonStyles from './Button.module.css';

export default function Button(props: any) {
    return (
        <button
            className={ButtonStyles.button}
            type={props.type || 'button'}
            onClick={props.onClick}
        >{props.children}</button>
    )
}