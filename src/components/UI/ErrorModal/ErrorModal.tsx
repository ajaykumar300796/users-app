import Button from "../Button/Button";
import Card from "../Card/Card";

import ErrorModalStyleClasses from './ErrorModal.module.css';

export default function ErrorModal(props: any) {
  return (
    <Card cssClass={ErrorModalStyleClasses.modal}>
      <header className={ErrorModalStyleClasses.header}>
        <h2>
          {props.title}
        </h2>
      </header>
      <div className={ErrorModalStyleClasses.content}>
        <p>
          {props.message}
        </p>
      </div>
      <footer className={ErrorModalStyleClasses.actions}>
        <Button>okay</Button>
      </footer>
    </Card>)
}
