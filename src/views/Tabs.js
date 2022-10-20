export default function Tabs() {

    return (
        <>
            <h1 className='text-center my-5'>Guitar Tabs</h1>
            <div className="container">
                <nav class="navbar navbar-light bg-light justify-content-between my-5 ">
                    <a class="navbar-brand">Enter a song name</a>
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
                <h4 className="mb-3 white-and"> Results </h4>
                <div class="list-group mb-5">
                    <a href="#" class="list-group-item list-group-item-action my-2"> test 1</a>
                    <a href="#" class="list-group-item list-group-item-action my-2">test2</a>
                    <a href="#" class="list-group-item list-group-item-action my-2">test3</a>
                    <a href="#" class="list-group-item list-group-item-action my-2">test 4</a>
                    <a href="#" class="list-group-item list-group-item-action my-2 ,b-5">test 5</a>
                </div>
            </div>
        </>
    )

}
