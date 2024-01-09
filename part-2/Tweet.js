const Tweet = (props) => {
return < div className = "myClass">
<h3>{props.username}</h3>
<h4> {props.name} </h4>
<p>{props.date}</p>
<p>{props.message}</p>
</div>
};