import React from 'react'
import { useSelector } from 'react-redux';
import ButtonLogout from '../ButtonLogout/ButtonLogout';
import NavlinkReutilizable from '../Navlink/Navlink'
import './Menu.scss';



const Menu = () => {

    const {user, token} = useSelector((state) => state.auth)

    return (
        <div>
            <div className='container-Dropdown'>
                <ul className='Dropdown'>
                { !user && <>
                    <li><NavlinkReutilizable nav='/users/register' type='linkNav' texto='Registrate'/></li>
                    <li><NavlinkReutilizable nav='/users/login' type='linkNav' texto='Login'/></li>
                </>
                }
                { user && <>
                    <li><NavlinkReutilizable nav='/users/createbooking' type='linkNav' texto='Alquila tu garage'/></li>
                    <li><NavlinkReutilizable nav='/user/userProfile' type='linkNav' texto='Tu Perfil'/></li>
                    <li><ButtonLogout /></li>
                </>
                }

                    
                    
                    

                    
                </ul>
            </div>
        </div>
    )
}

export default Menu