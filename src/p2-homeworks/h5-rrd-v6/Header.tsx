import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Pages.module.css"

function Header() {
    return (
        <div className={s.header}>

            <NavLink to={"pre-junior"}>
                <div className={s.item}>
                    Pre-junior
                </div>
            </NavLink>

            <NavLink to={"junior"}>
                <div className={s.item}>
                    Junior
                </div>
            </NavLink>

            <NavLink to={"junior-plus"}>
                <div className={s.item}>
                    Junior-plus
                </div>
            </NavLink>

        </div>
    )
}

export default Header
