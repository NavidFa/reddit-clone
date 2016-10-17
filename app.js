angular.module('reddit', ['angularMoment', 'ngAnimate'])
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
        $scope.like = function(post) {
            post.vote += 1
        }
        $scope.dislike = function(post) {
            post.vote -= 1
        }
        $scope.postcomment = function(post) {
            post.comments.push({
                user: post.user,
                text: post.text
            });;
            post.showcommentForm = false;
            post.user = "";
            post.text = "";
        }
        $scope.showcommentform = function(post) {
            post.showcommentForm = true;
        }
        $scope.showcomment = function(post) {
            post.showcomment = !post.showcomment
        }
        $scope.showvalue = function() {
            console.log($scope.sort);
        }
        $scope.ratingcolor = function(post) {
            if (post.vote == 0) {
                post.color = 'black'
            } else if (post.vote < 0) {
                post.color = 'red'
            } else {
                post.color = 'green'
            }
        }
    }])
