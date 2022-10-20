import Concert from "../components/ConcertCard";

export default function Ukulele() {

    return (
        <>
            <div className='container'>
                <nav class="navbar navbar-expand-lg navbar-light bg-light my-4">

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item active">
                                <a class="nav-link" href="/shop">Electric<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/shop-acoustic">Acoustics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/shop-ukulele">Ukulele</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/shop-accessories">Accessories</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <h1 className="my-5">
                Ukulele Shop
            </h1>
            <Concert />
        </>
    )
}