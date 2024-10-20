import styles from './Pagination.module.css';


export const Pagination = ({filteredProducts,currentPage,setCurrentPage,itemsPerPage}) => {

    const quantity = Math.ceil(filteredProducts/ itemsPerPage);
    
  return (
    <div className={styles.pagination}>
      { 
        [...Array(quantity)].map((_, i) => (
          <button className={(currentPage === i+1) ? styles.buttonActive : styles.button} onClick={()=>setCurrentPage(i+1)} key={i+1}>{i+1}</button>
        ))
      }      
    </div>
  )
}


