function AddCoffee() {

    const handleAddCoffee = event => {
        event.preventDefault();
        // alert("Submitted")

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);
    };

    return (
        <div className="bg-[#F4F3F0] p-8 md:p-16">
            <h1 className="text-3xl font-bold text-center mb-8">Add a Coffee</h1>

            <form onSubmit={handleAddCoffee} className="space-y-8">
                {/* Coffee Name and Quantity Row */}
                <div className="md:flex md:space-x-8">
                    <div className="form-control md:w-1/2">
                        <label className="label-text text-lg font-semibold">
                            Coffee Name
                        </label>
                        <input
                            type="text"
                            placeholder="Coffee Name"
                            name="name"
                            className="input input-bordered input-info w-full rounded-lg p-3 mt-2" />
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label-text text-lg font-semibold">
                            Available Quantity
                        </label>
                        <input
                            type="text"
                            name="quantity"
                            placeholder="Available Quantity"
                            className="input input-bordered input-info w-full rounded-lg p-3 mt-2" />
                    </div>
                </div>

                {/* Supplier and Taste Row */}
                <div className="md:flex md:space-x-8">
                    <div className="form-control md:w-1/2">
                        <label className="label-text text-lg font-semibold">
                            Supplier Name
                        </label>
                        <input
                            type="text"
                            placeholder="Supplier Name"
                            name="supplier"
                            className="input input-bordered input-info w-full rounded-lg p-3 mt-2" />
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label-text text-lg font-semibold">
                            Taste
                        </label>
                        <input
                            type="text"
                            name="taste"
                            placeholder="Taste"
                            className="input input-bordered input-info w-full rounded-lg p-3 mt-2" />
                    </div>
                </div>

                {/* Category and Details Row */}
                <div className="md:flex md:space-x-8">
                    <div className="form-control md:w-1/2">
                        <label className="label-text text-lg font-semibold">
                            Category
                        </label>
                        <input
                            type="text"
                            placeholder="Category"
                            name="category"
                            className="input input-bordered input-info w-full rounded-lg p-3 mt-2" />
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label-text text-lg font-semibold">
                            Details
                        </label>
                        <input
                            type="text"
                            name="details"
                            placeholder="Details"
                            className="input input-bordered input-info w-full rounded-lg p-3 mt-2" />
                    </div>
                </div>

                {/* Photo URL */}
                <div className="form-control">
                    <label className="label-text text-lg font-semibold">
                        Photo URL
                    </label>
                    <input
                        type="text"
                        placeholder="Photo URL"
                        name="photo"
                        className="input input-bordered input-info w-full rounded-lg p-3 mt-2" />
                </div>

                {/* Submit Button */}
                <div className="flex justify-center items-center text-center mt-8">
                    <button
                        type="submit"
                        className="btn btn-primary w-full md:w-auto rounded-lg py-3 px-6 bg-gray-800 hover:bg-gray-900 text-white font-semibold text-lg">
                        Add Coffee
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddCoffee;
