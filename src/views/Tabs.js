export default function Tabs() {

    return (
        <>
            <h1 className='text-center my-5'>Guitar Tabs</h1>
            <div className="container">
                <nav className="navbar navbar-light bg-light justify-content-between my-5 ">
                    <a className="navbar-brand">Enter a song name</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button  onclick={alert("This feature is still being worked on... apologies for the inconvenience")} className="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
                <h4 className="mb-3 white-and"> Results </h4>
                <div className="list-group mb-5">
                    <a href="https://www.songsterr.com/a/wsa/led-zeppelin-stairway-to-heaven-tab-s27" className="list-group-item list-group-item-action my-2"> test 1</a>
                    <a href="https://www.songsterr.com/a/wsa/guns-n-roses-sweet-child-o-mine-tab-s23" className="list-group-item list-group-item-action my-2">test2</a>
                    <a href="https://www.songsterr.com/a/wsa/metallica-fade-to-black-tab-s20" className="list-group-item list-group-item-action my-2">test3</a>
                    <a href="https://www.songsterr.com/a/wsa/ozzy-osbourne-crazy-train-tab-s61178" className="list-group-item list-group-item-action my-2">test 4</a>
                    <a href="https://www.songsterr.com/a/wsa/eagles-hotel-california-tab-s447" className="list-group-item list-group-item-action my-2 ,b-5">test 5</a>
                </div>
            </div>
        </>
    )

}
