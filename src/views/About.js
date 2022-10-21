import Poster from "../components/Poster"
import Concert from "../components/ConcertCard"

export default function About() {

    return (
        <>
            <div className="container my-5 py-4">

                <div className="row about-bg ">
                    <div className="col-4 my-5 mx-4">
                        <div className='container border border-secondary poster-bg'>
                            <Poster />
                        </div>
                    </div>
                    <div>

                    </div>
                    <div className="container col-7 my-5">
                        <h2 className=' font-weight-bold text-center about-text my-5'>ABOUT US </h2>

                        <h4 className="about-text my-5">
                            Over the last couple of years, we've been able to achieve the unthinkable and expand into opening multiple stores across the state
                        </h4>
                        <h4 className="about-text my-5">
                            Our team continues to grow and so does our love for music
                        </h4>   
                        <h4 className="about-text my-5">
                            From the Project Guitar Team, we thank you!
                        </h4>


                    </div>
                </div>
                <img></img>
                <hr className=" border-light my-5" />
                <div>
                    <img></img>
                </div>
                <div className="container mt-4 mb-5 pb-5">
                    <Concert />
                </div>

            </div>
        </>
    )
}
