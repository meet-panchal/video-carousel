import './newsletter.css';
const NewsLetter = () => {
    return (
        <div className="newsletter-container">
            <p id='newsletter-text'>Join the Cozey Family to stay on the product launches and exclusive contents</p>
            <div className="newsletter-input">
                <input type="text" placeholder="Email" />
                <button>Sign up</button>
            </div>
        </div>
    );
}

export default NewsLetter;