import React from 'react';
import one from '../images/1.jpg'
import three from '../images/3.jpg'
import four from '../images/4.jpg'
import five from '../images/5.jpg'
import six from '../images/6.jpg'
import seven from '../images/7.jpg'
import eight from '../images/8.jpg'


function Photos() {
    return (
        <section className='photo-container'>
            <img src={one} alt='img'  className='img-opt one'></img>
            <img src={three} alt='img' className='img-opt three'></img>
            <img src={four} alt='img' className='img-opt four'></img>
            <img src={five} alt='img' className='img-opt five'></img>
            <img src={six} alt='img' className='img-opt six'></img>
            <img src={seven} alt='img' className='img-opt seven'></img>
            <img src={eight} alt='img' className='img-opt eight'></img>
        </section>
    )
}

export default Photos