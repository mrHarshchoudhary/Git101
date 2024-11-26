import styles from "./Container.module.css"
const Container=({children})=>{//tu esme props bhi rkh skta he prr destructure always matter son 
  return <div className={styles.container}>{children} </div>
}
export default Container