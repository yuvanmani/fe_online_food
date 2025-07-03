const NewRestaurant = () => {

    const handleCreate = (e) => {
        e.preventDefault();
    }

    return (
        <div className="max-w-xs mx-auto mt-6 p-4 border rounded">
            <h2 className="text-2xl mb-4 text-green-600 font-bold">Create New Restaurant</h2>
            <form className="flex flex-col space-y-3" onSubmit={handleCreate}>
                <input type="text" name="name" placeholder="Enter name" className="border p-2 rounded" />
                <input type="text" name="description" placeholder="Description" className="border p-2 rounded" />
                <label htmlFor="address" className="px-2 rounded underline font-semibold">Address :</label>
                <input type="text" name="street" placeholder="Street" className="border p-2 rounded" />
                <input type="text" name="city" placeholder="City" className="border p-2 rounded" />
                <input type="text" name="state" placeholder="State" className="border p-2 rounded" />
                <input type="text" name="pincode" placeholder="Pincode" className="border p-2 rounded" />
                <label htmlFor="role" className="px-2 rounded underline font-semibold">Cuisine Type :</label>
                <input type="text" name="type1" placeholder="Cuisine type" className="border p-2 rounded" />
                <input type="text" name="type2" placeholder="Cuisine type" className="border p-2 rounded" />
                <button type="submit" className="bg-green-500 text-white p-2 font-semibold rounded hover:bg-green-600">Create Restaurant</button>
            </form>
        </div>
    )
}

export default NewRestaurant