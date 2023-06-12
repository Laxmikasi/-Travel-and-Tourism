const Pool = require('pg').Pool
const pool = new Pool({
user: 'postgres',
host: 'localhost',
database: 'my-database',
password: 'Test',
port: 5432,
});
const getBooking = () => {
    return new Promise(function(resolve, reject) {
    pool.query('SELECT * FROM booking ', (error, results) => {
    if (error) {
    reject(error)
    }
    resolve(results.rows);

    })
    })

    }
    const createBooking = (body) => {
    return new Promise(function(resolve, reject) {
    const { place,howmany,arrival,leaving } = body
    pool.query('INSERT INTO booking (place, howmany,arrival,leaving) VALUES ($1, $2,$3,$4) RETURNING *', [ place, howmany,arrival,leaving], (error, results) => {
    if (error) {
    reject(error)
    }
    resolve(`A new booking has been added : ${results.rows[0]}`)
    })
    })
    }
    const deleteBooking = () => {
    return new Promise(function(resolve, reject) {
    const id = parseInt(request.params.id)
    pool.query('DELETE FROM booking WHERE id = $1', [id], (error, results) => {
        if (error) {
            reject(error)
            }
            resolve(`Booking deleted with ID: ${id}`)
            })
            })
            }
            module.exports = {
            getBooking,
            createBooking,
            deleteBooking,
            }
            