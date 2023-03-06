import React from 'react'


// extends : inherite properties atau method2 yg ada di class React.Component
class todoItems extends React.Component{
  
  deleteBtnHandler(){
    alert('Anda memencet Button delete')
  }

  btnHandler(type){
    alert(`Anda memencet button ${type}`)
  }
    // render: menampilkan component kita
    render() {
        return (
      <div className="my-1 d-flex flex-row justify-content-between todo-item-container align-items-center">
        {this.props.todoData.activity} ID: {this.props.todoData.id}
        <div>
          <button onClick={() => this.props.deleteTodoHandler(this.props.todoData.id)} className="btn btn-danger">Delete</button>
                        {/* () => : anonymous errow function, agar tidak ke alert saat belum ditekan tombolnya */}
          <button onClick={() => this.btnHandler('Complete')} className="btn btn-success">Complete</button>
        </div>
      </div>
        )
    }
}


export default todoItems;
