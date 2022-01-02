import s from '../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
  let path = '/dialogs/'+props.id;
  return (
    <div className={`${s.item} ${s.active}`}>
      <img src="https://i.pinimg.com/originals/51/4d/fb/514dfbc6b06dd135947f835cfb70377d.jpg" alt="katara" />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem