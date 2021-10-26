const request = require('request')

const forecast = (address,callback) => {
    const url =`http://api.weatherstack.com/current?access_key=1730593a1a99deaf395c418c0f8aaa7d&query=`+address
    
    // const url = 'https://api.darksky.net/forecast/1730593a1a99deaf395c418c0f8aaa7d/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.location.name + ' It is currently ' + body.current.temperature + ' degress out. Tt seems like ' + body.current.feelslike + ' degress.')
        }
    })
}

module.exports = forecast