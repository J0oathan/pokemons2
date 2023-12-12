export interface Pokemon {
    nPokedex   : string,
    urlImg     : string,
    name       : string,
    description: string,
    type       : string,
    abilities  : string,
    height     : string,
    weight     : string,
    weaknesses : Array<string>
}

export interface Berry {
    name: string,
    url : string
}