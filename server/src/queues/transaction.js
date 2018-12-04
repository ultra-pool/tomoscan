'use strict'

import TransactionHelper from '../helpers/transaction'

const consumer = {}
consumer.name = 'TransactionProcess'
consumer.processNumber = 32
consumer.task = async function (job, done) {
    let hash = job.data.hash.toLowerCase()
    let timestamp = job.data.timestamp
    console.info('Process Transaction: ', hash)
    try {
        await TransactionHelper.crawlTransaction(hash, timestamp)
    } catch (e) {
        done(e)
    }

    done()
}

module.exports = consumer
