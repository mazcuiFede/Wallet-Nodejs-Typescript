import {createPool} from 'mysql2/promise'

export default createPool({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
    decimalNumbers: true
})