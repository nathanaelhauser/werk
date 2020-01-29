import React from 'react'
import { Parallax, Background } from 'react-parallax'
import LaxCard from '../LaxCard'
import LaxCarousel from '../LaxCarousel'

const Parallaxx = _ => {
    return (
    <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={15}
            bgImage={require('./ParallaxImages/p3.jpg')}
            bgImageAlt="the cat"
            strength={400}
        >
            <div>
                <h1>WEEEERRRRKKKKK</h1>
                {/* <LaxCard
                image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fitzfit.com%2Fwp-content%2Fuploads%2F2014%2F05%2FP90-300x211.png&f=1&nofb=1"
                name="WELCOME TO WERK!"/> */}
                <LaxCarousel />
            </div>
            <div style={{ height: '800px' }} />
        </Parallax>
 
        {/* -----dynamic blur-----*/}
        <Parallax
            // blur={{ min: -15, max: 15 }}
            blur={15}
            bgImage={require('./ParallaxImages/p3.jpg')}
            bgImageAlt="the dog"
            strength={-400}
        >
            <div>
                <h1>THIS WILL LOOK COOL EVENTUALLY</h1>
            </div>
            <div style={{ height: '800px' }} />
        </Parallax>

        <Parallax
            // blur={{ min: -15, max: 15 }}
            blur={15}
            bgImage={require('./ParallaxImages/p3.jpg')}
            bgImageAlt="the dog"
            strength={-400}
        >
            <div>
                <h1>I PROMISE</h1>
            </div>
            <div style={{ height: '800px' }} />
        </Parallax>
 
        {/* -----custom background element-----
        <Parallax strength={300}>
            <div>Use the background component for custom elements</div>
            <Background className="custom-bg">
                <img src="http://www.fillmurray.com/500/320" alt="fill murray" />
            </Background>
        </Parallax> */}
 
        {/* -----renderProp: "renderLayer"-----*/}
        <Parallax
            bgImage={'./ParallaxImages/nathan.jpg'}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <p></p>
        </Parallax>
    </div>
    )
};
export default Parallaxx