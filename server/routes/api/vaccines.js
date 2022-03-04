const express = require('express');
const router = express.Router();

// load vaccine controller
// const Vaccine = require('../../controllers/vaccine_appointments.controller');

// load vaccine model
const Vaccine = require('../../models/vaccine_appointments.model')

router.get('/test', (req, res) => res.send('vaccine route testing!'));

router.get('/', (req, res) => {
  Vaccine.find()
    .then(vaccines => res.json(vaccines))
    .catch(err => res.status(404).json({ novaccinesfound: 'No Vaccines found' }));
});

router.get('/:id', (req, res) => {
  Vaccine.findById(req.params.id)
    .then(vaccine => res.json(vaccine))
    .catch(err => res.status(404).json({ novaccinefound: 'No Vaccine found' }));
});

router.post('/', (req, res) => {
  Vaccine.create(req.body)
    .then(vaccine => res.json({ msg: 'Vaccine added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this vaccine' }));
});

router.put('/:id', (req, res) => {
  Vaccine.findByIdAndUpdate(req.params.id, req.body)
    .then(vaccine => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

router.delete('/:id', (req, res) => {
  Vaccine.findByIdAndRemove(req.params.id, req.body)
    .then(vaccine => res.json({ mgs: 'Vaccine entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a vaccine' }));
});

module.exports = router;
