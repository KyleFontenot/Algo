import styles from "./ContextDropdown.module.scss";
const ContextDropdown = (props) => {
	return <div className={styles.contextinfo}>{props.message}</div>;
};
export default ContextDropdown;
