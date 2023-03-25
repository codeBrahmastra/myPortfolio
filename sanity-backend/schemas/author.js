export default {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        {
            name: 'authorname',
            type: 'string',
            title: 'Author Name'
        },
        {
            name: 'about',
            type: 'string',
            title: 'About'
        },
        {
            name: 'authorimage',
            type: 'image',
            title: 'Author Image'
        },
    ]
}