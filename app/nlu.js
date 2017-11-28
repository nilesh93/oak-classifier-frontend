angular.module('nlu',[])
    .controller('MainController', ($http, $scope) => {
        $scope.movie_name = "";
        $scope.movie_id = "";
        $scope.movie_result = {};
        $scope.loading = true;

        $scope.getData = function () {
            $scope.loading = true;
            $http.get(host + "movie/"+ $scope.movie_id)
                .then((res) => {
                    console.log(res.data);
                    $scope.movie_result = res.data;
                    $scope.loading = false;
                }, () => {
                    $scope.loading = false;
                    swal(
                        'Something went wrong',
                        '',
                        'error'
                    );
                    return;
                });
        };
    });