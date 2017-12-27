export const jobList = [
    {
        client: 'Cindy',
        startDate: '1513918286431',
        priority: 5,
        progress: '25%',
        region: 'Salt Lake',
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
        }
    },
    {
        client: 'Andy',
        startDate: '1513918286431',
        priority: 5,
        progress: '50%',
        region: 'Salt Lake',
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
        }
    },
];