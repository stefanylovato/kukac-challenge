/* eslint-disable react/jsx-no-target-blank */
import './style.scss';

function Card({ image, title, description}) {

    return (
            <div className="cards col-sm-12 col-md-6 col-lg-3 mt-3 mb-3">
                <div className='background'>
                <div className="card mh-200 d-inline-block ">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className='d-flex justify-content-center'>
                        <a href={`http://localhost:3000/${title}`} rel='noreferrer' className="btn btn-primary px-5">Try now</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>

    )
}

export default Card;