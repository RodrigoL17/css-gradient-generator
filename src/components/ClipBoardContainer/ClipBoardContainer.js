import style from "./clipBoardContainer.module.css"

const ClipBoardContainer = ({children}) => {
    return (
        <div className={style.container}>
            {children} 
        </div>
    );
}

export default ClipBoardContainer;
