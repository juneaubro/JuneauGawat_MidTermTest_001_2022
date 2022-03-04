/*const Vaccine = require('../models/vaccine_appointments.model')

createVaccine = (req, res) => {
    Vaccine.create(req.body)
    .then(vaccine => res.json({ msg: 'Vaccine added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this vaccine' }));
}

updateVaccine = async (req, res) => {
    await Vaccine.findByIdAndUpdate(req.params.id, req.body)
    .then(vaccine => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
}

deleteVaccine = async (req, res) => {
    await Vaccine.findByIdAndRemove(req.params.id, req.body)
    .then(vaccine => res.json({ mgs: 'Vaccine entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a vaccine' }));
}

getVaccineById = async (req, res) => {
    await Vaccine.findById(req.params.id)
    .then(vaccine => res.json(vaccine))
    .catch(err => res.status(404).json({ novaccinefound: 'No Vaccine found' }));
}

getVaccines = async (req, res) => {
    await Vaccine.find()
    .then(vaccines => res.json(vaccines))
    .catch(err => res.status(404).json({ novaccinesfound: 'No Vaccines found' }));
}

module.exports = {
    createVaccine,
    updateVaccine,
    deleteVaccine,
    getVaccines,
    getVaccineById,
}
*/