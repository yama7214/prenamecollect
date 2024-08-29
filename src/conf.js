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
        this.url_pg_nc = ''
        this.url_sqlserver_nc = ''
        
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