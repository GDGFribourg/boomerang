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
        'youtube'       : 'UCkiYHK3IZMk5XsYZ626b9Rw',
        'meetup'        : 'gdgfribourg',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - H:mm',
        'cover' : {
            title: 'Worldwide GDG Events',
            subtitle: 'Directory of developer events organized by tags and displayed on a global map.',
            button: {
                text: 'Find local events',
                url: 'http://gdg.events/'
            }
        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            // appClinics: true,
            // panels: true,
            // designSprints: true,
            roundTables: true
        },
        'HUB_IP': 'https://hub.gdgx.io'
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
