export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            sayBye: (msg: string) => console.log(`Bye ${msg}`)
        }
    }
})