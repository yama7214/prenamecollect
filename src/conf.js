export let Config = class{
    static instance

    static getInstance(){
        let instance = Config.instance
        ? Config.instance
        : (Config.instance = new Config())
  
        return instance        
    }

    constructor(){
        this.serverport = 3010,

        //pg版のURLをポート番号含めて記載
        this.url_pg_nc = 'http://localhost:3001'

        //sql-server版のURLをポート番号含めて記載
        this.url_sqlserver_nc = 'http://localhost:3002'

        //テナントごとの振り分け情報
        this.tenant = {
            "strategit" : this.url_pg_nc,
            "strategit2": this.url_pg_nc,
            "strategit3": this.url_sqlserver_nc,
        }
        
        this.logs = {        
            appenders: { 
                access: { type: "dateFile", "category": "default", "pattern": "yyyyMMdd.log", filename: "./logs/preaccess.log" }
                },
            categories: { 
                default: { appenders: ["access"], level: "debug" } 
            }
        }
        this.developerOnly = {
            secretKey: 'AXTEqyxMlZTbxfpsgoV53fsr8Zi4dSjy'
        }
    }
}