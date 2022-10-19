// Array de productos
const products = [{
    id: '1',
    name: 'Asesoramiento a',
    price: 1000,
    stock: 10,
    categoria: 'Asesoramiento',
    foto: 'foto0'
},
{
    id: '2',
    name: 'Asesoramiento b',
    price: 1000,
    stock: 10,
    categoria: 'Asesoramiento',
    foto: 'foto1'
},
{
    id: '3',
    name: 'Asesoramiento c',
    price: 1000,
    stock: 10,
    categoria: 'Asesoramiento',
    foto: 'foto2'
},
{
    id: '4',
    name: 'Acompañamiento a',
    price: 1000,
    stock: 10,
    categoria: 'Acompañamiento',
    foto: 'foto3'
},
{
    id: '5',
    name: 'Acompañamiento b',
    price: 1000,
    stock: 10,
    categoria: 'Acompañamiento',
    foto: 'foto4'
},
{
    id: '6',
    name: 'Acompañamiento c',
    price: 1000,
    stock: 10,
    categoria: 'Acompañamiento',
    foto: 'foto5'
},
]

export const gFetch = () => {
return new Promise((res, rej) => {
    res(products)
})
}