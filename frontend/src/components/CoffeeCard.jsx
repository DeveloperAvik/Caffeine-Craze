
function CoffeeCard({ coffee }) {

    const { name, quantity, supplier, taste, category, details, photo } = coffee

    return (
        <>

            <div>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure>
                        <img className="ml-4"
                            src={photo}
                            alt="Movie" />
                    </figure>
                    <div className=" flex justify-between w-full p-4">
                        <div>
                            <h2 className="card-title text-black">Name: {name}</h2>
                            <p>Quantity: {quantity}</p>
                            <p>Supplier: {supplier}</p>
                            <p>Taste: {taste}</p>
                        </div>

                        <div className="card-actions justify-center">
                            <div className="join join-vertical space-y-3">
                                <button className="btn join-item">View</button>
                                <button className="btn join-item">Edit</button>
                                <button className="btn join-item">X</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CoffeeCard
