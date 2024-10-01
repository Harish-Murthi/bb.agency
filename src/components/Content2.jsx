import styles from "./content2.module.css";
export default function Content2() {
  return (
    <div className={styles.content2}>
      {" "}
      <div className={styles.txt}>
      We join forces with companies dedicated to<br></br> addressing real human
      needs. Leveraging our full-<br></br>cycle digital capabilities, we shape
      brands, <br></br>
      experiences, and products that enrich the lives of <br></br>millions every
      single day.
      </div>
      
      <button className={styles.button}>
        <h1>Lets Collaborate</h1>
      </button>
      <br></br>
      <hr className={styles.hr}></hr>
      <br></br>
    </div>
  );
}
