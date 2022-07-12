import React from 'react'
import { movieInfo } from 'src/pages/Search'
import styled from 'styled-components'

const Card = (props: movieInfo) => {
    const { title, medium_cover_image, like } = props
    return (
        <div>
            <img src={medium_cover_image} alt='poster'/>
            <div>{title}</div>
        </div>
    )
}

export default Card
