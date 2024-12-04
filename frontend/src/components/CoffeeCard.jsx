import { FaRegEye } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { TiDeleteOutline } from "react-icons/ti";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function CoffeeCard({ coffee, coffees, setCoffees }) {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee

    const handelDelete = _id => {
        console.log(_id)
        // Try me!
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });

                            const remaining = coffees.filter(cof=> cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }

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
                                <button className="btn join-item"><FaRegEye /></button>
                                <Link to={`updatecoffee/${_id}`}>
                                    <button className="btn join-item"><CiEdit /></button>
                                </Link>
                                <button onClick={() => handelDelete(_id)} className="btn join-item"><TiDeleteOutline /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CoffeeCard
