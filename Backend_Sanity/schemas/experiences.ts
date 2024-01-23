export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
           {name:'name',
               title:'name',
               type:'string'
            },
            {
                name:'history',
                title:'History',
                type:'array',
                of:[{ type:'workExperience'}]
            },
    ]
    
}