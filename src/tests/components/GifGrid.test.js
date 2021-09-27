import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid />', () => {

    const category = 'rock'; 
    
    test('Debe mostrarse correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });

        const wrapper = shallow( <GifGrid category={ category } />);
        expect( wrapper).toMatchSnapshot();
    });

    test('Debe mostrar item cuando se cargan imágenes con "useFetchGifs"', () => {

        const gifs = [{
            id: 'abc',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquiera'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquiera'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow( <GifGrid category={ category } />);

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists()).toBe(false);
        expect( wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});
