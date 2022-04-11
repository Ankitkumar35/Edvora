import React from 'react'

export const Cards = ({ride, distance, dt}) => {

  return (
    <>
    <div className="container-fluid">
    <div className="row">
        <div className="col-12 mt-3">
            <div className="card">
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img className="" src={ride.map_url} height={200} width={300} alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <p style={{float: 'right'}}><span>{ride.city}</span><span>, </span><span>{ride.state}</span></p>
                        <p className="card-text">Ride id: <span>{ride.id}</span> <br/> Origin Station: <span>{ride.origin_station_code}</span> <br/> Station Path: <span>[{ride.origin_station_code}, {ride.station_path.map((item, index)=>{return <span>{item}, </span>})} {ride.destination_station_code}] </span> <br />Date: <span>{ride.date}</span> <br /> {distance ? (<span>Distance: <span>{distance}</span></span>) : 'Distance: 0'}</p>
                        
                    </div>
                </div>
                <div className="card-footer">
                    <small className="text-muted">Last updated on {dt}</small>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}
