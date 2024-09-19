import style from './ItemPeople.module.css'

export const ItemPeople = ({image, email}) =>{
    return (
        <div className={style.item_invite_people}>
          <button>
            <img  src={image}/>
           </button>  
           <p>{email}</p>
        </div>
    );
}