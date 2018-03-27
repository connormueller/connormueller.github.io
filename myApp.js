var app = angular.module('myApp', []);


app.controller('activitiesCtrl', [
    '$scope',
    function ($scope) {
        $scope.results = {
            activity: [
              { title: 'City Tours', activity: 'Berlin' },
              { title: 'City Tours', activity: 'New York City' },
              { title: 'City Tours', activity: 'Brisbane' },
              { title: 'Sports', activity: 'Brisbane' },
              { title: 'Cycling', activity: 'Brisbane' },
              { title: 'Cycling', activity: 'Berlin' },
              { title: 'Museums', activity: 'Brisbane' }
              { title: 'Museums', activity: 'Vancouver' }
              { title: 'Museums', activity: 'New York City' }
              { title: 'Museums', activity: 'Berlin' }
              { title: 'Boating', activity: 'Brisbane' }
              { title: 'Boating', activity: 'Vancouver' }
              { title: 'Boating', activity: 'Cancun' }
              { title: 'Sailing', activity: 'Vancouver' }
              { title: 'Beach', activity: 'Vancouver' }
              { title: 'Beach', activity: 'Cancun' }
              { title: 'Hiking', activity: 'Vancouver' }
              { title: 'Theatre', activity: 'New York City' }
              { title: 'Parks and Recreation', activity: 'New York City' }
              { title: 'Parks and Recreation', activity: 'Cancun' }
              { title: 'Snorkeling', activity: 'Cancun' }
            ]
        }
    }
]);
