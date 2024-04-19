
export const MenuAtivo = (link) => {
    let data = {
        '/': false,
        '/orders': false,
        '/profile': false
    }
        ;
    if (link != '') {
        data[link] = true;
    }
    return data;
}