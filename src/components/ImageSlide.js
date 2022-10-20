import { Carousel } from "react-bootstrap"

export default function ImageSlide() {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100 slides" src="https://wallpapercrafter.com/desktop/9065-concert-stage-fire-spotlights-dark-4k.jpg" />
                    <Carousel.Caption>
                        <h3 className="center-text">Find your guitar with us!</h3>
                        <p className="small-desc">Play your music today</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100 slides" src="https://i0.wp.com/colchesterguitarteacher.com/wp-content/uploads/2020/07/guitars-hanging.jpg?fit=1880%2C1250&ssl=1" />
                    <Carousel.Caption>
                        <h3 className="center-text">Discover Great Deals</h3>
                        <p className="small-desc">Enjoy our selection of guitars</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100 slides" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Guitar_Store.jpg"
   
                    />
                    <Carousel.Caption>
                        <h3 className="center-text">Feel free to test it out</h3>
                        <p className="small-desc">Please ask an employee for assistance</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img className="d-block w-100 slides" src="https://wallpapercrafter.com/desktop/271050-low-shot-of-a-musician-playing-guitar-during-a-sol.jpg"
                    />
                    <Carousel.Caption>
                        <h3 className="center-text">Become a member today!</h3>
                        <p className="small-desc">Get better deals with our membership</p>
                    </Carousel.Caption>
                </Carousel.Item>
               
            </Carousel>
        </>
    )
}