import { Link } from 'react-router-dom'


function Navbar() {


    return (
        <div>
           
            <ul>
                <li>
                    <Link to='/'>home</Link>
                    
                   
                </li>
                <li> <Link to='galeria'>galeria</Link></li>
            </ul>
           
        </div>
    )

}