angular.module('reddit', ['angularMoment','ngAnimate'])
    .controller('post', ['$scope', 'moment', function($scope, moment) {
        $scope.view = [];
        $scope.newPost = {}
        $scope.newcomment = {};
        $scope.view.showForm = false;
        $scope.showform = function() {
            $scope.view.showForm = true;
        }
        $scope.submitpost = function() {
            $scope.view.push({
                title: $scope.newPost.title,
                author: $scope.newPost.author,
                image: $scope.newPost.image,
                description: $scope.newPost.description,
                time: Date.now(),
                comments: [],
                vote: 0,
                showcommentForm: false,
                showcomment: false,
                color: 'black'

            });
            $scope.newPost.title = ""
            $scope.newPost.author = ""
            $scope.newPost.image = ""
            $scope.newPost.description = ""
            $scope.view.showForm = false;
        }
        $scope.like = function(index) {
            $scope.view[index].vote += 1
        }
        $scope.dislike = function(index) {
            $scope.view[index].vote -= 1
        }
        $scope.postcomment = function(index) {
            $scope.view[index].comments.push({
                author: $scope.newcomment[index].author,
                text: $scope.newcomment[index].text
            });;
            $scope.view[index].showcommentForm = false;
            $scope.newcomment[index].author = "";
            $scope.newcomment[index].text = "";
        }
        $scope.showcommentform = function(index) {
            $scope.view[index].showcommentForm = true;
        }
        $scope.showcomment = function(index) {
            $scope.view[index].showcomment = !$scope.view[index].showcomment
        }
        $scope.showvalue = function() {
            console.log($scope.sort);
        }
        $scope.ratingcolor = function(index) {
            if ($scope.view[index].vote == 0) {
                $scope.view[index].color = 'black'
            } else if ($scope.view[index].vote < 0) {
                $scope.view[index].color = 'red'
            } else {
                $scope.view[index].color = 'green'
            }
        }

    }])
