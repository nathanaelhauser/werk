import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel)

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary)

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails)

const WorkoutPanel = props => {
  return (
    <ExpansionPanel square expanded={props.expanded === props.id} onChange={props.handleChange(props.id)}>
      <ExpansionPanelSummary aria-controls={`${props.id}d-content`} id={`${props.id}d-header`}>
        <Grid container spacing={3} direction="row" justify="space-between">
          <Grid>
            <Typography>{props.name}</Typography>
          </Grid>
          <Grid>
            <Typography>{props.date}</Typography>
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={3} direction="column">
          <Typography>
            {props.area === 'upper' ? 'Upper Body' : 'Lower Body'}
          </Typography>
          <Typography>
            {`Exercises: ${props.exercises.map(exercise => exercise.name).join(', ')}`}
          </Typography>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default WorkoutPanel