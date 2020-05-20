import React, {useRef} from 'react'

interface TodoFormProps{
    onAdd(title:string):void
}

export const TodoForm:React.FC<TodoFormProps>=(props)=>{

    const ref = useRef<HTMLInputElement>(null)


    const keyPressHandler = (event:React.KeyboardEvent)=>{
        if(event.key==="Enter" && ref.current?.value!==''){
            props.onAdd(ref.current!.value)
            ref.current!.value=""
        }
    }

    return(
        <div className="input-field mt2">
            <input 
            ref={ref}
            onKeyPress={keyPressHandler}
            type="text"  id="title"  
            placeholder="Введите название дела"/>
            <label htmlFor="title"  className="active">Введите название дела</label>
        </div>
    )
}

/* import React, {useState} from 'react'

export const TodoForm:React.FC=()=>{
    const [title, setTitle]=useState<string>("")

    const changeHandler = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setTitle(event.target.value)
    }
    const keyPressHandler = (event:React.KeyboardEvent)=>{
        if(event.key==="Enter"){
            console.log(title)
            setTitle("")
        }
    }

    return(
        <div className="input-field mt2">
            <input value={title}
            onChange={changeHandler}
            onKeyPress={keyPressHandler}
            type="text"  id="title"  
            placeholder="Введите название дела"/>
            <label htmlFor="title"  className="active">Введите название дела</label>
        </div>
    )
} */