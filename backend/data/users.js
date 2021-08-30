import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com', 
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Goku ',
        email: 'goku@example.com', 
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name: 'Vegeta',
        email: 'vegeta@example.com', 
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    
]

export default users