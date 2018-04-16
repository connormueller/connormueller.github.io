var uid = 1;
function ContactController($scope) {

    $scope.contacts = function () {
            id: 0, 'name': 'Connor',
            'email': 'connor@msu.com',
            'phone': '123-456-7890'
            'children': '2'
            'adults': '2'
            'Destitnation': 'Berlin, Germany'
            'Dates': '7/1/2048-7/14/2018'
        }

    $scope.saveContact = function () {

        if ($scope.newcontact.id == null) {
            $scope.newcontact.id = uid++;
            $scope.contacts.push($scope.newcontact);
        } else {
            for (i in $scope.contacts) {
                if ($scope.contacts[i].id == $scope.newcontact.id) {
                    $scope.contacts[i] = $scope.newcontact;
                }
            }
        }
        $scope.newcontact = {};
    }
    
    $scope.delete = function (id) {
        for (i in $scope.contacts) {
            if ($scope.contacts[i].id == id) {
                $scope.contacts.splice(i, 1);
                $scope.newcontact = {};
            }
        }

    }

    $scope.edit = function (id) {
        for (i in $scope.contacts) {
            if ($scope.contacts[i].id == id) {
                $scope.newcontact = angular.copy($scope.contacts[i]);
            }
        }
    }
}
