adsApp.factory('authentication', function(){
	var key ='user';
	function saveUserData (data) {
		localStorage.setItem(key, angular.toJson(data));
	}

	function getUserData (data) {
		return angular.fromJson(localStorage.getItem(key));
	}

	function getHeaders (argument) {
		var headers={};
		var userData = getUserData();
		if (userData) {
			headers.Authorization = 'Bearer ' + getUserData().access_token;
		};
		return headers;
	}
	function getCurrentUser (argument) {
    	var userObject = sessionStorage['currentUser'];
        if (userObject) {
            return JSON.parse(sessionStorage['currentUser']);
        }
    };       

	function removeUser () {
		localStorage.removeItem(key);
	}
	function isAdmin () {
		var isAdmin = getUserData().isAdmin;
		return isAdmin;
	}

	return{
		saveUser: saveUserData,
		getUser: getUserData,
		getHeaders: getHeaders,
		removeUser: removeUser,
		isAdmin: isAdmin
	}

}) ;