﻿import profileImage from './images/kamal_img.jpg';

var profileData = {
    ProfileImage: profileImage,
    LastUpdatedOn: 'Feb 27, 2019',
    Name: 'Kamaljit Singh',
    Address: 'Senior Engineer - Web design UI at Antares Systems Ltd, Bangalore, INDIA',

    Email: 'kamaljitsingh7@gmail.com',
    ProfileLinkedIn: 'https://www.linkedin.com/in/kamaljit-singh-27837371/',
    ProfileTwitter: '',
    ProfileGooglePlus: '',
    ProfileLinkedInTitle: 'Kamaljit Singh on LinkedIn',
    ProfileTwitterTitle: '',
    ProfileGooglePlusTitle: '',
    ProfileGmailTitle: 'email to kamaljitsingh7@gmail@gmail.com',

    Summary: [{
        Content: 'Understand and translate the business strategy, user research into actionable Information Architecture and Interaction Design '
    }, {
        Content: 'Design  wireframes, visual design screens and UI specifications, and interact with front end developers to aid development '
    }, {
        Content: 'Handson experience in HTML, CSS, JavaScript and JQuery  '
    }],
    TechnicalSkills: [
        {
            Header: 'Client',
            Skills: ['HTML', 'CSS', 'JAVASCRIPT', 'JQuery']
        },
       {
            Header: 'Design',
            Skills: ['Adobe Photoshop', 'Adobe Firework','Adobe Dream weaver', 'Eclipse juno']
        },
        {
            Header: 'Others',
            Skills: ['CVS']
        }
    ],
    Experience: [{
        Description: 'Sr. Software engineer Webdesign at Antares Systems Ltd, Bangalore (May 2010 to present)',
        Projects: [{
            Title: 'Translated the business strategy, task flows, user research into actionable Architecture Design, well accepted by the clients. (April 2015 - present)',
            Details: 'Designed WireFrame, Visual Design Screens and UI specifications, and interacted with front end Developers to aid development',
            Technologies: 'HTML, CSS, JavaScript, JQuery',
            Responsibilities: [
              'Initiator to use new client side frameworks like Aurelia (ES6/7).',
              'Created custom elements like input tags, file uploader, alerts & other commonly required elements',
              'Created theming (user customizable) in product using CSS variables',
              'For non-responsive pages, rendering different view (HTML) for mobile and desktop but keeping same View Model.',
              'Core screens development like Tender and Auction statistics.'
            ]
        }]}, 
        {
            Description: 'Web Designer - Netcastle Pvt. Ltd.(Sept 2008 to Apr 2010)',
            Projects:[
                {
                    Title: 'Web Designer (Sept 2008 to Apr 2010)',
                    Details: 'Designed and Developed Websites for various clients',
                    Technologies: 'HTML, CSS, JavaScript, JQuery and Flash',
                    Responsibilities: [
                      'Development of Client orders module.',
                      'Initiator and lead of cross browser compatibility development.'
                    ],
                    //SpecialAchievements: ['Won Innovation award on Annual Day for architectural contribution and cross browser compatibility.']
                }
            ]
        }],
    Education: [{
        Course: 'MSc IT (Information Technology)',
        Year: '2007',
        Institute: 'Mysore University, Mysore',
        Address: 'Karnataka, INDIA'
    },
    {
        Course: 'P.G.D.C.A (Post Graduate Diploma in Computer Application)',
        Year: '2005',
        Institute: 'Ramgarhia Polytechnic College',
        Address: 'Phagwara, Punjab, INDIA'
    },
    {
        Course: 'B.A',
        Year: '2004',
        Institute: 'Guru Nanak Nav Bharat College',
        Address: 'Panchhat,  Punjab, INDIA'
    }],
    Others: {
        Gender: 'Male',
        MartialStatus: 'Married',
        Languages: 'English, Hindi, Kannada, Punjabi',
        DOB: 'Jul 30, 1983'
    }
}

export { profileData}
