
function AddCoffee() {
    return (
        <div>
            <h1>Add coffee page</h1>

            <form >
                <div className="flex">
                    <div className="form-control">
                        <label className="label-text">
                            <span>
                                Coffee Name
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Coffee Name"
                                className="input input-bordered input-info w-full max-w-xs" />
                        </label>
                    </div>


                    <div className="form-control">
                        <label className="label-text">
                            <span>
                                Availabale Quantity
                            </span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                placeholder="Availabale Quantity"
                                className="input input-bordered input-info w-full max-w-xs" />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddCoffee
