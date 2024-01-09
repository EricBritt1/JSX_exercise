const App = () => {
    <div>
    <Person 
        name= "goofy"
        age = {19}
        hobbies = {["fun", "cool"]}
    />
    </div>
};

ReactDOM.render(<App />, document.getElementById('root'));