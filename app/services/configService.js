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
            title: 'DevFest Switzerland 2016',
            subtitle: 'The biggest Google tech conference in Switzerland. All about Android, Web and Cloud!',
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
            // appClinics: true,
            // panels: true,
            // designSprints: true,
            roundTables: true
        },
        'HUB_IP': 'https://hub.gdgx.io'
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
