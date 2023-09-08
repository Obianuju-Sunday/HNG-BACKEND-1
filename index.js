
const express = require('express');
const app = express();
const { DateTime } = require('luxon');

// GET API
app.get('/api', (req, res) => {

    const slackName = req.query.slack_name;
    const track = req.query.track;

  if (slackName && track) {
    try { 
        const currentDateTime = DateTime.utc();
        const currentDayOfWeek = currentDateTime.toFormat('EEEE');
        
            const response = {
                slack_name: slackName,
                track: track,
                currentDayOfWeek: currentDayOfWeek,
                currentDateTime: currentDateTime,
                githubFileUrl: 'https://github.com/Obianuju-Sunday/HNG-BACKEND-1/blob/main/index.js',
                githubSourceCode: 'https://github.com/Obianuju-Sunday/HNG-BACKEND-1',
                statusCode: '200'
            }
            res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
  } else {
    res.status(400).json({error: 'invalid parameters'})
  }
});

app.use(express.json());
 
app.listen(2000, () =>{
    console.log(`Server started at port ${2000}`)
});

