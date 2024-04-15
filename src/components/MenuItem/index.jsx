import { useRouter } from 'next/navigation';
import { useRouter as route} from 'next/router';
import * as C from './styled';
import { useEffect, useState } from 'react';

export const MenuItem = ({ title, icon, link }) => {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    let ativo = location.pathname;
    useEffect(()=>{
        setIsActive(ativo == link);
    },[isActive])

    const handleLinkClick = (e) => {
        e.preventDefault();
        console.log(isActive);
        router.push(link);
    };
    return (
        <C.LinkArea
            data-tooltip-content={title}
            data-tooltip-id="tip-right"
            active={isActive} 
            href={link}
            onClick={handleLinkClick}
        >
            <C.LinkIcon src={icon} />
        </C.LinkArea>
    );
};

export default MenuItem;
