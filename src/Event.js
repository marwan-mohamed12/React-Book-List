const EventExample = () => {
    // const [inputValue, setInputValue] = useState("");
    // const handleFormInput = (event) => {
    //     setInputValue(event.target.value);
    // };

    const handleFormInput = (event) => {
        console.log(event);
        console.log(event.target);
        console.log(event.target.value);
        console.log(event.target.name);
    };

    const handleButton = () => {
        console.log("Handle Button");
    };

    const formSubmition = (e) => {
        console.log("form submitted");
        e.preventDefault();
    };

    return (
        <section>
            <form onSubmit={formSubmition}>
                <input
                    type="text"
                    onChange={handleFormInput}
                    name="example"
                    placeholder="Enter Text"
                />
                <input type="submit" />
            </form>
            <button onClick={handleButton}>Click Me</button>
            {/* <p>{inputValue}</p> */}
        </section>
    );
};

export default EventExample;
