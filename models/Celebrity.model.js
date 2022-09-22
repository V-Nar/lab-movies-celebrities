//  Add your code here
const { Schema, model } = require('mongoose')

const celebrityModel = new Schema(
    {
        name: Schema.Types.String,
        occupation: Schema.Types.String,
        catchPhrase: Schema.Types.String,
    }
)

const Celebrity = model('Celebrity', celebrityModel)

module.exports = Celebrity