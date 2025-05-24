export default function FoodJournalForm(){

    return(

    <div>

        <form>
            <input type = 'text' placeholder ="email"/>
            
              <input
         
          name="title"
          type="text"
          placeholder="Personal Food Journal"
        />
            <textarea
          
          name="body"
          placeholder="Write your Food Journal here"
          rows="10"
          cols="30"
          className="form-textarea"
        />
            
            </form>
    </div>


    )
}