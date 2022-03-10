const Movie = require("./movieTable");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async (filterObj) => {
    try {
        if (filterObj.undefined == undefined) {
            return await Movie.findAll();
        } else {
            return await Movie.findOne({where: filterObj});
        }
    } catch (error) {
        console.log(error);
    }
};

exports.updateMovie = async (id) => {
    try {
        var updateMovie = {
            title: Movie.title,
            actor: Movie.actor
        }
        return Movie.update(updateMovie, {where: id})
    } catch (error) {
        console.log(error);
    }
};

exports.deleteMovie = async (id) => {
    try {
        return Movie.destroy({where: id})
    } catch (error) {
        console.log(error);
    }
};
