import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs Fetch', () => {
    test('Debe traer 12 elementos', async() => {
        
        const gifs = await getGifs('rock');
        expect( gifs.length ).toBe(12);
    });
    
    test('Debe mostrar un arreglo vacio', async() => {
        
        const gifs = await getGifs('');
                
        expect( gifs.length ).toBe(0);
    });
});
