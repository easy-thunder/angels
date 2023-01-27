
function SearchBar ({searchSubmit}){


    function handleChange(e){
        searchSubmit(e.target.value);
    }


    
    return(

        <form>

            <input type="text" placeholder="search" onChange={handleChange}
            name = "search"
        className="searchBar rounded-3xl h-6"

            />
            {/* <input type='submit' /> */}

        </form>

)}

export default SearchBar