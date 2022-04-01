import React from 'react';
import a from './Content.module.css'
import {Myposts} from './Myposts/Myposts';


export const Content = () => {
    return (
        <div className={a.content}>
            <div><img
                src="https://www.researchgate.net/profile/Georg-Waltner-2/publication/329620436/figure/fig1/AS:759099822206979@1557994909846/Image-sequence-and-views-of-the-reconstructed-point-cloud-a-j-images-from-the.ppm"
                alt="Обои"/>
            </div>
            <div className={a.item}>
                avatar
            </div>
          <Myposts/>
        </div>
    )
}