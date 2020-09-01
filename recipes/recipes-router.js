const router = require('express').Router();
const Recipes = require('./recipes-model');

router.get('/', (req, res) => {
    Recipes.get()
    .then(payload => {
        res.status(200).json(payload);
    })
    .catch(error => handleError(error, res));
});

router.get('/:id/shoppingList', (req, res) => {
    const id = req.params.id;

    Recipes.getShoppingList(id)
    .then(payload => {
        if(!payload) {
            res.status(404).json({error: 'Shopping List not found'});
        } else {
            res.status(200).json(payload);
        }
    })
    .catch(error => handleError(error,res));
});

router.get('/:id/instructions', (req, res) => {
    const id = req.params.id;

    Recipes.getInstructions(id)
    .then(payload => {
        if(!payload) {
            res.status(404).json({error: 'Instructions not found'});
        } else {
            res.status(200).json(payload);
        }
    })
    .catch(error => handleError(error, res));
})

function handleError(error, res) {
    return res.status(500).json({error: error});
}

module.exports = router;