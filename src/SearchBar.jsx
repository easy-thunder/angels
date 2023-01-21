import { useState } from "react"

function SearchBar ({searchSubmit}){
    const [search, setSearch]= useState('')


    function handleChange(e){
        searchSubmit(e.target.value);
    }

    // function handleSubmit(e){
    //     e.preventDefault();
    //     searchSubmit(search)
    // }
    
    return(

        <form 
        // onSubmit={handleSubmit}
        >
            {/* <select>
                <option>filter by both</option>
                <option>filter by service</option>
                <option>filter by product</option>
            </select> */}
            <input type="text" placeholder="search" onChange={handleChange}
            name = "search"
            />
            {/* <input type='submit' /> */}

        </form>

)}

export default SearchBar