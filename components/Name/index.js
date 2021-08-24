const Name = (props) => {
  return (
    <div>
      <h1>Hola soy el componente Name: {props.name}</h1>
      <p>mi edad es {props.age}</p>
      {props.children}
      <style jsx>{`
        div {
          background-color: #002;
        }
      `}</style>
    </div>
  );
};

export default Name;
