var Person = React.createClass({
    render: function() {
        return (
            
        )
    }
})

var App = React.createClass({
    determineInfo: function(){
        if(this.props.info === 'person'){
            return <h1>Hello Person!</h1>
        } else {
            return <h1>Hello Anything else!</h1>
        }
    },
    render: function(){
        if(this.props.info === "thing"){
            var data = "nice!"
        } else {
            var data = "meh"
        }
        return (
                <div>
                    <p>{this.props.info}</p>
                    <p>{data}</p>
                    {this.determineInfo()}
                    {this.props.info == "awesome" ? 
                        <h1>Nice!</h1>
                        :
                        <h1>Not nice!</h1>
                    }
                </div>
            )
    }
})

ReactDOM.render(
    <App info="person"/>,
    document.getElementById('app')
)
