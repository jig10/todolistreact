import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [todos, setTodos] = useState([
		<li key={1}>hacer camaa</li>,
		<li key={2}>hacer tarea</li>,
		<li key={3}>hacer ejercio</li>,
		<li key={4}>ducharme</li>
	]);
    const [tempInputVal, setTemporalInputVal] = useState()
	//todos.push(<li key={5}>comer</li>);
	return (
		<div className="text-center mt-5">
			<input onChange={(e) => setTemporalInputVal (e.target.value)}/>
			<button
				onClick={() => setTodos(todos.concat(<li key={5}>{tempInputVal}</li>))}>
				Add
			</button>
            
			<ul>{todos}</ul>
		</div>
	);
}
