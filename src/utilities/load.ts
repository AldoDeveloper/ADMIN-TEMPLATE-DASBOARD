
export async function loadComponent(promise: any, interval: number = 3000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(promise)
        }, interval)
    })
};