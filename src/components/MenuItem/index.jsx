import { useRouter } from 'next/navigation';
import * as C from './styled';


export const MenuItem = ({ title, icon, link, onClick, ativo }) => {
    const router = useRouter();

    const handleLinkClick = (e) => {
        e.preventDefault();
        router.push(link);
        onClick(link);
    };
    
    return (
        <C.LinkArea
            data-tooltip-content={title}
            data-tooltip-id="tip-right"
            active={ativo} 
            href={link}
            onClick={handleLinkClick}
        >
            <C.LinkIcon src={icon} />
        </C.LinkArea>
    );
};

export default MenuItem;
