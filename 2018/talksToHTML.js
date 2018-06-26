let fs = require('fs');

function makeDescriptionsObject() {
    return talks.reduce(function (acc, next) {
        acc[cleanUpTalkDescription(next.title)] = next.description
        return acc;
    }, {})
}

function cleanUpTalkDescription(desc) {
    return desc.toLowerCase().split(' ').join('-')
}

fs.readFile('talks.json', 'utf8', function (err, data) {
    if (err) {
        return console.error(err);
    }

    let talks = JSON.parse(data);
    var lis = talks
        .filter(talk => !(talk.type === 'lightningTalk'))
        .map(talk =>
            `<li class="single-event" data-start="${talk.startTime}" data-end="${talk.endTime}" data-content="${cleanUpTalkDescription(talk.title)}" data-event="event-${talk.order}">
                <a href="#0">
                    <em class="event-name">${talk.title}</em>
                    <span class="event-person">${talk.name}</span>
                </a>
            </li>`)
        .join('\n')

    console.log(lis)
});