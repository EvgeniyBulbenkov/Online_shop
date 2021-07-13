const ApiError = require('../error/apiError')

module.exports = (err, req, res) => {
    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message});
    }
    return res.status(500).json({message: 'Something went wrong'});
}