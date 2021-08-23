import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '800px',
    height: '400px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
  username: {
    color: 'grey',
    fontFamily: 'Merriweather Sans,sans-serif'
  },
  createdAt: {
    marginBottom: '30px',
    color: 'grey',
    fontFamily: 'Merriweather Sans,sans-serif'
  },
  title: {
    marginBottom: '10px',
    color: '#066420',
    fontFamily: 'Merriweather Sans,sans-serif',
    fontWeight: '400'
  },
  body: {
    color: 'grey',
    fontFamily: 'Merriweather Sans,sans-serif',
    
  }
  
}));