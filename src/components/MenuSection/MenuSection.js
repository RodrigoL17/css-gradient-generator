
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import style from './menuSection.module.css'



const MenuSection = ({type}) => {

    return (
        <div className={style.section}>
            <h3 className={style.label}>{type}</h3>
            <ButtonContainer type={type}/>     
        </div>
    );
}

export default MenuSection;
