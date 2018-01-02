export const jobList = [
    {
        client: 'Cindy',
        jobDetails: {
            budget: 12000,
            contractors: ['bill', 'bob', 'rick'],
            managers: ['joe'],
            jobList: [{
                    task: 'sheetrock',
                    complete: true,
                    weight: '25%'
                },
                {
                    task: 'painting',
                    complete: false,
                    weight: '25%'
                },
                {
                    task: 'cleanup',
                    complete: false,
                    weight: '50%'
                }
            ]
        },
        priority: 5,
        progress: '25%',
        region: 'Salt Lake',
        sortOrder: 0,
        startDate: 'Sun Dec 24 2017 18:30:50 GMT-0700 (MST)'
    },
    {
        client: 'Andy',
        jobDetails: {
            budget: 16000,
            contractors: ['bill', 'rick', 'joe'],
            managers: ['joe'],
            jobList: [{
                    task: 'sheetrock',
                    complete: true,
                    weight: '25%'
                },
                {
                    task: 'painting',
                    complete: true,
                    weight: '25%'
                },
                {
                    task: 'cleanup',
                    complete: false,
                    weight: '50%'
                }
            ]
        },
        priority: 5,
        progress: '50%',
        region: 'Salt Lake',
        sortOrder: 0,
        startDate: 'Tue Dec 26 2017 22:30:50 GMT-0700 (MST)'
    },
    {
        client: 'Rick Ross',
        jobDetails: {
            budget: 500,
            contractors: ['joe'],
            managers: ['joe'],
            jobList: [{
                    task: 'sheetrock',
                    complete: false,
                    weight: '100%'
                }
            ]
        },
        priority: 3,
        progress: '0%',
        region: 'Cottonwood',
        sortOrder: 0,
        startDate: 'Thurs Dec 28 2017 04:30:50 GMT-0700 (MST)',
    },
    {
        client: 'Billy Joel',
        jobDetails: {
            budget: 1000,
            contractors: ['bill', 'rick', 'joe'],
            managers: ['joe'],
            jobList: [
                {
                    task: 'painting',
                    complete: false,
                    weight: '50%'
                },
                {
                    task: 'cleanup',
                    complete: false,
                    weight: '50%'
                }
            ]
        },
        priority: 4,
        progress: '0%',
        region: 'Cottonwood',
        sortOrder: 0,
        startDate: 'Sat Dec 23 2017 08:10:33 GMT-0700 (MST)'
    }
];