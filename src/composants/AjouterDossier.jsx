
import './AjouterDossier.scss';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


import { useState, useEffect, react } from 'react';

import { TwitterPicker } from 'react-color';
import { CustomPicker } from 'react-color';






export default function AjouterDossier({ouvert, setOuvert, gererAjout}) {
  const [nom, setNom] = useState('');
  const [couverture, setCouverture] = useState('');
  const [couleur, setCouleur] = useState('#900');

  return (
    <div className="AjouterDossier">
      <Dialog open={ouvert} onClose={()=>setOuvert(false)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter un dossier</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nomDossier"
            label="Nom du dossier"
            type="text"
            fullWidth
            onChange={(e) => setNom(e.target.value)}
          />
          <TextField
            margin="dense"
            id="urlImage"
            label="Adresse de l'image de couverture"
            type="text"
            fullWidth
            onChange={(e) => setCouverture(e.target.value)}
          />
          <TwitterPicker 
            width="100%" 
            triangle="hide" 
            // colors="#181B1E"
            onChangeComplete={(couleur, e) => setCouleur(couleur.hex)}
          />
        </DialogContent>
        <DialogActions>
          <Button className="Button" color="danger" onClick={()=>setOuvert(false)} >
            Annuler
          </Button>
     
          <Button className="Button" background-color="succes" color='success' onClick={() => nom !== '' && gererAjout(nom, couverture, couleur)} >
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}