

export default function Contact() {
  let heading = ["Varify ", "Products", "Details"];

  return (
    <div className="flex justify-center">
      <div className="bg-yellow-300 border w-70 ml-4 mt-4 p-3">
        <h2 className="text-2xl text-center">{heading[0]}</h2>
        <p className="text-blue-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nesciunt
          vitae placeat, adipisci vero expedita nam. Nobis minus optio eveniet!
        </p>
        
      </div>
      <div className="bg-yellow-300 border w-70 ml-4 mt-4 p-3">
        <h2 className="text-2xl text-center">{heading[1]}</h2>
        <p className="text-blue-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nesciunt
          vitae placeat, adipisci vero expedita nam. Nobis minus optio eveniet!
        </p>
        

      </div>
      <div className="bg-yellow-300 border w-70 ml-4 mt-4 p-3">
        <h2 className="text-2xl text-center">{heading[2]}</h2>
        <p className="text-blue-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut nesciunt
          vitae placeat, adipisci vero expedita nam. Nobis minus optio eveniet!
        </p>
       

      </div>
    </div>
  );
}
