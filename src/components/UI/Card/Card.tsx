import cardClasses from './Card.module.css';

export default function Card(props: any) {
    return (
        <div className={`${cardClasses.card} ${props.cssClass}`}>{props.children}</div>
    )
}