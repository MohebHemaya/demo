/* eslint-disable react/prop-types */

const SayHi = () => {
    return (
        <> 
        
            <div >
                <h1 className="bg-red-500 font-bold size">Hello from react</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, iusto! Neque doloremque aliquam dignissimos ea odio consectetur, quisquam est debitis aperiam obcaecati et, aut maiores nostrum. Fugit, quod quos. Aliquid.</p>
                <button className="btn btn-neutral">Neutral</button>
                
                <Name name ="moheb" age="20"/>
            </div>
            
        </>
    );
}

export default SayHi;


function Name({name , age}) {
    return(
<>
<p>hi i am {name}</p>
<p>my age is  {age}</p>
</>
    )
    
}