import React from 'react';
import Profile from './profile';



function Gallery() {
    const student = {
        pic:'img.jpg',
        name: 'Ankur Chaubey',
        branch: 'IT',
        section: 'C'

    }

    return (
        <div>
            <Profile data={student}/>
        </div>
    )

}

export default Gallery;