import "./Name.css"
export default function Name({x,y}){
    return(<>
    <div >
        
        <div className="Name">
            {x}
        </div>
        <div className="ls">
            {y}
        </div>

    </div>
    </>

    );
}