import React from 'react'
import style from "./DeleteOption.module.css"

export default function DeleteOption({ onClick }: { onClick: React.MouseEventHandler<HTMLDivElement> }) {
    return (
        <div onClick={onClick} className={`${style.delete} d-flex align-items-center justify-content-center`}>
            <i className={`fa-regular fa-trash-can ${style.delteIcon}`}></i>
        </div>
    )
}
