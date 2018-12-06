angular.module('userManager', [])
    .controller('userManagerCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.getList = function () {
            $http.get('/api/WS_User/GetUsers')
                .success(function (data, status, headers, config) {
                    $scope.postList = data;
                });
        }

        $scope.postItem = function () {
            item =
                {
                    post: $scope.newPostText
                };

            if ($scope.newTaskText != '') {
                $http.post('/api/WS_User/AddUser', item)
                    .success(function (data, status, headers, config) {
                        $scope.newPostText = '';
                        $scope.getList();
                    });
            }
        }

        $scope.complete = function (index) {
            $http.post('/api/WS_User/CompletePost/' + $scope.postList[index].id)
                .success(function (data, status, headers, config) {
                    $scope.getList();
                });
        }

        $scope.delete = function (index) {
            $http.post('/api/WS_User/DeleteUser/' + $scope.postList[index].id)
                .success(function (data, status, headers, config) {
                    $scope.getList();
                });
        }

        //Get the current user's list when the page loads.
        $scope.getList();
    }]);