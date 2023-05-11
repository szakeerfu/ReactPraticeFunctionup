 

const Cell = ({ id, cell, setCells,go, setGo,cells,  }) => {


  const handleClick = (e) => {
  

    const taken = e.target.firstChild.classList.contains("circle")  
    ||e.target.firstChild.classList.contains("cross")

 

    if (!taken) {
      if (go === "circle") {
        e.target.firstChild.classList.add("circle")
        setGo("cross")
        handleCount("cricle")

      }
      if (go === "cross") {
        e.target.firstChild.classList.add("cross")
        setGo("circle")
        handleCount("cross")  

      }
     
   

    }

  }
 
 
 

  const handleCount = (className) =>{
    const nextCells= cells.map((cell, index)=> {
      if (index ===  id) {
        return className
        
      } else {
        return cell
      }
    })
    setCells(nextCells)


  }


  return (
    <div className='square' id={id} onClick={ handleClick}>
      <div className={cell}></div>
    </div>
  )
}

export default Cell