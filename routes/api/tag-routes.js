const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    });
    
    if (!tagData) {
      res.status(404).json({ message: 'No tags found with that id!' });
      return;
    };

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  };
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    // create a new tag with key tag_name
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });

    // send successful data back
    res.status(200).json(tagData);
  } catch (err) {
    // send error if unsuccessful
    res.status(500).json(err);
  };
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    // create a new tag with key tag_name
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });

    // send successful data back
    res.status(200).json(tagData);
  } catch (err) {
    // send error if unsuccessful
    res.status(500).json(err);
  };
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    // create a new tag with key tag_name
    const tagData = await Tag.create({
      tag_name: req.body.tag_name,
    });

    // send successful data back
    res.status(200).json(tagData);
  } catch (err) {
    // send error if unsuccessful
    res.status(500).json(err);
  };
});

module.exports = router;
