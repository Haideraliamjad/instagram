import React from 'react'

const Story = ({title,image}) => {
    return (
        <div className='story-outer'>
            <div className="story-image">
                <img src={image} className='dp' alt={image} />
            </div>
            <p className='text-story'>{title}</p>
        </div>
    )
}

export default Story
