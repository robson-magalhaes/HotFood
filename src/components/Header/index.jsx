import { useState } from 'react';
import * as C from './styled';

export default ({ search, onSearch }) => {
    const [inputActive, setInputActive] = useState(search == '' ? false : true);
    const handleInputFocus = () => {
        setInputActive(true);
    }
    const handleInputBlur = () => {
        if (search == '') {
            setInputActive(false);
        }
    }
    const handleChange = (e) => {
        onSearch(e.target.value);
    }
    return (
        <C.Container>
            <C.Logo src="/assets/logo.png" />
            <C.SearchInput
                type="text"
                placeholder="Digite um produto..."
                active={inputActive}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                value={search}
                onChange={handleChange}
            />
        </C.Container>
    )
}