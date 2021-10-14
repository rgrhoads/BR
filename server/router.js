const router = require('express').Router();
const axios = require('axios');
const db = require('../database/index.js');
const { apexKey, trnKey } = require('../config.js');

// Test Endpoint
router.get('/test', (req, res) => {
  res.send('TEST SUCCESS');
});

// Server Endpoints
router.get('/apex/users', (req, res) => {
  db.query(`SELECT * FROM users`)
    .then((response) => res.send(response.rows))
    .catch((err) => console.log('Error: ', err));
});

router.get('/apex/:platform/:username', (req, res) => {
  axios.get(`https://public-api.tracker.gg/v2/apex/standard/profile/${req.params.platform}/${req.params.username}`, {
    headers: { "TRN-Api-Key": 'a978fb92-856a-4d58-9c80-e92e0e6b93a8'}
  })
  .then(({ data }) => {
    db.query(`
      INSERT
      INTO users(username, platform, player_rank, player_level, kills)
      VALUES(
        '${data.data.platformInfo.platformUserId}',
        '${data.data.platformInfo.platformSlug}',
        '${data.data.segments[0].stats.rankScore.metadata.rankName}',
        '${data.data.segments[0].stats.level.value}',
        '${data.data.segments[0].stats.kills.value}'
      )
    `)
      .then(res.send('SUCCESS!'))
      .catch((err) => console.log('Error: ', err));
  })
  .catch((err) => res.send(err));
});

router.post('/trn/:platform/:username', (req, res) => {
  axios.post('endpoint', )
    .then()
    .catch();
});

module.exports = router;
