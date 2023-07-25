export default function Die(props) {
    const styles={
        backgroundColor:props.held?"#16db4b":"white"
    }
    return (
    <div className="die-face" style={styles} onClick={props.dieId}>
        <h3 className="die-num">{props.value}</h3>
    </div>
  )
}