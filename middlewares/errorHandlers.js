function errorHandler(err, req, res, next) {

    console.error(err);
    
    res.status(500).json({ error: "The website cannot display the page", message: err.message});

};

module.exports = errorHandler;