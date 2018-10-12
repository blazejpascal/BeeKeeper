const honeyKinds = [

    {
        id: 0,
        title: 'Wielokwiatowy',
        url: 'https://picsum.photos/398/265/?random',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque."
    },

    {
        id: 1,
        title: 'Lipowy',
        url: 'https://picsum.photos/398/265/?random',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque."
    },
    {
        id: 2,
        title: 'Spadziowy',
        url: 'https://picsum.photos/398/265/?random',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque."
    },
    {
        id: 3,
        title: 'Rzepakowy',
        url: 'https://picsum.photos/398/265/?random',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque."
    },
]

export const defaultHoney = {
    id: 4,
    title: 'Wybierz rodzaj miodu by dowiedzieć się o jego własciwościach ',
    url: 'https://picsum.photos/398/265/?random',
    description: ""
}

const sizeKinds = [
    {
        id: 1,
        name: '1kg'
    },
    {
        id: 2,
        name: '0.5kg'
    },
    {
        id: 3,
        name: '0.25kg'
    }

]

export function getHoningKinds() {
    return honeyKinds
}

export function getSizeKinds() {
    return sizeKinds
}