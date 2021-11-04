import style from './modal.css'

export const Modal = ({active, setModalActive, info}) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
            <div className={active ? "modal_content active" : "modal_content"} onClick={e => e.stopPropagation()}>
                <div>Author: {info.author}</div>
                <div>Width: {info.width}</div>
                <div>Height: {info.height}</div>
            </div>
        </div>
    )
}

