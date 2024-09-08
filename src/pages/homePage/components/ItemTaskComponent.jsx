import './ItemTaskComponent.css';

import ic_check from '../../../assets/icons/ic_check.svg';

const ItemStack  = ({done, number, text }) =>{


    return (
        <div className='item_task_in_stack_direction_row'>
            { done ? (
            <div className='is_finish_task'>
                <img src={ic_check}/>
            </div>
        ) : (
            <div>
            <div className='is_not_finish_task'>
               {number}
            </div>
            </div>
        )
            }
            <p>{text}</p>
        </div>
    )
}

export default ItemStack;