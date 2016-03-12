export interface Item {
    id: string,
    subject: string,
    text: string
}

export interface StateTree {
    items: Item[],
    authUrl: string
}