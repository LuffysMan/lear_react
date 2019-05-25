import React, {PureComponent} from 'react'  //React 是export default出来的, PureComponent不是, 所以要用{}
import './List.css'

class List extends PureComponent{
    state = {
        toDoList: [
            {
                id: 1,
                content: 'reading', 
            },
            {
                id:2,
                content: 'runnig',
            }
        ],
    }

    handleAddClick = () => {
        const content = this.refs.itemContent.value
        const list = this.state.toDoList
        const newList = list.concat([{
            id: list.length+1,
            content: content,
        }])
        this.setState({toDoList:newList})
    }

    render(){
        return(
            <div>
                <h2>ToDoList</h2>
                <div className='list-wrapper'>
                    {
                        this.state.toDoList.map(i => {
                            return(
                            <div className='list-item' key={i.id}>
                                <h3>{i.id}</h3>
                                <p>{i.content}</p>
                            </div>)})}
                </div>
                <div className='btn'>
                    <input type='text' ref='itemContent'/>
                    <button onClick={this.handleAddClick}>Add</button>
                </div>
            </div>
            
        )
    }
} 

export default List;