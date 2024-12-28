export function generateKey(pre) {
    return `${pre}-${new Date().getTime()}`
}