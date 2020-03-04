import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import LandingContext from '../../utils/LandingContext'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    },
  },
  card: {
    position: "",
    minWidth: 275,
    maxWidth: 650
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  }
}))

const RegForm = () => {
  const classes = useStyles()
  const { name, username, password, confirmPassword, age, weight, handleInputChange } = useContext(LandingContext)

  return (
    <Container maxWidth="sm">
      <Card className={classes.card} variant="outlined">
        <CardContent>

          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Get an account!
          </Typography>

          <Typography variant="h5" component="h2">
            <Container maxWidth="sm">
              <FormControl>
                <div className={classes.root}>
                  <TextField
                    label="username"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    className={classes.textField} 
                  />
                  <TextField
                    label="name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    className={classes.textField}
                  />
                  <TextField
                    type="password"
                    label="Password"
                    name="password"
                    id="regPassword"
                    className={classes.textField}
                  />
                  <TextField
                    type="password"
                    label="confirm pass"
                    name="confirmPassword"
                    id="regConfirmPassword"
                    className={classes.textField}
                  />
                  <TextField
                    type="number"
                    label="age"
                    name="age"
                    value={age}
                    onChange={handleInputChange}
                    className={classes.textField}
                  />
                  <TextField
                    type="number"
                    label="weight"
                    name="weight"
                    value={weight}
                    onChange={handleInputChange}
                    className={classes.textField}
                  />
                </div>
              </FormControl>
            </Container>
          </Typography>

        </CardContent>
      </Card>
    </Container>
  )
}

export default RegForm