import { useRouter } from 'next/navigation';

import * as C from './styled';


export const MenuItem = ({ icon, link, title}) => {
    const navigate = useRouter();

    const handleLinkClick = (e) =>{
        e.preventDefault();
        navigate.push(link)
    }
    let isActive = location.pathname === link;

    return (
        <C.LinkArea data-tooltip-content={title} data-tooltip-id="tip-right" active={isActive} href={link} onClick={handleLinkClick}>
            <C.LinkIcon src={icon} />
        </C.LinkArea>
    )
}

export default MenuItem;