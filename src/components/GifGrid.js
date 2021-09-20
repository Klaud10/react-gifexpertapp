import React from 'react'
import { useFetchGifts } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifts(category);

    return (
        <>
            <h2 className="animate__animated animate__fadeIn"> {category}</h2>

            {loading && <p className="animate__animated animate__flash">Cargando...</p>}

            <div className="card-grid">
                {
                    images.map( img => 
                        <GifGridItem 
                            key = {img.id}
                            {...img} 
                        />
                    )
                }
            </div>
        </>
    )
}
