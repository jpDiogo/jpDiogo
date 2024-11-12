import "./Parallax.css";

const Parallax = () => {
    return (
        <section id="parallax">
            <div id="court">
                <img src={`${process.env.PUBLIC_URL}/imgs/left_basket.svg`} id= "left_basket_img" alt="left basket" />
                <img src={`${process.env.PUBLIC_URL}/imgs/court.svg`} id="court_img" alt="court" />
                <img src={`${process.env.PUBLIC_URL}/imgs/right_basket.svg`} id="right_basket_img" alt="right basket" />
                <img src={`${process.env.PUBLIC_URL}/imgs/basketball.svg`} id="basketball_img" alt="bouncing basketball" />
            </div>
            
        </section>
    );
};

export default Parallax;
