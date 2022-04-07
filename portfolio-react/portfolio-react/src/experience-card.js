export default function ExperienceCard({ image, image_alt, title, job, desc, frontend, backend, database }) {
	return (
		<div className="card-container">
			<div className="card px-0">
				<img src={image} className="card-img-top" alt={image_alt} />
				<div className="card-body">
					<div className="d-flex justify-content-between">
						<h5 className="card-title">{title}</h5>
						{ job &&
							<h5>
								<span className={ job === "Fullstack Developer" ? "badge bg-secondary" : "badge bg-primary"}>{job}</span>
							</h5>
						}
					</div>
					<p className="card-text">
						{desc}
					</p>
					<div className="badge-container">
						{ frontend &&
							frontend.map((fe) => {
								return <span className="badge bg-frontend" key={fe}>{fe}</span>
							})
						}
						{ backend &&
							backend.map((be) => {
								return <span className="badge bg-backend" key={be}>{be}</span>
							})
						}
						{ database &&
							database.map((db) => {
								return <span className="badge bg-database" key={db}>{db}</span>
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
}
