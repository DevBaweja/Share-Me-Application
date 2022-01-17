const pin = {
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'About',
            type: 'string',
        },
        {
            name: 'destination',
            type: 'url',
        },
        {
            name: 'category',
            type: 'string',
        },
        {
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'userId',
            type: 'string',
        },
        {
            name: 'postedBy',
            type: 'postedBy',
        },
        {
            name: 'saves',
            type: 'array',
            of: [{ type: 'save' }],
        },
        {
            name: 'comments',
            type: 'array',
            of: [{ type: 'comment' }],
        },
    ],
};

export default pin;
