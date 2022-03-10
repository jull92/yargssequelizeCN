const yargs = require("yargs");
const {sequelize} = require("./db/connection");
const { addMovie, listMovies, updateMovie, updateMovie, deleteMovie } = require("./movie/movieFunctions");

console.log(sequelize);

const app = async (yargsObj) => {
    try {
        await sequelize.sync();
        if (yargsObj.add) {
            await addMovie({
                title: yargsObj.title,
                actor: yargsObj.actor
            });
            console.log(JSON.stringify(await listMovies(), null, 2));
        } else if (yargsObj.list) {
            console.log(JSON.stringify(await listMovies({[yargsObj.key]: yargsObj.value}), null, 2))
        } else if (yargsObj.update) {
            await updateMovie({

            })
            console.log("Movie updated")
        } else if (yargsObj.delete) {
            await deleteMovie()
            console.log("Movie deleted")
        } else {
            console.log("Incorrect command")
        }
        await sequelize.close();
    } catch (error) {
        console.log(error);
    }
};

app(yargs.argv);