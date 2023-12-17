import styles from './message.module.css';
import { useEffect, useState } from 'react';


function Message( {type, msg} ){

    const [visible, setVisible] = useState(false);

    console.log(msg);

    useEffect(() => 
    {
        if(!msg){
            setVisible(false);
            return;
        }
        
            setVisible(true);

            const timer = setTimeout(() => {
                setVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        
    }, [msg])

    return (
        <> 
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>
                    {msg}
                </div>
            )}
        </>

    )
}

export default Message;