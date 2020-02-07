import React from 'react'
import { Parallax } from 'react-parallax'
import Jumbotron from '../Jumbotron'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#424242',
      },
      secondary: {
        main: "#f44336"
      },
    },
    typography: {
      "fontFamily": "\"Bangers\"",
      "fontSize": 36
    }
  });

const Parallaxx = _ => {
    return (
        <ThemeProvider theme={theme}>
    <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={15}
            bgImage={require('./ParallaxImages/p3.jpg')}
            bgImageAlt="the cat"
            strength={600}
        >
            <div>
                <br/>
                {/* <LaxContainer /> */}
                <Jumbotron />
            </div>
            <div style={{ height: '800px' }} />
        </Parallax>
 
        {/* -----dynamic blur----- */}
        <Parallax
            // blur={{ min: -15, max: 15 }}
            blur={15}
            bgImage={require('./ParallaxImages/p3.jpg')}
            bgImageAlt="the dog"
            strength={-600}
        >
            <div>
                <h1></h1>
            </div>
            <div style={{ height: '800px' }} />
        </Parallax>

        <Parallax
            // blur={{ min: -15, max: 15 }}
            blur={15}
            bgImage={require('./ParallaxImages/p3.jpg')}
            bgImageAlt="the dog"
            strength={-600}
        >
            <div>
                <Typography variant="h6"></Typography>
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
    </ThemeProvider>
    )
};
export default Parallaxx