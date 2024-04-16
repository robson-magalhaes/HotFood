import { useRouter } from 'next/navigation';
import * as C from './styled';
import { useEffect, useState } from 'react';

export const MenuItem = ({ title, icon, link }) => {
    const router = useRouter();
    const [isActive, setIsActive] = useState(false);
    useEffect(() =>{
        router.refresh();
    },[isActive]);

    const handleLinkClick = (e) => {
        e.preventDefault();
        router.push(link);
        if(location.pathname == link){
            setIsActive(true);
            console.log('sim');
        }else{
            setIsActive(false);
        }
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
