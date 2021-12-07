import React, { FC, useState } from 'react'

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)
    }
    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {

    }
    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
    }
    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsDrag(true)
        console.log('Drop')
    }
    return (
        <div>
            <input value={value} onChange={changeHandler} type='text' />
            <button onClick={clickHandler}></button>
            <div onDrag={dragHandler} draggable style={{  height: 150, background: isDrag? 'red' : 'red' }}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{  height: 150, background: isDrag? 'red' : 'green', marginTop: '0' }}
            >

            </div>
            <div onDrag={dragHandler} draggable style={{ height: 150, background: 'blue' }}></div>

        </div>
    )
}

export default EventsExample
