import { useState } from "react"
import CustomSelect from "../components/CustomSelect"
import CustomInput from "../components/CustomInput"

export default function CreateListing() {
    const types = ['sell', 'rent']

    const [formData, setFormData] = useState({
        type: 'rent',
        name: '',
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        address: '',
        description: '',
        offer: false,
        regularPrice: 0,
        discountedPrice: 0,
        images: File
    })

    const {
        type, name,
        bedrooms, bathrooms,
        parking, furnished,
        address, description,
        offer, regularPrice,
        discountedPrice, images
    } = formData

    const handleChange = (event) => {
        const { id, value } = event
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }

    return (
        <main className="max-w-md px-2 mx-auto">
            <h1 className="text-3xl text-center mt-6 font-bold">Create a Listing</h1>
            <form>
                <CustomSelect
                    values={types}
                    selectedVal={type}
                    event={handleChange}
                    id="type"
                />
                <CustomInput
                    title="Name"
                    type='text' id='name'
                    value={name} event={handleChange}
                    placeholder="Name" maxLength="32"
                    minLength="10" required
                    extraClass="w-full"
                />
                <div className="flex space-x-6">
                    <CustomInput
                        title="Beds"
                        type='number' id='bedrooms'
                        value={bedrooms} event={handleChange}
                        placeholder="3" required
                        max="50" min="1"
                    />
                    <CustomInput
                        title="Baths"
                        type='number' id='bathrooms'
                        value={bathrooms} event={handleChange}
                        placeholder="1" required
                        max="50" min="1"
                    />
                </div>
                <CustomSelect
                    isBool
                    selectedVal={parking}
                    event={handleChange}
                    id="parking"
                    title="parking spot"
                />
                <CustomSelect
                    isBool
                    selectedVal={furnished}
                    event={handleChange}
                    id="furnished"
                    title="furnished"
                />
                <CustomInput
                    title="Address"
                    id='address'
                    value={address} event={handleChange}
                    placeholder="Address"
                    useTextArea
                    extraClass="w-full"
                />
                <CustomInput
                    title="Description"
                    id='description'
                    value={description} event={handleChange}
                    placeholder="Description"
                    useTextArea
                    extraClass="w-full"
                />
                <CustomSelect
                    isBool
                    selectedVal={offer}
                    event={handleChange}
                    id="offer"
                    title="offer"
                />
                <div className="flex w-full items-center space-x-10">
                    <CustomInput
                        title="Regular Price"
                        id='regularPrice'
                        type="number" min="50" max="400000000000"
                        value={regularPrice} event={handleChange}
                        placeholder="0" required
                        extraClass="w-full text-center"
                    />
                    <div>
                        <p className="my-3">$ / Month</p>
                    </div>
                </div>
                {offer && <div className="w-1/2">
                    <CustomInput
                        title="Discounted Price"
                        id='discountedPrice'
                        type="number" min="0" max="10"
                        value={discountedPrice} event={handleChange}
                        placeholder="0"
                        extraClass="w-full text-center"
                    />
                </div>}
                <CustomInput
                    title="Images"
                    subTitle="The first image will be the cover (max: 5)"
                    id='images'
                    type="file"
                    value={images} event={handleChange}
                    extraClass="w-full"
                    accept=".jpg,.png,.jpeg"
                    multiple required
                />
                <button type="submit" className="w-full my-3 px-7 py-3 bg-blue-600 text-white font-medium text-sm rounded shadow-mg hover:bg-blue-700 hover:shadow-lg focus:bg-blue-800 focus:shadow-lg active:bg-blue-900 active:shadow-lg transition duration-200 ease-in-out">
                    Create Listing
                </button>
            </form>
        </main>
    )
}
