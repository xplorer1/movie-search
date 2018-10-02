const Hapi = require('hapi');
const Inert = require('inert');

const webPush = require('web-push');
const mdb = require('moviedb')('17d3f51a6ca0d1b109bdf049afd6618b');

const publicVapidKey = 'BJqx_xc-m75vN7aO_mUE2vfaKCh1j5YBQfWT0f2CO0ZDJOdsqayjaHjagbCbmj9jggGEGyTtcim7VrpbTckTnsU';
const privateVapidKey = 'HyYeJXmgnrL_3t8RGH32HfGcRpsWyBFM0YzdoO_zSZ8';

webPush.setVapidDetails('mailto:cj.ugwuanyi@gmail.com', publicVapidKey, privateVapidKey);

const server = Hapi.Server({
    port: 8080,
    host: 'localhost',
    routes: { cors: true }
});

server.route({
    method: 'POST',
    path: '/search',
    handler: async (request, h) => {
        let searchTerm = request.payload.searchTerm;

        return new Promise((resolve, reject) => {
            mdb.searchMovie({ query: searchTerm }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});

server.route({
    method: 'POST',
    path: '/searchAction',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: data.id, name: data.name }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});

server.route({
    method: 'POST',
    path: '/searchAnimation',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: data.id, name: data.name }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});

server.route({
    method: 'POST',
    path: '/searchAdventure',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: data.id, name: data.name }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});
server.route({
    method: 'POST',
    path: '/searchComedy',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: data.id, name: data.name }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});
server.route({
    method: 'POST',
    path: '/searchCrime',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: data.id, name: data.name }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});
server.route({
    method: 'POST',
    path: '/searchDrama',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.searchMovie({ id: data.id, name: data.name}, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});
server.route({
    method: 'POST',
    path: '/searchFamily',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: data.id, name: data.name }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});
server.route({
    method: 'POST',
    path: '/searchFantasy',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: data.id, name: data.name }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});
server.route({
    method: 'POST',
    path: '/searchHorror',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: data.id, name: data.name }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});
//mystery romance scifi thriller war western
server.route({
    method: 'POST',
    path: '/searchMystery',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: data.id, name: data.name }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});

server.route({
    method: 'POST',
    path: '/searchRomance',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: data.id, name: data.name }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});

server.route({
    method: 'POST',
    path: '/searchScifi',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: data.id, name: data.name }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});

server.route({
    method: 'POST',
    path: '/searchThriller',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: data.id, name: data.name }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});

server.route({
    method: 'POST',
    path: '/searchWar',
    handler: async (request, h) => {
        let data = {id: request.payload.id, name: request.payload.name};

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: data.id, name: data.name }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});

server.route({
    method: 'POST',
    path: '/searchWestern',
    handler: async (request, h) => {
        let westernId = request.payload.genreId;

        return new Promise((resolve, reject) => {
            mdb.genreMovies({ id: westernId }, (err, response) => {
                console.log(err, response);
                resolve(response);
                return response;
            });
        });
    }
});

server.route({
    method: 'POST',
    path: '/pushNotification',
    handler: async (request, h) => {
		
		const subscription = request.payload.subscription;
		const payload = JSON.stringify({title: 'Update!', body: 'This is a fresh update from the server!'});
		
		return webPush.sendNotification(subscription, payload).then(function(response) {
			console.log('Response: ', response);
			return response;
		})
		.catch(function(error) {
			console.log('Error: ', error)
			return error;
		})	
}
})

const startServer = async () => {

await server.register(Inert);

server.route({
    method: 'GET',
    path: '/{file*}',
    handler: {
        directory: {
            path: '/webstormNodejs/movie/'
        }
    }
});

await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

startServer();