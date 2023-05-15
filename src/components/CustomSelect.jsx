import { toTitleCase } from "../custom-function";

export default function CustomSelect({
    id = '', values = [], title = '',
    event, selectedVal,
    isBool = false
}) {
    if (isBool) values = ['Yes', 'No']

    const handleSelect = (e) => {
        const { id, value } = e.target
        const val = isBool ? (value === 'Yes' ? true : false) : value
        event({ id, value: val })
    }

    const getRealVal = (val) => {
        return isBool ? (val === 'Yes' ? true : false) : val
    }

    return (
        <div className="my-3">
            <p className="text-lg mt-6 font-semibold">{title.trim().length === 0 ? toTitleCase(values.join(' / ')) : toTitleCase(title)}</p>
            <div className="flex space-x-4">
                {values.map(val => (
                    <button
                        key={val}
                        type="button" id={id}
                        value={val}
                        onClick={handleSelect}
                        className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-200 ease-in-out w-full ${selectedVal !== getRealVal(val) ? "bg-white text-black" : "bg-slate-600 text-white"}`}
                    >
                        {val}
                    </button>
                ))}
            </div>
        </div>
    )
}
