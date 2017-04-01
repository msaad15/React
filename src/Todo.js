import React, {Component} from 'react';

class Todo extends Component{
constructor(){
    super();
    //  debugger
    this.state = {
       
        arr : localStorage.getItem("key") == null ? [] :  JSON.parse(localStorage.getItem("key")),
        inputText :""
    }
}

    getlist()
    {
        return(
            this.state.arr.map((item , index) => {
                return <li key={index}>{item}<button  onClick={this.deleteItem.bind(this,index)}>DELETE</button></li>

            })
        )
    }

    setLocalStorage()
        {
            localStorage.setItem("key",JSON.stringify(this.state.arr))
        }
    getfromlocal()
    {
        var temp;
        var str=localStorage.getItem("key")
        str = JSON.parse(str);
            // console.log(" \ntemp " + str[0]);
        // debugger;
        for(var i =0 ; i<str.length; i++)
        {
            console.log(" \n " + str[i]);
        }
        // console.log(" 123 " + str);
    }
    
//changeValue bind with view
    inputChange(changeValue)
    {
        this.setState({inputText:changeValue.target.value});
    }
    addValue(event)
    {
            this.state.arr.push(this.state.inputText);
            this.setLocalStorage();
            this.setState({
                arr:this.state.arr,
                inputText:''
            })
            event.preventDefault();
            // this.getfromlocal();
    }

    deleteItem(index)
    {
        this.state.arr.splice(index , 1)
       this.setLocalStorage();
        this.setState({
                arr:this.state.arr,inputText:''
            })
    }

    render()
    {
        return(
            <ul>
                    {/*<li>{this.state.inputText}</li>*/}

                    <form onSubmit={this.addValue.bind(this)}>
                    <input type="text" value={this.state.inputText} onChange={this.inputChange.bind(this)}/>
                    <button onClick={this.addValue.bind(this)}>ADD</button>
                    <button onClick={this.setLocalStorage.bind(this)}>ADD LOCAL</button>
                    <button onClick={this.getfromlocal.bind(this)}>Get LOCAL</button>
                    </form>
                    {this.getlist()}
                    
            </ul>
        );
    }

}

export default Todo;