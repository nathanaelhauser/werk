import React from 'react'
import { Parallax, Background } from 'react-parallax'

const Parallaxx = _ => {
    return (
    <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={10}
            bgImage={require('./ParallaxImages/p1.jpg')}
            bgImageAlt="the cat"
            strength={200}
        >
            <div>
                <h1>WEEEERRRRKKKKK</h1>
            </div>
            <div style={{ height: '800px' }} />
        </Parallax>
 
        {/* -----dynamic blur-----*/}
        <Parallax
            // blur={{ min: -15, max: 15 }}
            blur={10}
            bgImage={require('./ParallaxImages/p1.jpg')}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div>
                <h1>THIS WILL LOOK COOL EVENTUALLY</h1>
            </div>
            <div style={{ height: '800px' }} />
        </Parallax>

        <Parallax
            // blur={{ min: -15, max: 15 }}
            blur={10}
            bgImage={require('./ParallaxImages/p1.jpg')}
            bgImageAlt="the dog"
            strength={-200}
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
            bgImage={'./ParallaxImages/p3.jpg'}
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