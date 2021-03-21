
import './AjouterDossier.scss';

import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green, purple } from '@material-ui/core/colors';


import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


import { useState, useEffect, react } from 'react';

import { TwitterPicker } from 'react-color';
import { CustomPicker } from 'react-color';

//pour le button rouge
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});













export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#900');
//pour les syles de button
  const classes = useStyles();

  return (
    <div className="AjouterDossier">
      <Dialog open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
          />
          <TextField
            margin="normal"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
          />
          <TwitterPicker 
            width="100%" 
            triangle="hide"
            colors={["#181B1E","#181B1E","#181B1E","#181B1E","#181B1E","#181B1E"]}
            // colors="#181B1E"
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
          />
        </DialogContent>
        <DialogActions>
          <Button 
          // className="Button" 
          variant="contained"
          color="secondary"
          onClick={()=>setOuvert(false)} >
            Annuler
          </Button>
     
          <ThemeProvider theme={theme}>
          <Button
           className="Button" 
           variant="contained"
            color="primary" 
            className={classes.margin}
            onClick={() => nom !== '' && gererAjout(nom, couverture, couleur)} >
            Ajouter
          </Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>
    </div>
  );
}