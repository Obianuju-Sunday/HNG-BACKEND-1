
const express = require('express');
const app = express();
const moment = require('moment');

// GET API
app.get('/api', (req, res) => {

    const slackName = req.query.slack_name;
    const track = req.query.track;

    try { 
        const currentUtcTime = moment().utcOffset(0).format('YYYY-MM-DDTHH:mm:ss[Z]');
        const currentDayOfWeek = moment().format('dddd');
        
            const response = {
                slack_name: slackName,
                track: track,
                current_day: currentDayOfWeek,
                utc_time: currentUtcTime,
                github_file_url: 'https://github.com/Obianuju-Sunday/HNG-BACKEND-1/blob/main/index.js',
                github_repo_url: 'https://github.com/Obianuju-Sunday/HNG-BACKEND-1',
                status_code: 200
            }
            res.status(200).json(response)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

app.use(express.json());
 
app.listen(2000, () =>{
    console.log(`Server started at port ${2000}`)
});

