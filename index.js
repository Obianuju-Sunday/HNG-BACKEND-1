
const express = require('express');
const app = express();
const { DateTime } = require('luxon');

// GET API
app.get('/api', (req, res) => {
    try { 
        const slackName = req.query.slack_name;
        const track = req.query.track;

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
});

app.use(express.json());
 
app.listen(2000, () =>{
    console.log(`Server started at port ${2000}`)
});




// // PROJECT DESCRIPTION

// // Create and host an endpoint using any programming language of your choice.
// // The endpoint should take two GET request query parameters and return specific information in JSON format.
// // :spiral_note_pad: Requirements
// // The information required includes:
// // Slack name
// // Current day of the week
// // Current UTC time (with validation of +/-2)
// // Track
// // The GitHub URL of the file being run
// // The GitHub URL of the full source code.
// // A  Status Code of Success



// const express = require('express');
// const app = express();
// // const bodyParser = require('body-parser');
// const { DateTime } = require('luxon'); // For date and time manipulation

// // Middleware to parse JSON and URL-encoded data
// app.use(express.json());
// // app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/get_info', (req, res) => {
//     const slackName = req.query.slack_name;
//     const track = req.query.track;

//     // Get current day of the week and UTC time
//     const currentDateTime = DateTime.utc();
//     const currentDayOfWeek = currentDateTime.toFormat('EEEE');

//     // Calculate UTC offset in hours
//     const utcOffset = currentDateTime.offset / 60;

//     // Validate UTC time within +/-2 hours
//     const isWithinRange = utcOffset >= -120 && utcOffset <= 120;
 
//     if (slackName && track && isWithinRange) {
//         // Replace these with your actual GitHub URLs
//         const githubFileUrl = 'https://github.com/yourusername/yourrepo/blob/main/yourfile.js';
//         const githubSourceUrl = 'https://github.com/yourusername/yourrepo';

//         // Create the response JSON
//         const response = {
//             slack_name: slackName,
//             current_day: currentDayOfWeek,
//             current_utc_time: currentDateTime.toISO(),
//             track: track,
//             github_file_url: githubFileUrl,
//             github_source_url: githubSourceUrl,
//             status_code: 200, // Success status code
//         };

//         res.status(200).json(response);
//     } else {
//         res.status(400).json({ error: 'Invalid input parameters' });
//     }
// });

// // Start the Express server
// app.listen(4000, () => {
//     console.log(`Server is running on port ${4000}`);
// });
