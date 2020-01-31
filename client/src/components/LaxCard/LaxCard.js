import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ReactAdvancedBanner from 'react-advanced-banner'

const useStyles = makeStyles({
  card: {
    maxWidth: 1000,
  },
  media: {
    height: 345,

  },
})

const LaxCard = props => {
  const classes = useStyles()
  return (
    <ReactAdvancedBanner 
            title="- W  E  R  K -"
            body="------ © the-group 2020 ------"
            image="image_url"
            parallax="true"
            shadow="0px 0px 44px 0px rgba(0, 0, 0, 0.11)"
            color="black"
            button="!!!!!! SIGN IN / REGISTER !!!!!!"
            buttonColor="#fff"
            buttonBackground="#444"
            link="/readmore"
/>
  )
}

export default LaxCard