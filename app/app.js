(function(angular) {
    "use strict";

    var app = angular.module('etnaApp',[]);

    app.controller('OfficeLocationController', function($scope) {
        $scope.location = {
            names: [
                'Lorem ipsum dolor sit amet',
                'Lorem ipsum dolor sit amo',
                'Lorem ipsum dolor sit amore',
                'Lorem ipsum dolor sit amor',
                'Lorem ipsum dolor sit love',
                'Lorem ipsum dolor sit lovely'
            ]
        }
    });

    app.controller('EtnaController', function($scope) {
        $scope.etna =
        [
            {
                name: 'Etna Interactive',
                address: '709 Fiero Lane, Suite 43',
                city: 'San Luis Obispo',
                state: 'CA',
                zip: '93401',
                phone: '(866) 374-3762',
                fax: '(805) 543-2014'
            },
            {
                name: 'Etna Interactive - West',
                address: '711 Fiero Lane, Suite 109',
                city: 'San Luis Obispo',
                state: 'CA',
                zip: '93401',
                phone: '(866) 374-3732',
                fax: '(805) 543-2056'
            }
        ];
    });

})(window.angular);