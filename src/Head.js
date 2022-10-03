import React from "react";
class Head extends React.Component{
    render(){
        return (
            <div className="flex flex-row justify-center">
                <div className="flex flex-col items-center my-4 sm:flex-row sm:my-8">
                    <img src="https://drive.google.com/uc?export=view&id=1g_tJHeikJ6HOYd_rwrWeNJtjRF7GB4S1" className="w-24 aspect-square rounded-full sm:w-28 sm:ml-12"></img>
                    <div className="flex flex-col items-center w-fit sm:items-start sm:ml-8">
                        <h1 className="my-2 text-2xl font-semibold">Dhiraj K. Sharma</h1>
                        <p className="px-12 sm:px-0 sm:mr-3 text-center font-medium sm:text-left text-gray-700 sm:max-w-xl">Hi, I am Dhiraj Kumar Sharma, a 2024 passout B.Tech in CSE. My areas of interest include Front End Development, UI/UX Design, Comics and Coffee &#9749;</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Head;