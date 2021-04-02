import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { db } from "../firebase";

const useObtenerGasto = (id) => {
    const history = useHistory();
    const [gasto, establecerGasto] = useState('');

    useEffect(() => {
        db.collection('gastos').doc(id).get()
            .then((doc) => {
                if (doc.exists) {
                    establecerGasto(doc);
                } else {
                    history.push('/lista');
                }
            });
    }, [history, id]);

    return [gasto];
}

export default useObtenerGasto


