import style from './DeleteField.module.css'

export default function DeleteField({onClick}:{onClick: React.MouseEventHandler<HTMLDivElement>}) {
  return (
    <div onClick={onClick} className={`${style.delete}  me-3 d-flex align-items-center justify-content-center`}>
        <i className={`fa-regular fa-trash-can ${style.delteIcon}`}></i>
    </div>
  )
}
