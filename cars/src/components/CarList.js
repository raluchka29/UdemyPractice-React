import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store/slices/carsSlice';

function CarList() {
    const dipatch = useDispatch();
    const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
        const filteredCars = data.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
        cars: filteredCars,
        name: form.name,
    }
    });

    const handleCarDelete = (car) => {
        dipatch(removeCar(car.id));
    };

    const renderedCars = cars.map((car) => {
//state.form.name
const bold = name && car.name.toLowerCase().includes(name.toLowerCase);

        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button 
                className='button is-danger'
                onClick={() => handleCarDelete(car)}
                >
                    Delete
                </button>
            </div>
        )
    })

    return <div className='car-list'>
        {renderedCars}
        <hr />
    </div>
}

export default CarList;