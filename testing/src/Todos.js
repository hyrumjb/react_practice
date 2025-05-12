import { memo } from "react";
import styles from './my-style.module.css';

const Todos = ({ todos }) => {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <p key={index} className={styles.bigblue}>{todo}</p>;
            })}
        </>
    );
};

export default memo(Todos);