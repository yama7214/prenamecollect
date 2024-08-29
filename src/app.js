import express from "express"
import fetch from 'node-fetch'
import { Config } from "./conf.js"

const port = process?.argv[2] ? process.argv[2] : Config.getInstance().serverport
const app = express()

import log4js from 'log4js'
log4js.configure(Config.getInstance().logs)
const logger = log4js.getLogger('access')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/:tenantId/nameCollection/v1/*', function (req, res) {
    console.log("GET")
    //パスパラメータからtenantIdを取得する

    //取得したtenantIdを元に、Configからtenantの振り分け先を取得する

    //本来のnamecollect APIのURL　= tenantの振り分け先 + req.originalUrlになるので、そこにリクエストを送信
    /*GETの場合のサンプルコード（このままでは動作しない）
    let url = Config.getInstance().appserver + this.tenantId + `/rest/v1/entities/selectitems?obj_name=person&column_code=${a.apicode}`
    const response = await fetch(url, {
        method: 'get',
        headers: {'Content-Type': 'application/json', 'X-Auth-API-Token':option.apikey}
    });
    */

    //ncから取得したレスポンスをそのまま返却
    res.send(response)
})

app.post('/:tenantId/nameCollection/v1/*', function (req, res) {
    console.log("POST")
    //パスパラメータからtenantIdを取得する

    //取得したtenantIdを元に、Configからtenantの振り分け先を取得する

    //本来のnamecollect APIのURL　= tenantの振り分け先 + req.originalUrlになるので、そこにリクエストを送信
    /*GETの場合のサンプルコード（このままでは動作しない）
    const response = await fetch(url, {
        method: 'post',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json', 'X-Auth-API-Token': option.apikey},
        agent: this.proxy
    });
    */


    //ncから取得したレスポンスをそのまま返却
    res.send(response)
})

//--- SERVER SETUP ---
 
app.listen(port, function () {
    console.log(`Pre-NameCollect app listening on port ${port}!`);
    logger.debug(`NameCollect app listening on port ${port}!`)
})