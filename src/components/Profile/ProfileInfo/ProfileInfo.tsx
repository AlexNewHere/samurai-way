import React from 'react';
import a from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div className={a.content}>
            <div>
                <img className={a.img}
                src="https://www.researchgate.net/profile/Georg-Waltner-2/publication/329620436/figure/fig1/AS:759099822206979@1557994909846/Image-sequence-and-views-of-the-reconstructed-point-cloud-a-j-images-from-the.ppm"
                alt="Обои"/>
            </div>
            <div>Avatarca</div>

        </div>
    )
}