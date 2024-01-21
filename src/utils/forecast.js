const request = require("request")

const forecast = (longitude, latitude,  callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=cf2a23622475a2cb5e07c6d72215954b&query=' + latitude + ',' + longitude 
    request({url, json:true}, (error, { body }) => {
        if(error){
            callback('unable to connect to weather services', undefined)
        } else if(body.error) {
            callback('unable to find location', undefined)
        }else{
            callback(undefined, 
            'it is currently ' +  body.current.weather_descriptions[0] + ' with a chance of ' + body.current.precip + '% rain ' + ' with a temperatur of '  +  body.current.temperature +'.'
            )
        }
    })
}

module.exports = forecast
