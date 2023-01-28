declare global {
    namespace NodeJS{
        interface processEnv{
            CLIENT_ID: string,
            TOKEN: string
        }
    }
}

export interface BotEvent{
    name: string,
    once?: boolean | false,
    async execute: (...args) => void
}




export{}