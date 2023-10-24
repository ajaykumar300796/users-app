import Card from "../../UI/Card/Card";
import usersListStyleClass from './UsersList.module.css';

export default function UsersList(props: any) {
  return (
    <Card cssClass={usersListStyleClass.users}>
      <ul>
        {props.users.map((user: any) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
