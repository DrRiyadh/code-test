import { Handler, Context } from 'aws-lambda'
import { requestParser, corsAllowHeader } from './utils'
import data from './conditions.json'

let headers = {}
headers = {
    ...headers,
    ...corsAllowHeader,
}


export const conditions: Handler = async (
    event: any,
    context: Context
) => {
    const { body, params } = requestParser(event, context)

    let results: any = data


    return {
        statusCode: 200,
        headers,
        body: JSON.stringify(results),
    }
}
