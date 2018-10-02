angular.module('ControllersModule', [])
    .controller('LandingPageController', ['$scope', '$state', '$log', '$http', '$rootScope', function($scope, $state, $log, $http, $rootScope) {

        const publicVapidKey = 'BJqx_xc-m75vN7aO_mUE2vfaKCh1j5YBQfWT0f2CO0ZDJOdsqayjaHjagbCbmj9jggGEGyTtcim7VrpbTckTnsU';

        if ('serviceWorker' in navigator) {
            console.log('Registering service worker');
            const registration = navigator.serviceWorker.register('../sw.js', { scope: '/' });
            console.log('Registered service worker' + registration);
        } 
    
        $scope.sendNotification = async function () {
            console.log('Registering service worker');
            const registration = await navigator.serviceWorker.
            register('/sw.js', { scope: '/' });
            console.log('Registered service worker');

            let subs = await registration.pushManager.getSubscription()
                .then(function(subscription) {
                    let isSubscribed = !(subscription === null);
                        //return subscription.unsubscribe();
                    if (isSubscribed) {
                        console.log('User IS subscribed.');
                    }
                    else {
                        return registration.pushManager.subscribe({
                            userVisibleOnly: true,
                            //The `urlBase64ToUint8Array()` function is the same as in
                            // https://www.npmjs.com/package/web-push#using-vapid-key-for-applicationserverkey
                            applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
                            //gcm_sender_id: "681339210596"
                        });
                    }
                });

            console.log('Registering push');
			
			let subJSObject = JSON.parse(JSON.stringify(subs));
			let p256dh = subJSObject.keys.p256dh;
			let auth = subJSObject.keys.auth;
			
			console.log(subs.endpoint);

            console.log('Registered push');

			console.log('Sending push');
            let subscription = {
                endpoint: subs.endpoint,
                keys: {
                    p256dh: p256dh,
                    auth: auth
                }
            };

            await fetch('/pushNotification', {
                method: 'POST',
                body: JSON.stringify({subscription: subscription}),
                headers: {
                    'content-type': 'application/json'
                }
            }); 
            console.log('Sent push');
        };

        function urlBase64ToUint8Array(base64String) {
            const padding = '='.repeat((4 - base64String.length % 4) % 4);
            const base64 = (base64String + padding)
                .replace(/\-/g, '+')
                .replace(/_/g, '/');

            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);

            for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        }

        (() => {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchScifi',
                data: {
                    id: 878,
                    name: 'Science Fiction'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $scope.actionMovies = response.data.results;
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        })();

        $scope.openSidebar = function () {
            document.getElementById("mySidebar").style.display = "block";
        };

        $scope.closeSidebar = function () {
            document.getElementById("mySidebar").style.display = "none";
        };

        $scope.search = function () {
            let searchTerm = $scope.searchTerm;
            $http({
                method: 'POST',
                url: 'http://localhost:8080/search',
                data: {
                    searchTerm: searchTerm
                }
            })
                .then(
                    function success(response) {
                        $log.dir(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchAction = function () {

            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchAction',
                data: {
                    id: 28,
                    name: 'Action'
                }
            })
                .then(
                    function success(response) {
                        $log.dir(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchAdventure = function () {

            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchAdventure',
                data: {
                    id: 12,
                    name: 'Adventure'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchAnimation = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchAnimation',
                data: {
                    id: 16,
                    name: 'Animation'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchComedy = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchComedy',
                data: {
                    id: 35,
                    name: 'Comedy'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchCrime = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchCrime',
                data: {
                    id: 80,
                    name: 'Crime'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchDrama = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchDocumentary',
                data: {
                    id: 99,
                    name: 'Documentary'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchDrama = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchDrama',
                data: {
                    id: 18,
                    name: 'Drama'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchFamily = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchFamily',
                data: {
                    id: 10751,
                    name: 'Family'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchFantasy = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchFantasy',
                data: {
                    id: 14,
                    name: 'Fantasy'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchHistory = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchHistory',
                data: {
                    id: 36,
                    name: 'History'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchHorror = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchHorror',
                data: {
                    id: 27,
                    name: 'Horror'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchMusic = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchMusic',
                data: {
                    id: 10402,
                    name: 'Music'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchMystery = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchMystery',
                data: {
                    id: 9648,
                    name: 'Mystery'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchRomance = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchRomance',
                data: {
                    id: 10749,
                    name: 'Romance'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchSciFi = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchScifi',
                data: {
                    id: 878,
                    name: 'Science Fiction'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchThriller = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchThriller',
                data: {
                    id: 53,
                    name: 'Thriller'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchWar = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchWar',
                data: {
                    id: 10752,
                    name: 'War'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        $scope.searchWestern = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:8080/searchWestern',
                data: {
                    id: 37,
                    name: 'Western'
                }
            })
                .then(
                    function success(response) {
                        $log.log(response.data.results);
                        $rootScope.results = response.data.results;
                        $state.go('searchResults')
                    },
                    function error(reason) {
                        $log.log('Reason: ', reason);

                    })
        };

        let hsButton = document.getElementById('hsButton');
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            let deferredPrompt = e;
            // Update UI notify the user they can add to home screen
            hsButton.style.display = 'block';
        });

        hsButton.addEventListener('click', (e) => {
            // hide our user interface that shows our A2HS button
            hsButton.style.display = 'none';
            // Show the prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice
                .then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the A2HS prompt');
                    } else {
                        console.log('User dismissed the A2HS prompt');
                    }
                    deferredPrompt = null;
                });
        });
    }])
    .controller('SearchResultsPageController', ['$rootScope', '$scope', function($scope, $rootScope) {
        $scope.searchResults = $rootScope.results;

    }]);