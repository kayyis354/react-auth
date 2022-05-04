import React from "react"



class Product extends React.Component {
    state = {
        title: 'Product','quantitiy':0
    }

    componentDidMount(){
        document.title = this.state.title
    }
    handleMinus = () => {
        if(this.state.quantitiy > 0){
            this.setState({
                quantitiy: this.state.quantitiy - 1
            })
        }
    }
    handlePlus = () => {
        if(this.state.quantitiy <= 9){
            this.setState({
                quantitiy: this.state.quantitiy + 1
            })
        }
    }
   

    render(){
        return(
            <div className="container py-4 mt-5">
                <div className="card mb-3" >
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src="https://media.istockphoto.com/photos/teen-girl-after-her-vaccination-picture-id1311564458?b=1&k=20&m=1311564458&s=170667a&w=0&h=fK1QViaweFI1OlHtQ6G3S4VrrrMK2lMDrZK-d6yTGms=" className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <div className="input-group">
                            <button className="btn btn-primary" onClick={this.handleMinus}>-</button>
                            <input type="text" style={{textAlign:'center'}} value= {this.state.quantitiy} aria-label="First name" className="form-control" />
                            <button className="btn btn-primary" onClick={this.handlePlus}>+</button>
                            </div>
                            <button onClick={this.handleAddToCard} className="btn btn-primary mt-3 w-100">Add to cart</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
