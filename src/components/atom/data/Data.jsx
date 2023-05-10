 
import './Data.css'
 

const Data = ( {Get} ) => {


    return (
        <>
        {
            Get.map((e , id) =>{
                return(
                    <div className="card" key={id}>
                        <img src={e.avatar} alt=""  />
                        <h3>
                             {e.first_name} {e.last_name}
                        </h3>
                 
                        <h4>
                            {e.email}
                        </h4>
                    </div>
                )
            })
        }
 
         
        </>


        
         

    )
}

export default Data;