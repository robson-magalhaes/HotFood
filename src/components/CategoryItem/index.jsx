import * as C from './styled';

export default ({ data, activeCategory, setActiveCategory }) => {
    return (
        <C.Container
            active={activeCategory == data.id}
            onClick={() => setActiveCategory(data.id)}
            data-tooltip-id="tip-top"
            data-tooltip-content={data.name}
            >
            <C.CategoryImage src={data.image} />
        </C.Container>
    )
}