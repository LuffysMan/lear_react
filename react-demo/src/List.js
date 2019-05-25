import React, {PureComponent} from 'react'  //React 是export default出来的, PureComponent不是, 所以要用{}
import './List.css'

class List extends PureComponent{
    constructor(props){
        super(props);
        this.handleAddClick = this.handleAddClick.bind(this);
        this.handleRemoveClick = this.handleRemoveClick.bind(this);
        this.handleFinishClick = this.handleFinishClick.bind(this);
        this.state = {items: []};
    }

    handleAddClick(){
        var content = this.refs.itemContent.value;
        if(content.length == 0) return;
        console.log(content);
        var list = this.state.items;
        var newList = list.concat([{
            id: list.length+1,
            content: content,
        }]);
        this.setState({items: newList});
        this.refs.itemContent.value = ""
    }

    handleRemoveClick(index) {
        const newList =[...this.state.items] ;
        newList.splice(index, 1);
        console.log(newList);
        this.setState({items: newList,});
    }

    handleFinishClick(index){
    
            console.log("handleFinishClick");
            // e.preventDefault();
            this.state.items.finished = true;
            this.setState(this.state);
        
    }

    render(){
        return(
            <div>
                <table>
                    <thead>
                    ToDoList
                    </thead>
        
                <tbody>
                {
                    this.state.items.map(
                        (item, index) => {
                            <tr>
                                return(
                                <td key={item.id}>{item.id}</td>
                                <td>{item.content}</td>
                                <td>{item.finished?<span>finished</span>:
                                    <a  onDoubleClick={this.handleFinishClick(index)}>未完成</a>}</td>
                                <td className="optionCol">
                                    <a onClick={this.handleRemoveClick(index)}>移除</a>
                                </td>
                            )
                            </tr>
                            
                           
                        }
                        
                    )
                }
                </tbody>
                <div className='btn'>
                    <input type='text' ref='itemContent'/>
                    <button onClick={this.handleAddClick}>Add</button>
                </div>
            </table>
            </div>
            
            
        )
    }
} 

export default List;