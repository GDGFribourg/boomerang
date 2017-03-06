angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        'name'          : 'GDG Fribourg',
        'id'            : '102886547280518367914',
        'googleApi'     : 'AIzaSyCnUsiy9YQWHfdKgkjiLsF5mt0KAOlHtTM',
        'pwaId'         : '5915725140705884785', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'https://www.gdgfribourg.ch',
        'twitter'       : 'gdgfribourg',
        'facebook'      : 'gdgfribourg',
        'youtube'       : 'UC9VJwqJhgpe5jbPLwxYP6nw',
        'meetup'        : 'gdgfribourg',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - H:mm',
        'cover' : {
            title: 'DevFest Switzerland 2017 - October 28-29 - Fribourg',
            subtitle: 'The biggest Google tech conference in Switzerland. All about machine learning, programming languages and applied emerging technologies',
            button: {
                text: 'More information',
                url: 'https://devfest.ch/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: false,
            panels: false,
            designSprints: false,
            roundTables: true
        },
        'HUB_IP': 'https://hub.gdgx.io'
        // 'HUB_IP': 'https://hub.gdgfribourg.ch'
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
