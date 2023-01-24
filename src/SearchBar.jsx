
function SearchBar ({searchSubmit}){


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
        className="searchBar"

            />
            {/* <input type='submit' /> */}

        </form>

)}

export default SearchBar