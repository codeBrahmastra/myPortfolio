// schemas/pet.js
export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        
          {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
          {
            title: 'Image',
            name: 'image',
            type: 'image'
          },
          {
            name: 'fblink',
            type: 'string',
            title: 'Facebook Link'
        }
           
    ]
}