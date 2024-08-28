import React from 'react'


const commentsData=[
    {
        name:'Lokesh',
        text:'Demo comment',
        replies:[]
    },
    {
        name:'Lokesh',
        text:'Demo comment',
        replies:[{
            name:'Lokesh',
            text:'Demo comment',
            replies:[{
                name:'Lokesh',
                text:'Demo comment',
                replies:[]
            },]
        },]
    },{
        name:'Lokesh',
        text:'Demo comment',
        replies:[{
            name:'Lokesh',
            text:'Demo comment',
            replies:[{
                name:'Lokesh',
                text:'Demo comment',
                replies:[]
            },]
        },]
    },
    {
        name:'Lokesh',
        text:'Demo comment',
        replies:[{
            name:'Lokesh',
            text:'Demo comment',
            replies:[{
                name:'Lokesh',
                text:'Demo comment',
                replies:[]
            },]
        },]
    },
]

const Comment=({data})=>{

    const {name,text,replies}=data;

    return (
    <div className='flex gap-2 shadow-sm shadow-slate-400 bg-gray-100 rounded-lg'>
        <img className='w-8 h-15'alt='user'src='https://cdn-icons-png.flaticon.com/512/3682/3682281.png'></img>
        <div className=' '>
            <p className='py-1 font-bold'>{name}</p>
            <p>{text}</p>
        </div>
    </div>)
}
const CommentsContainer = () => {
  return (
    <div className='flex-col p-3'>
        <h1 className='font-bold '>Comments: </h1>
        <Comment data={commentsData[0]}/>
    </div>
  )
}

export default CommentsContainer