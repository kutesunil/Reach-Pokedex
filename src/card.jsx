import React from 'react';

const Card = ({data, img}) => {
    return (
        <div className="col-md-3">
            <div className="card text-center" style={{width: "15rem", margin : "10px"}}>
                <div className="card-header">
                    {data.name} 
                </div>
                <img className="card-img-top" src=
                    {
                        data.id.toString().length === 1 
                        ?
                        `${img}00${data.id}.png`
                        :
                        (
                            data.id.toString().length === 2
                            ?
                            `${img}0${data.id}.png`
                            :
                            `${img}${data.id}.png`
                        )
                    } alt={data.id}/>
                
                <div className="card-body">
                    <h5 className='card-title'> Type {data.type} </h5>
                    <p className='card-text'> EXP {data.base_experience} </p>
                </div>
            </div>
        </div>
    );
};

export default Card;