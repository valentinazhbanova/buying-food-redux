import Filter from "./Filter";

const AllCategories = () => {
    return(
        <div>
            <h1>What kind of food do you like?</h1>

            {['ITALIAN', 'SALADS', 'SOUP', 'ALL CATEGORIES'].
            map(category =>  <Filter key={category.id} category={category} />
            )}
           
        </div>
    )
}

export default AllCategories;