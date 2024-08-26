const Input = ({ name }) => {
    return (
        <>
            <div className="inputContainer h-[12vh] w-[60%] bg--600 flex flex-col justify-center items-center">
                <div className="labeltag h-auto w-full flex justify-start items-center bg--700">
                    <label htmlFor="">{name}</label>
                </div>
                <input 
                    type="text" 
                    className="h-[6vh] w-[100%] bg--700 border-0 border-b-[1px] rounded-lg border-b-[#b8b8b8] focus:outline-none focus:border-b-[#b8b8b8]" 
                />
            </div>
        </>
    );
}

export default Input;