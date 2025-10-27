import './Frinedsc.css'
export default function Frined({frined}) {
  const { name, email } = frined;

  return (
    <div>
      <h4 className='boox'>Name : {name} </h4>
      <p className='booxz'>Email: {email} </p>
    </div>
  );
}
