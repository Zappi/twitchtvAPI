$(document).ready(function() {
   
    var followedChannels = [];
    
    $.ajax({
        type: 'GET', 
        url: 'https://api.twitch.tv/kraken/streams/gamesdonequick',
        headers: {
            'CLIENT-ID': '3mptricvwyiz38duaflj5994mdc311'
        },
        success: function(data) {
            console.log(data);
        }
    });
    
});