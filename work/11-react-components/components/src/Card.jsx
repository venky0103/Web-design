
function Card({ title, path, text, PageChange, showButton }) {
    const handleButtonClick = () => {
        PageChange('About');
      };
    return (
        <div className="card">
          <h3 className="card__title">{title}</h3>
          <img src={path} alt={title} />
          <p>{text}</p>
          {showButton && <button className="card__link" onClick={handleButtonClick}>Go to About</button>}
        </div>
      );
}

export default Card