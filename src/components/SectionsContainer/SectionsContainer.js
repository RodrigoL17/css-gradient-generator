import style from "./sectionsContainer.module.css"

const SectionsContainer = ({children}) => {
    return (
        <div className={style.container}>
           {children} 
        </div>
    );
}

export default SectionsContainer;
