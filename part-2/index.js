const App = () => {
    return (
    <div>
        <Tweet  
        username = "goofy23"
        name = "sarah clark"
        date = "09/23/29"
        message = "Apple bees is the best duhhhh"
        />
        <Tweet  
        username = "goofy24"
        name = "sarah gas"
        date = "09/24/29"
        message = "Apple bees is the worst duhhhh"
        />
        <Tweet  
        username = "goofy25"
        name = "sarah shark"
        date = "09/25/29"
        message = "Apple bees is mid duhhhh"
        />
    </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));