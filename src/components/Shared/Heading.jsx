/* eslint-disable react/prop-types */

const Heading = ({ title, description, textColor }) => {
    return (
        <div className='text-center mb-10 max-w-[600px] mx-auto space-y-2'>
            <h1 className={`${textColor} text-3xl font-bold lg:text-4xl`}>{title}</h1>
            <p className='text-base text-gray-400'>{description}</p>
            
        </div>
    );
};

export default Heading
