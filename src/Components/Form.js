import React from"react"

function Form(props){
    console.log("djsj")
return (
    
    <div>

        <form onSubmit={props.getWeather}>
        <input type ="text"name="city" placeholder="Enter the city"></input>
        <input type="text"name="country" placeholder="Enter the country"></input>
        <button>Get Weather</button>

        </form>

    </div>

)

}

export default Form 