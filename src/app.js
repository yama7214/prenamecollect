import express from "express"
import { Config } from "./conf.js"

const port = process?.argv[2] ? process.argv[2] : Config.getInstance().serverport
const app = express()

import log4js from 'log4js'
log4js.configure(Config.getInstance().logs)
const logger = log4js.getLogger('access')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/:tenantId/nameCollection/v1/*', function (req, res) {
    res.send("NameCollectServer Running");
})

app.post('/:tenantId/nameCollection/v1/*', function (req, res) {
    res.send("NameCollectServer Running");
})

app.listen(port, function () {
    console.log(`Pre-NameCollect app listening on port ${port}!`);
    logger.debug(`NameCollect app listening on port ${port}!`)
})