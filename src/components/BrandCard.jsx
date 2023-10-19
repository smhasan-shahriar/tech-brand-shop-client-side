import { useNavigate } from 'react-router-dom';

const BrandCard = ({ brand }) => {
  const { name, image } = brand;
  const navigate = useNavigate()
  const handleClick = () =>{
    navigate(`brands/${name}`)
    
  }
  return (
    <div onClick={handleClick}>
      <div className="card max-w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt={`image of ${name}`}
          />
        </figure>
        <div className="card-body">
          <h2 className="text-center text-3xl font-bold">{name}</h2>
          
        </div>
      </div>
    </div>
  );
};

export default BrandCard;
