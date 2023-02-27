const Book = ({ img, title, author, getBook, id, number }) => {
    return (
        <article className="book">
            <span>{`#${number + 1}`}</span>
            <img src={img} alt={title} />
            <h2 onClick={() => getBook(id)}>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

export default Book;
