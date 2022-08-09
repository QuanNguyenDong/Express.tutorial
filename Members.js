const uuid = require('uuid');

const members = [
    {
        id: uuid.v4(),
        name: 'John Doe',
        email: 'john@gmail.com',
        status: 'active',
    },
    {
        id: uuid.v4(),
        name: 'Bob Williams',
        email: 'bob@gmail.com',
        status: 'inactive',
    },
    {
        id: uuid.v4(),
        name: 'Shannon Jackson',
        email: 'shannon@gmail.com',
        status: 'active',
    },
];

module.exports = members;