var channels = ["esl_csgo", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

searchResults();

function searchResults() {
    channels.forEach(function(ref) {
        ajaxCall(ref);
    });
    return results;
};

function ajaxCall(ref) {
    $.ajax({
        type: 'GET', 
        url: 'https://api.twitch.tv/kraken/streams/' + ref,
        headers: {
            'CLIENT-ID': '3mptricvwyiz38duaflj5994mdc311'
        },
        success: function(data) {
            showData(data, ref);
        }
    });
};

function showData(data, refname) {
    console.log(data);
    if(data.stream) {
        $("#results").append('<li class="result-element">').append('<a href='+data.stream.channel.url+'>'+data.stream.channel.name).append('<p>Online</p>').append('</li>');
    } else {   
        $("#results").append('<li class="result-element">').append('<a href=https://www.twitch.tv/'+refname+'>'+refname).append('<p>Offline</p>').append('</li>');     
    }
}

