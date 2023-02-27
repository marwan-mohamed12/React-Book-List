import { useState } from "react";
const DeleteElement = () => {
    const [elements, setElements] = useState(["Item 1", "Item 2", "Item 3"]);
    const deleteLi = (index) => {
        const newElemnts = [...elements];
        newElemnts.splice(index, 1);
        setElements(newElemnts);
    };
    return (
        <ul>
            {elements.map((elem, index) => {
                return (
                    <li key={index}>
                        {elem}
                        <button onClick={() => deleteLi(index)}> X </button>
                    </li>
                );
            })}
        </ul>
    );
};

export default DeleteElement;
