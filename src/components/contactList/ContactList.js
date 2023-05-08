import css from './ContactList.module.css';

export const ContactList = ({ contactSeach, deleteContacts }) => {

    return (
        <ul> 
            {contactSeach.map(({name, number, id}) => {
                return (
                    <li className={css.user} key={id}>
                        <p>Name:  {name}</p>
                        <p>Number:  {number}</p>
                        <button className={css.btn} onClick={() => {deleteContacts(id)}}>Delete</button>
                    </li>
                );
            })}
        </ul>
    )
}