const router = require('express').Router();
const axios = require('axios');
const { apexKey, trnKey } = require('../config.js');

// Test Endpoint
router.get('/test', (req, res) => {
  res.send('TEST SUCCESS');
});

// Server Endpoints

router.get('/trn/:platform/:username', (req, res) => {
  axios.get(`https://public-api.tracker.gg/v2/apex/standard/profile/${req.params.platform}/${req.params.username}`, {
    headers: { "TRN-Api-Key": 'a978fb92-856a-4d58-9c80-e92e0e6b93a8'}
  })
  .then(({ data }) => {
    const player_data = {
      platform: data.data.platformInfo.platformSlug,
      username: data.data.platformInfo.platformUserId,
      level: data.data.segments[0].stats.level.value,
      kills: data.data.segments[0].stats.kills.value,
      rank: data.data.segments[0].stats.rankScore.metadata.rankName,
    };
    res.send(player_data);
  })
  .catch((err) => res.send(err));
});

module.exports = router;
