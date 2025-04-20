
interface partnerProps {
  name: string;
  designation: string;
}

const Partner = ({name, designation}: partnerProps) => {
    return (
      <div className="App">
        <div key={name} className="flex flex-col gap-1">
          <dt className="text-base/7 font-semibold text-red-700">{name}</dt>
          <dd className="text-4xl font-semibold tracking-tight text-blue">{designation}</dd>
        </div>
      </div>
    );
  }
  
  export default Partner;