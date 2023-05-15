export default function CustomInput({
    title = '', extraClass = '',
    subTitle = '', useTextArea = false,
    event, ...props
}) {
    const handleInput = (e) => {
        if (props?.type === 'file') {
            const { id, files } = e.target
            event({ id, value: files })
        } else {
            const { id, value } = e.target
            event({ id, value })
        }
    }

    return (
        <div className="my-3 space-y-1">
            <p className="text-lg mt-6 font-semibold">{title}</p>
            <small className="text-gray-600 font-medium">{subTitle}</small>
            {useTextArea ? (
                <textarea
                    {...props}
                    onChange={handleInput}
                    className={`input ${extraClass}`}
                    style={{
                        resize: "none"
                    }}
                ></textarea>
            ) : (
                <input
                    {...props}
                    onChange={handleInput}
                    className={`input ${extraClass}`}
                />
            )}
        </div>
    )
}
