var channels = ["esl_csgo", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

searchResults("");

function searchResults(filter) {
    channels.forEach(function(ref) {
        ajaxCall(ref, filter);
    });
};

function ajaxCall(ref, filter) {
    $.ajax({
        type: 'GET', 
        url: 'https://api.twitch.tv/kraken/streams/' + ref,
        headers: {
            'CLIENT-ID': '3mptricvwyiz38duaflj5994mdc311'
        },
        success: function(data) {
            showData(data, ref, filter);
        }
    });
};

function showData(data, refname, filter) {
    if(data.stream) {
        if(filter==="offline") {
            return;
        }
        $("#results").append('<li class="result-element"><a class="channel-name" href='+data.stream.channel.url+'>'+data.stream.channel.name+'</a><p class="side-status">Online</p></li>');
    } else {   
        if(filter==="online") {
            return;
        }
        $("#results").append('<li class="result-element"><a class="channel-name" href=https://www.twitch.tv/'+refname+'>'+refname+'</a><p class="side-status">Offline</p></li>');     
    }
}

function removeOldResults() {
    $("#results").empty();
}

document.getElementById("all-channels").onclick = function() {
    removeOldResults();
    searchResults("");
}

document.getElementById("online-channels").onclick = function() {
    removeOldResults();
    searchResults("online");
};

document.getElementById("offline-channels").onclick = function() {
    removeOldResults();
    searchResults("offline");
};
